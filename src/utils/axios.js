import _axios from "axios";

const axios = _axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: { "Content-Type": "application/json" },
});

export default axios;
