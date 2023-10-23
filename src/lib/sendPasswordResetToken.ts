
import fetch from "../util/fetch";

async function sendPasswordResetToken(email: string, password: string) {
    return await fetch("/pwdsend", {
        method: "POST",
    }, {
        email,
        password,
    });
}

export default sendPasswordResetToken;