import { put, select, takeEvery } from "redux-saga/effects";

import { fetchTCData } from "../../services/partnerOnBoarding/fetchTCData";
import { environmentSelector } from "../selectors";

// actions
const FETCH_TC_DATA = "FETCH_TC_DATA";
const SET_TC_DATA = "SET_TC_DATA";

// action creators
export const fetchTCDataValue = () => ({ type: FETCH_TC_DATA });
export const setTCDataValue = content => ({ type: SET_TC_DATA, content });

// reducer
export const reducers = (state = {}, action) => {
  switch (action.type) {
    case SET_TC_DATA:
      return { ...state, ...action.content };
    default:
      return state;
  }
};

// sagas
function* fetchTCDataContent() {
  try {
    const environment = yield select(environmentSelector);
    console.log("TCL: function*fetchTCDataValue -> environment", environment);
    const content = yield fetchTCData(true, "DEV");

    if (!content) {
      const msg = "Fetching content failed";
      throw msg;
    }

    yield put(setTCDataValue(content));
  } catch (error) {
    console.log("Error while retrieving customer data from partner.");
  }
}

export function* fetchTCDataStatus() {
  yield takeEvery([FETCH_TC_DATA], fetchTCDataContent);
}

// export const sagas = [fetchCustomerPrefillDataStatus];
