import axios from "axios";

API_KEY = "gzIgMiYckDzYhWLYcb4SQQIewpP8e4KWZCePMRxz";

const api = axios.create({
  baseURL: API_KEY
});

export default api;
