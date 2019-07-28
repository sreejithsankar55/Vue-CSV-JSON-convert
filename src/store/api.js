import axios from "axios";
//Handling jwt tokens and authorization
export const api = axios.create({
  baseURL: "http://localhost:3000"
});

export function setToken(jwt) {
  api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function clearToken() {
  delete api.defaults.headers.common["Authorization"];
}
