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
		PAYMENT: `${httpHost}/api/Order/get-payment-methods`,
		ORDERINFO: `${httpHost}/api/Order/order-info`,
		SENTORDERS: `${httpHost}/api/Order/user-sent-orders`
	},
	COURIER: {
		CREATEDORDERS: `${httpHost}/api/Courier/created-orders`,
		TAKEORDER: `${httpHost}/api/Courier/take-order`
	}
};

export default Endpoints;
