import axios from "axios";
import md5 from "md5";

const publicKey = "7f6b9c6e1e8f4f9d8b7a";
const privateKey = "e1d7c9a5b6f4d8e9c7a1";

const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

export const marvelApi = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
  params: {
    ts,
    apikey: publicKey,
    hash,
    limit: 20,
  },
});
