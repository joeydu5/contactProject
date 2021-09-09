import { takeLatest } from "redux-saga/effects";
import { GET_USER } from "../reducer/store";
import { getUserHandler } from "./sagaHandler";

export function* watcherSaga() {
  yield takeLatest(GET_USER, getUserHandler);
}
