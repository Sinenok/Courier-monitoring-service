const Endpoints = {
	AUTH: {
		LOGIN: 'http://localhost:8000/api/Authorization/login',
		REFRESH: 'http://localhost:8000/api/Authorization/refresh-token',
		LOGOUT: '/logout',
		PROFILE: 'http://localhost:8000/api/Authorization/current-user',
		REGISTER: 'http://localhost:8000/api/Authorization/register'
	}
};

export default Endpoints;
