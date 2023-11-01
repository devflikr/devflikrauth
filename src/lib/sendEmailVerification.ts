
import fetch from "../util/fetch";

async function sendNewEmailVerification(email: string) {
    return await fetch("/verifyuser", {
        method: "POST",
    }, {
        email,
    });
}

export default sendNewEmailVerification;