
import User from "../types/User";
import UserSession from "../types/UserSession";
import fetch from "../util/fetch";

async function removeUserSession(user: User, sessionId: string) {
    return await fetch<UserSession[]>("/removesessions", {
        method: "POST",
    }, {
        session: user.sessionToken,
        "remove": sessionId,
    });
}

export default removeUserSession;