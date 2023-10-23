
import fetch from "../util/fetch";

async function loginUserWithUsernameAndPassword(username: string, password: string) {
    return await fetch("/adduser", {
        method: "POST",
    }, {
        username,
        password,
    }, "username:email", username);
}

export default loginUserWithUsernameAndPassword;