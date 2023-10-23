
import fetch from "../util/fetch";

async function createUserWithEmailAndPassword(email: string, password: string) {
    return await fetch("/createuser", {
        method: "POST",
    }, {
        email,
        password,
    }, "email", email);
}

export default createUserWithEmailAndPassword;