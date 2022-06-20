import axios from "axios";

const api = axios.create({
	baseURL: "https://62afd8da3bbf46a35226e4ee.mockapi.io/livenstore/"
})

export default api