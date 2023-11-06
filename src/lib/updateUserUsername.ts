
import User from "../types/User";
import fetch from "../util/fetch";

async function updateUserUsername(user: User, username: string): Promise<User | null> {
    username = username || user.username;
    return await fetch<User>("/updateusername", {
        method: "POST",
    }, {
        session: user.sessionToken,
        username,
    }, "email", user.email);
}

export default updateUserUsername;