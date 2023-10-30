import axios from "axios";
const URL = "http://localhost:3300/";

axios.defaults.baseURL = URL;

export  function getList() {
  return axios.get("/list");
}
