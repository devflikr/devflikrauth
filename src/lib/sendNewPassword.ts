
import fetch from "../util/fetch";

async function sendNewPassword(email: string) {
    return await fetch("/pwdreset", {
        method: "POST",
    }, {
        email,
    });
}

export default sendNewPassword;