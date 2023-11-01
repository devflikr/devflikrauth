import axios, { AxiosRequestConfig } from "axios";
import AuthResponse from "../types/AuthResponse";
import { parseRejectedError, parseReturnedData } from "./parse";
import authLib, { API_ROUTE } from "../main";
import listen from "./listen";
import User from "../types/User";

export default function fetch<T>(url: string, config: AxiosRequestConfig = {}, data?: unknown, key?: string, value?: unknown): Promise<T | User | null> {
    return new Promise((resolve, reject) => {
        axios<AuthResponse>({
            baseURL: API_ROUTE,
            method: "GET",
            url,
            withCredentials: true,
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
