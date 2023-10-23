
import fetch from "../util/fetch";

async function resetPasswordWithToken(token: string, password: string) {
    return await fetch("/pwdtoken", {
        method: "POST",
    }, {
        token,
        password,
    });
}

export default resetPasswordWithToken;