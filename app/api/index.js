// General api to access data
import axios from "axios";
import { ApiEndpoint } from "./apiConstants";
import * as TokenUtils from "../helpers/tokenUtils";

export default async function api(URL, method, oldToken, params, data) {

  const token = await TokenUtils.getAccessToken();

  let options;
  options = {
    headers: {
      ...(token && URL !== ApiEndpoint.LOGIN? {
       
        'Access-Control-Allow-Origin': '*',
        'Accept': "application/json",
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`,
        'X-TENANT-ID' : 'dialog',
        'X-APPLICATION-ID' : 'dms'
      } : 
      {
        'Access-Control-Allow-Origin': '*',
        'Accept': "application/json",
        'Content-Type': 'application/json',
        'X-TENANT-ID' : 'dialog',
        'X-APPLICATION-ID' : 'dms'
      })
     
    },
    ...(params && { params: params }),
    ...(data ? { data: data } : {data: {}})
  };

  const axiosInstance = axios.create({
    baseURL: ApiEndpoint.BASE_URL,
    method: method,
    timeout: 1000 * 60,
    // timeout: 2,
    url: URL,
    ...options
  });

  // const axiosInstance = axios.create({
  //   baseURL: ApiEndpoint.BASE_URL,
  //   method: method,
  //   timeout: 1000 * 60,
  //   url: URL,
  //   ...options
  // });

  console.log(
    "Request url ",
    (ApiEndpoint.BASE_URL) + URL
  );

  console.log("Request data ", data);

  console.log("Request option ", options);

  axiosInstance.interceptors.response.use(
    function(response) {
      console.log(response);
      // If the request succeeds, we don't have to do anything and just return the response
      return response;
    },
    function(error) {
      console.log(error);
      console.log(JSON.stringify(error));
      if (!error.response) {
        return Promise.reject(error);
      }
      const errorResponse = error.response;
      if (isTokenExpiredError(errorResponse)) {
        return resetTokenAndReattemptRequest(error);
      }
      // If the error is due to other reasons, we just throw it back to axios
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}

function isTokenExpiredError(errorResponse) {
  return errorResponse.status == 401;
}

async function requestRefreshToken() {
  try {
    //const username = await TokenUtils.getLoginName();
    //const refresh_token = await TokenUtils.getRefreshToken();

    var data = {
      //client_id: '',
     // grant_type: '',
      //refresh_token: refresh_token,
     // userName: username
    };

    console.log("Requesting refresh token", data);
    const response = await axios({
      method: "post",
      url: ApiEndpoint.BASE_URL + ApiEndpoint.REFRESH_TOKEN,
      data: data
    });

    console.log("Response refresh token", response);
    return response;
  } catch (error) {
    console.log("Error refresh token", error);
    console.log("Error refresh token", JSON.stringify(error));
    return {};
  }
}

let isAlreadyFetchingAccessToken = false;

// This is the list of waiting requests that will retry after the JWT refresh complete
let subscribers = [];

async function resetTokenAndReattemptRequest(error) {
  try {
    const { response: errorResponse } = error;
    const resetToken = await TokenUtils.getRefreshToken();
    if (!resetToken) {
      // We can't refresh, throw the error anyway
      return Promise.reject(error);
    }
    /* Proceed to the token refresh procedure
    We create a new Promise that will retry the request,
    clone all the request configuration from the failed
    request in the error object. */
    const retryOriginalRequest = new Promise(resolve => {
      /* We need to add the request retry to the queue
    since there another request that already attempt to
    refresh the token */
      addSubscriber(access_token => {
        errorResponse.config.headers.Authorization = "Bearer " + access_token;
        resolve(axios(errorResponse.config));
      });
    });
    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true;
      const response = await requestRefreshToken();
      if (!response.data) {
        return Promise.reject(error);
      }
      const newToken = response.data.body.access_token;
      const newRefreshToken = response.data.body.refresh_token;

      await TokenUtils.saveAccessToken(newToken); // save the newly refreshed token for other requests to use
      await TokenUtils.saveRefreshToken(newRefreshToken);

      isAlreadyFetchingAccessToken = false;
      onAccessTokenFetched(newToken);
    }
    return retryOriginalRequest;
  } catch (err) {
    return Promise.reject(err);
  }
}

function onAccessTokenFetched(access_token) {
  // When the refresh is successful, we start retrying the requests one by one and empty the queue
  subscribers.forEach(callback => callback(access_token));
  subscribers = [];
}

function addSubscriber(callback) {
  subscribers.push(callback);
}
