import axios, { AxiosRequestConfig } from "axios";
import AuthResponse from "../types/AuthResponse";
import { parseRejectedError, parseReturnedData } from "./parse";
import authLib, { API_ROUTE, AUTH_ARRAY_NAME, DEVICE_TOKEN_NAME } from "../main";
import listen from "./listen";
import User from "../types/User";
import Cookies from "js-cookie";

export default function fetch<T>(url: string, config: AxiosRequestConfig = {}, data?: unknown, key?: string, value?: unknown): Promise<T | User | null> {
    const cookie: { a?: string, d?: string } = {};
    if (Cookies.get(AUTH_ARRAY_NAME)) cookie.a = Cookies.get(AUTH_ARRAY_NAME);
    if (Cookies.get(DEVICE_TOKEN_NAME)) cookie.d = Cookies.get(DEVICE_TOKEN_NAME);
    return new Promise((resolve, reject) => {
        axios<AuthResponse>({
            baseURL: API_ROUTE,
            method: "GET",
            url,
            withCredentials: true,
            headers: {
                "Authorization": JSON.stringify(cookie),
            },
            ...config,
            data,
        }).then(({ data }) => {
            resolve(parseReturnedData<T>(data, key, value));
        }).catch((error) => reject(parseRejectedError(error))).finally(() => {
            if (!authLib.hasAuth) {
                authLib.hasAuth = true;
                listen();
            }
        });
    });
}
