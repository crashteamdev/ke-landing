import axios from "axios";
import { STRAPI_URL } from "../config";

export const axiosApi = axios.create({
    baseURL: STRAPI_URL.endsWith('/') ? STRAPI_URL : `${STRAPI_URL}/`,
    // baseURL: 'http://localhost:1337/api/'
});