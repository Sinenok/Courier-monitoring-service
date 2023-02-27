const httpHost = 'http://localhost:8000';
const Endpoints = {
	AUTH: {
		LOGIN: `${httpHost}/api/Authorization/login`,
		REFRESH: `${httpHost}/api/Authorization/refresh-token`,
		LOGOUT: `${httpHost}/logout`,
		PROFILE: `${httpHost}/api/Authorization/current-user`,
		REGISTER: `${httpHost}/api/Authorization/register`
	}
};

export default Endpoints;
