import axios from "axios";

export const axiosApi = axios.create({
    baseURL: 'https://strapi.marketdb.pro/api/'
});