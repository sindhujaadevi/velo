import { environments } from '../constants';

const SET_ENVIRONMENT = 'SET_ENVIRONMENT';

export const setEnvironment = environment => ({ type: SET_ENVIRONMENT, environment });

const defaultEnvironment = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? environments.mock : environments.prod;

export const reducers = (state = { environment: defaultEnvironment }, action) => {
	switch (action.type) {
		case SET_ENVIRONMENT:
			return {
				...state,
				environment: action.environment
			};
		default:
			return state;
	}
};
