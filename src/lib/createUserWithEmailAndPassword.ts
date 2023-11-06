
import User from "../types/User";
import fetch from "../util/fetch";

async function createUserWithEmailAndPassword(email: string, password: string): Promise<User | null> {
    return await fetch<User>("/createuser", {
        method: "POST",
    }, {
        email,
        password,
    }, "email", email);
}

export default createUserWithEmailAndPassword;