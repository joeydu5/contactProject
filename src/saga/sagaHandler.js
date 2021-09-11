import { call, put } from "redux-saga/effects";
import { requestGetUser } from "./sagaReq";
import { setUser } from "../reducer/store";

export function* getUserHandler(action) {
  try {
    //call axios function
    const response = yield call(requestGetUser);
    //get data
    const { data } = response;
    console.log(data);
    //call dispatch function, pass the data to the action
    yield put(setUser(data));
  } catch (err) {
    console.log(err);
  }
}
