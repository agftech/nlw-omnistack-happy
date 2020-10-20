import axios from "axios";

const baseURL = process.env.EXPO_APP_BASE_URL;

const api = axios.create({
	//baseURL: "http://192.168.1.5:3333",
	baseURL: `http://${baseURL}`,
});

export default api;
