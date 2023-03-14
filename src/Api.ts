import axios from "axios";
import { PrivateData } from "./types";

const BASEURL = "https://mydataapi-1-k5189068.deta.app/",
  TIMEOUT = 1000 * 5;

const Api = axios.create({
  baseURL: BASEURL,
  timeout: TIMEOUT,
});

function getPrivateData() {
  return Api.get("/").then(({ data }) => {
    return data as PrivateData;
  });
}

export default getPrivateData;
