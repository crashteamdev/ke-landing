import axios from "axios";

export const axiosApi = axios.create({
    baseURL: 'https://strapi.marketdb.pro/api/',
    // baseURL: 'http://localhost:1337/api/'
    headers: {
        // Enable Strapi v4 response format compatibility
        'Strapi-Response-Format': 'v4'
    }
});