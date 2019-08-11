import { /*environments, */ serviceTimeouts } from "../../constants";
import { endpoints } from "../../constants/endpoints";
import { timeout, /*wait*/ } from "../../utils";

// import customerPrefillData from './mocks/prefillCustomerData';

export const fetchw8benData = async (status, env) => {
  // if (env === environments.mock) {
  // 	const date = new Date();
  // 	const timestamp = `${date.toDateString()} ${date.toLocaleTimeString()}`;

  // 	await wait(1);
  // 	return { customerDataFromPartner: customerPrefillData, timestamp };
  // }

  // let prefillDataBody;

  try {
    // prefillDataBody = { accessToken: "redis token goes here" };
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = endpoints("DEV").fetchw8ben; // site that doesn’t send Access-Control-*
    const data = await timeout(
      fetch(proxyurl + url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Expose-Headers": "*",
        }
        // body: JSON.stringify(prefillDataBody)
      }),
      serviceTimeouts.eachRequest
    );

    const w8benResponse = await data.json();
    console.log("w8benResponse ==> ", w8benResponse);

    // if (!w8benResponse || !w8benResponse.Accounts) {
    // 	const msg = 'Prefill request failed';
    // 	throw msg;
    // }
    let w8ben = w8benResponse[":items"].root[":items"].contentfragment.elements;
    let preText = JSON.parse(JSON.stringify(w8ben.preText.value));
    preText += JSON.parse(JSON.stringify(w8ben.declarationList.value));
    preText += JSON.parse(JSON.stringify(w8ben.postText.value));
    return { preText };
  } catch (error) {
    return false;
  }
};
