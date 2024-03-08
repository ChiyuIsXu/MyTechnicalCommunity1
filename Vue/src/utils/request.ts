
// request.ts

import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'

export function request(config: any) {
    // create an axios instance
    const instance = axios.create({
        baseURL: import.meta.env.VITE_APP_API_BASEURL,
        timeout: 5000
    })

    // request interceptor
    instance.interceptors.request.use(
        (config: AxiosRequestConfig | any) => {
            // Do something before request is sent
            return config
        },
        (error: any) => {
            // Do something with request error
            return Promise.reject(error);
        }
    )

    // response interceptor
    instance.interceptors.response.use(
    (res: AxiosResponse | any) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return res.data
    },
    (error: any) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        if(error.response) {
            if(error.response.status === 500) {
                console.log('There is a server problem!');
            }
        }

        return Promise.reject(error);
    })

    return instance(config)
}
