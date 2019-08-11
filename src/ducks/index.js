import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { call, spawn, fork, all } from "redux-saga/effects";
import {
  reducers as applicationDataReducers,
  fetchCustomerPrefillDataStatus
} from "./partnerOnBoarding/fetchApplicationData";
import {
  reducers as w8benDataReducers,
  fetchw8benDataStatus
} from "./partnerOnBoarding/w8benData";
import {
  reducers as tcDataReducers,
  fetchTCDataStatus
} from "./partnerOnBoarding/TCData";

// import { reducers as createAccountReducers } from './createAccount';
import { reducers as envReducers } from "./environments";
import { reducer as formReducer } from "redux-form";
import createSagaMiddleware from "redux-saga";

export const reducers = combineReducers({
  // utils
  environment: envReducers,

  // services
  prefillApplicationData: applicationDataReducers,
  // createAccount: createAccountReducers,
  w8benDataContent: w8benDataReducers,
  TCData: tcDataReducers,

  //redux form
  form: formReducer
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export function* rootSaga() {
  // const sagas = [
  // 	...customerPrefillDataSagas
  // ];

  yield all([
    fork(fetchCustomerPrefillDataStatus),
    fork(fetchw8benDataStatus),
    fork(fetchTCDataStatus)
  ]);

  // yield sagas.map(saga => spawn(function* () { yield call(saga); }));
}

export function configureStore() {
  return createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
}

export const store = configureStore();
sagaMiddleware.run(rootSaga);
