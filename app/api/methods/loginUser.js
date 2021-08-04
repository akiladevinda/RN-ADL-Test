import Api from "../";
import { ApiEndpoint, Method } from "../apiConstants";

/**
  API request signature (URL, method, token, params, data)
 */

export function login(data) {
  return Api(ApiEndpoint.LOGIN, Method.POST, null, null, data);
}