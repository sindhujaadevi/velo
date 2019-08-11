export const timeout = async (promise, ms) =>
	new Promise((resolve, reject) => {
		const timeoutId = setTimeout(() => reject(new Error('Service failed')), ms);

		promise.then(
			res => {
				clearTimeout(timeoutId);
				resolve(res);
			},
			err => {
				clearTimeout(timeoutId);
				reject(err);
			}
		);
	});

export const wait = async seconds => new Promise(resolve => setTimeout(() => resolve({}), seconds * 1000));