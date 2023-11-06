
import authLib from "../main";
import fetch from "../util/fetch";
import listen from "../util/listen";

async function signOut() {
    authLib.auth = [];
    authLib.index = -1;

    listen();

    return await fetch("/removesessions", {
        method: "DELETE",
    });

}
export default signOut;