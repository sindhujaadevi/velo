import { /*environments*/ serviceTimeouts } from "../../constants";
import { endpoints } from "../../constants/endpoints";
import { timeout, /*wait*/ } from "../../utils";

export const fetchTCData = async (status, env) => {
  console.log("TCL: fetchTCData -> env", env);
  // if (env === environments.mock) {
  // 	const date = new Date();
  // 	const timestamp = `${date.toDateString()} ${date.toLocaleTimeString()}`;

  // 	await wait(1);
  // 	return { customerDataFromPartner: customerPrefillData, timestamp };
  // }

  //   let prefillDataBody;

  try {
    // prefillDataBody = { accessToken: "redis token goes here" };
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = endpoints("DEV").fetchTCData;
    const data = await timeout(
      fetch(proxyurl + url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Expose-Headers": "*"
        }
        // body: JSON.stringify(prefillDataBody)
      }),
      serviceTimeouts.eachRequest
    );

    const tcResponse = await data.json();
    console.log("tcResponse ==> ", tcResponse);

    // if (!tcResponse || !tcResponse.Accounts) {
    // 	const msg = 'Prefill request failed';
    // 	throw msg;
    // }

    let tcText = tcResponse[":items"].root[":items"].contentfragment.elements;
    // let tcText = '<label><input type="checkbox" name="checkbox" value="elecSigCon">';
    // tcText += JSON.parse(JSON.stringify(tc.elecSigCon.value));
    // tcText += "</label>";
    // tcText += '<label><input type="checkbox" name="checkbox" value="termsCond">';
    // tcText += JSON.parse(JSON.stringify(tc.termsCond.value));
    // tcText += "</label>";
    return { tcText };
  } catch (error) {
    return false;
  }
};
