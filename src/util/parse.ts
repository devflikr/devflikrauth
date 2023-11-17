import { AxiosError } from "axios";
import authLib from "../main";
import AuthResponse from "../types/AuthResponse";
import User from "../types/User";
import AuthReject from "../types/AuthReject";
import listen from "./listen";

export function parseReturnedData<T>(data: AuthResponse, keyString?: string, value?: unknown) {
    authLib.error = null;
    if (data?.auth) {
        if (data.auth.length) {
            authLib.auth = data.auth;
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
    authLib.error = error.response || error;
    listen();
    authLib.error = null;
    return error.response || error;
}