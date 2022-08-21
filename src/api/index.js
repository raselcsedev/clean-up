import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://frozen-dawn-15181.herokuapp.com/",
});

export default fetcher;