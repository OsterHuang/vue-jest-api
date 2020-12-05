import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com",
  timeout: 1000 * 10,
  headers: {
    Accept: "application/vnd.github.v3+json"
  }
});

export default instance;
