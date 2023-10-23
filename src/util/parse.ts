import { AxiosError } from "axios";
import authLib, { AUTH_ARRAY_NAME } from "../main";
import AuthResponse from "../types/AuthResponse";
import User from "../types/User";
import Cookies from "js-cookie";
import AuthReject from "../types/AuthReject";
import listen from "./listen";

export function parseReturnedData(data: AuthResponse, keyString?: string, value?: unknown) {
    authLib.error = null;
    if (data?.data) {
        authLib.auth = data.data;
        Cookies.set(AUTH_ARRAY_NAME, authLib.auth.map(auth => auth.sessionToken).join("."), {
            expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
            path: "/",
        });
    } else {
        authLib.auth = [];
        authLib.index = -1;
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
    }

    return parseListeners();
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
    authLib.error = error.response || error;
    listen();
    return authLib.error;
}