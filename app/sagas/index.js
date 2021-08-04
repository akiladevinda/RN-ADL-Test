import { takeEvery } from "redux-saga/effects";
import * as types from "../redux/actions/types";
import { loginAsync, changePassword } from "./authSaga";

export default function* watch() {
    
  yield takeEvery(types.LOGIN_USER, loginAsync);
  yield takeEvery(types.CHANGE_PASSWORD, changePassword);

  
}
