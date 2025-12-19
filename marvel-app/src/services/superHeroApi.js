import axios from "axios";

export const superHeroApi = axios.create({
  baseURL: '/api',
  timeout: 5000,
});
