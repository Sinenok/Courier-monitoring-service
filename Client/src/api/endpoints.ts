const httpHost = 'http://localhost:8000';
const Endpoints = {
	AUTH: {
		LOGIN: `${httpHost}/api/Authorization/login`,
		REFRESH: `${httpHost}/api/Authorization/refresh-token`,
		LOGOUT: `${httpHost}/logout`,
		PROFILE: `${httpHost}/api/Authorization/current-user`,
		REGISTER: `${httpHost}/api/Authorization/register`
	},
	ORDER: {
		CREATE: `${httpHost}/api/Order/create-order`,
		PAYMENT: `${httpHost}/api/Order/get-payment-methods`
	}
};

export default Endpoints;
