import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.MODE == 'production' ? '/api' : 'http://localhost:3000/api',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axiosInstance;