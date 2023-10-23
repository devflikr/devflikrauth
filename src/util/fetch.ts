import axios, { AxiosRequestConfig } from "axios";
import AuthResponse from "../types/AuthResponse";
import { parseRejectedError, parseReturnedData } from "./parse";
import authLib, { API_ROUTE } from "../main";
import User from "../types/User";
import listen from "./listen";

export default function fetch(url: string, config: AxiosRequestConfig = {}, data?: unknown, key?: string, value?: unknown): Promise<User | null> {
    return new Promise((resolve, reject) => {
        axios<AuthResponse>({
            baseURL: API_ROUTE,
            method: "GET",
            url,
            withCredentials: true,
            ...config,
            data,
        }).then(({ data }) => {
            resolve(parseReturnedData(data, key, value));
        }).catch((error) => reject(parseRejectedError(error))).finally(() => {
            if (!authLib.hasAuth) {
                authLib.hasAuth = true;
                listen();
            }
        });
    });
}
