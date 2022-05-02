import axios from "axios";

// const config = {
//   baseURL: ""
// }
// option 1 ->
// const api = axios.create(config)

const api = axios.create({
  baseURL: "https://61ff07895e1c4100174f6dcd.mockapi.io",
});

export default api;
