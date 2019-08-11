// PATHS
const FETCH_CUSTOMER_DATA_FROM_PARTNER_PATH = '';
const SUBMIT_APPLICATION_DATA_FROM_PARTNER_PATH = '/submit-application';
const FETCH_AEM_CONTENT_PATH = '';


const LOCAL = {
	fetchCustomerDataFromPartner: `http://localhost:3001${FETCH_CUSTOMER_DATA_FROM_PARTNER_PATH}`,
	submitApplication: `http://localhost:8000${SUBMIT_APPLICATION_DATA_FROM_PARTNER_PATH}`,
    fetchAemContent: `http://localhost:8000${FETCH_AEM_CONTENT_PATH}`
};

const DEV = {
    fetchCustomerDataFromPartner: `http://dev.onboarding.velobank.com${FETCH_CUSTOMER_DATA_FROM_PARTNER_PATH}`,
	submitApplication: `http://dev.onboarding.velobank.com${SUBMIT_APPLICATION_DATA_FROM_PARTNER_PATH}`,
	fetchAemContent: `http://dev.onboarding.velobank.com${FETCH_AEM_CONTENT_PATH}`,
	fetchw8ben: `https://stage.velobank.com/en/api/tgr/w8-ben.model.json`,
	fetchTCData: `https://stage.velobank.com/en/api/tgr/terms-and-conditions.model.json`,
};

const QA = {
	fetchCustomerDataFromPartner: `https://qa.onboarding.velobank.com${FETCH_CUSTOMER_DATA_FROM_PARTNER_PATH}`,
	submitApplication: `https://qa.onboarding.velobank.com${SUBMIT_APPLICATION_DATA_FROM_PARTNER_PATH}`,
    fetchAemContent: `https://qa.onboarding.velobank.com${FETCH_AEM_CONTENT_PATH}`
};

const UAT = {
	fetchCustomerDataFromPartner: `https://uat.onboarding.velobank.com${FETCH_CUSTOMER_DATA_FROM_PARTNER_PATH}`,
	submitApplication: `https://uat.onboarding.velobank.com${SUBMIT_APPLICATION_DATA_FROM_PARTNER_PATH}`,
    fetchAemContent: `https://uat.onboarding.velobank.com${FETCH_AEM_CONTENT_PATH}`
};

const PROD = {
	fetchCustomerDataFromPartner: `https://onboarding.velobank.com${FETCH_CUSTOMER_DATA_FROM_PARTNER_PATH}`,
	submitApplication: `https://onboarding.velobank.com${SUBMIT_APPLICATION_DATA_FROM_PARTNER_PATH}`,
    fetchAemContent: `https://onboarding.velobank.com${FETCH_AEM_CONTENT_PATH}`
};

const environments = { LOCAL, DEV, QA, UAT, PROD };

export const endpoints = environment => environments[environment];
