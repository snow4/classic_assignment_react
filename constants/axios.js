import axios from "axios";
import cookies from "./getCookie"
const instance = axios.create({
  baseURL: "http://localhost:4200/"
});
// localStorage.getItem("token");
// const AUTH_TOKEN = cookies.todotoken
// if (AUTH_TOKEN) instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default instance;
