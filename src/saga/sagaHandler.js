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

    //sorting name in an order
    // var dataInOrder = data.slice(0);
    // dataInOrder.sort(function (a, b) {
    //   var x = a.name.toLowerCase();
    //   var y = b.name.toLowerCase();
    //   return x < y ? -1 : x > y ? 1 : 0;
    // });

    // console.log(dataInOrder);

    //call dispatch function, pass the data to the action
    yield put(setUser(data));
  } catch (err) {
    console.log(err);
  }
}
