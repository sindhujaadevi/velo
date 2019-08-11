import { environments, serviceTimeouts } from '../../constants';
import { endpoints } from '../../constants/endpoints';
import { timeout, wait } from '../../utils';

import customerPrefillData from '../mocks/prefillCustomerData';


export const prefillCustomerData = async(status, env) => {
	if (env === environments.mock) {
		const date = new Date();
		const timestamp = `${date.toDateString()} ${date.toLocaleTimeString()}`;

		await wait(1);
		return { customerDataFromPartner: customerPrefillData, timestamp };
	}
	
	let prefillDataBody;

	try {
		prefillDataBody = { accessToken: "redis token goes here" };

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
