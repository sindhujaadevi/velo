import { put, select, takeEvery } from 'redux-saga/effects';

import { prefillCustomerData } from '../../services/partnerOnBoarding/prefillCustomerData';
import { environmentSelector } from '../selectors';

// actions
const FETCH_CUSTOMER_DATA_FROM_PARTNER = 'FETCH_CUSTOMER_DATA_FROM_PARTNER';
const SET_CONTENT = 'SET_CONTENT';
const INPUT_DATA = 'INPUT_DATA';

// action creators
export const fetchCustomerData = () => ({ type: FETCH_CUSTOMER_DATA_FROM_PARTNER });
export const setContent = content => ({ type: SET_CONTENT, content });
export const cutomerInputData = inputData => ({ type: INPUT_DATA, inputData });


// reducer
export const reducers = (state = {}, action) => {
	switch (action.type) {
		case SET_CONTENT:
			return { ...state, ...action.content };
		case INPUT_DATA:
			return { ...state, ...action.inputData }
		default:
			return state;
	}
};

// sagas
function* getCustomerData() {
	try {
		const environment = yield select(environmentSelector);
		const content = yield prefillCustomerData(true, environment);

		if (!content) {
			const msg = 'Fetching content failed';
			throw msg;
		}

		yield put(setContent(content));
	} catch (error) {
		console.log("Error while retrieving customer data from partner.");
	}
}

export function* fetchCustomerPrefillDataStatus() {
	yield takeEvery([FETCH_CUSTOMER_DATA_FROM_PARTNER], getCustomerData);
}

// export const sagas = [fetchCustomerPrefillDataStatus];
