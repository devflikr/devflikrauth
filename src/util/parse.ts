import { AxiosError } from "axios";
import authLib, { AUTH_ARRAY_NAME, DEVICE_TOKEN_NAME } from "../main";
import AuthResponse from "../types/AuthResponse";
import User from "../types/User";
import Cookies from "js-cookie";
import AuthReject from "../types/AuthReject";
import listen from "./listen";

export function parseReturnedData<T>(data: AuthResponse, keyString?: string, value?: unknown) {
    Cookies.set(DEVICE_TOKEN_NAME, data.deviceToken, {
        domain: ".netlify.app",
        expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
        path: "/",
    });
    authLib.error = null;
    if (data?.auth) {
        if (data.auth.length) {
            authLib.auth = data.auth;
            Cookies.set(AUTH_ARRAY_NAME, authLib.auth.map(auth => auth.sessionToken).join("."), {
                domain: ".netlify.app",
                expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
                path: "/",
            });
        } else {
            authLib.auth = [];
            authLib.index = -1;
        }
    }

    if (keyString && authLib.auth) {
        const keys = keyString.split(":");
        authLib.index = authLib.auth.findIndex(auth => {
            for (const key of keys) {
                const match = auth[key as keyof User];
                if (match && match === value) return true;
            }
            return false;
        });

        parseListeners();

        return authLib.auth[authLib.index];
    }

    parseListeners();

    return data.data as T;
}

function parseListeners() {
    if (authLib.auth.length) {
        if (authLib.auth[authLib.index] == null) authLib.index = 0;
    } else {
        authLib.index = -1;
    }

    return listen();
}

export function parseRejectedError(error: AxiosError<AuthReject>) {
    if (error.response?.data.deviceToken) {
        Cookies.set(DEVICE_TOKEN_NAME, error.response.data.deviceToken, {
            domain: ".netlify.app",
            expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
            path: "/",
        });
    }
    authLib.error = error.response || error;
    listen();
    authLib.error = null;
    return error.response || error;
}