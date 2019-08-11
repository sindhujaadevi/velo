import {  put, select, takeEvery } from 'redux-saga/effects';
import { fetchw8benData } from '../../services/partnerOnBoarding/fetchw8benData';
import { environmentSelector } from '../selectors';

// actions
const FETCH_W8BEN_DATA = 'FETCH_W8BEN_DATA';
const SET_W8BEN_DATA = 'SET_W8BEN_DATA';

// action creators
export const fetchw8benDataValue = () => ({ type: FETCH_W8BEN_DATA });
export const setw8benDataValue = valueData => ({ type: SET_W8BEN_DATA, valueData });

// reducer
export const reducers = (state = {}, action) => {
	switch (action.type) {
		case SET_W8BEN_DATA:
			return { ...state, ...action.valueData };
		default:
			return state;
	}
};

// sagas
function* fetchw8benDataValues() {
	try {
		const environment = yield select(environmentSelector);
        console.log("TCL: function*fetchw8benDataValue -> environment", environment)
		const valueData = yield fetchw8benData(true, 'DEV');

		if (!valueData) {
			const msg = 'Fetching content failed';
			throw msg;
		}

		yield put(setw8benDataValue(valueData));
	} catch (error) {
		console.log("Error while retrieving customer data from partner.");
	}
}

export function* fetchw8benDataStatus() {
	yield takeEvery([FETCH_W8BEN_DATA], fetchw8benDataValues);
}

// export const sagas = [fetchCustomerPrefillDataStatus];
