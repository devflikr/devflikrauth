import AuthLibrary from "./types/AuthLibrary";
import fetch from "./util/fetch";
import Cookies from "js-cookie";

const authLib: AuthLibrary = {
    hasAuth: false,
    listeners: [],
    index: -1,
    auth: [],
    error: null,
};

export const DEVICE_TOKEN_NAME = "--device-unique-id--";
export const AUTH_ARRAY_NAME = "--df-auth-dependencies--";
export const API_ROUTE = "http://localhost:8978";

if (Cookies.get(AUTH_ARRAY_NAME)) fetch("/lookup"); else authLib.hasAuth = true;

export default authLib;
