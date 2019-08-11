import { environments, serviceTimeouts } from '../../constants';
import { endpoints } from '../../constants/endpoints';
import { timeout, wait } from '../../utils';

import mock from '../mocks/customerApplicationSubmit';


export const submitCustomerApplication = async(status, env) => {
	//todo: replace the below section with right application submit call to post customer data
	if (env === environments.mock) {
		const date = new Date();
		const timestamp = `${date.toDateString()} ${date.toLocaleTimeString()}`;

		await wait(1);
		return { customerDataFromPartner: mock, timestamp };
	}

	let prefillDataBody;

	try {

		prefillDataBody = { accessToken: "redis token" };

		const data = await timeout(
			fetch(endpoints(env).fetchCustomerDataFromPartner, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(prefillDataBody)
			}),
			serviceTimeouts.eachRequest
		);

		const prefillData = await data.json();
		console.log('prefillData ==> ', prefillData);

		if (!prefillData || !prefillData.Accounts) {
			const msg = 'Prefill request failed';
			throw msg;
		}

		return { prefillData };
	} catch (error) {
		return false;
	}
};
