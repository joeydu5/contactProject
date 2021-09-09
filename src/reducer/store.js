import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../saga/saga";

//for saga
export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";

export const getUser = () => ({
  type: GET_USER,
});
export const setUser = (user) => ({
  type: SET_USER,
  user: user,
});

//for redux reducer
const initState = {
  values: "",
};

const rootReducer = (state = initState, action) => {
  if (action.type === "ADD_CONTACT") {
    return { ...state, values: [...state.values, action.values] }; // values is object here
  }
  if (action.type === "ADD_CONTACT2") {
    return { ...state, values: [...state.values, ...action.values] };
  }
  if (action.type === SET_USER) {
    const { user } = action;
    return { ...state, values: user };
    // return { ...state, values: [...state.values, ...user] }; // because user is an array here
  }

  return state;
};

//for redux store
//create saga middleware
const sagaMiddleware = createSagaMiddleware();

// create middleware=[sagaMiddleware]; if there is more than one middleware

// connect saga with store.
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));
// start to watching the redux action
sagaMiddleware.run(watcherSaga);

export default store;
