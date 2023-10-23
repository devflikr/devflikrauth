
import authLib, { DEVICE_TOKEN_NAME } from "../main";
import fetch from "../util/fetch";
import Cookies from "js-cookie";
import listen from "../util/listen";

async function signOut() {
    authLib.auth = [];
    authLib.index = -1;

    listen();

    Cookies.remove(DEVICE_TOKEN_NAME);

    return await fetch("/removesessions", {
        method: "DELETE",
    });

}
export default signOut;