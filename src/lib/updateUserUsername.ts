
import User from "../types/User";
import fetch from "../util/fetch";

async function updateUserUsername(user: User, username: string) {
    username = username || user.username;
    return await fetch("/updateusername", {
        method: "POST",
    }, {
        session: user.sessionToken,
        username,
    });
}

export default updateUserUsername;