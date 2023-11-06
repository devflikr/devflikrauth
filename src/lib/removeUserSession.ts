
import User from "../types/User";
import UserSession from "../types/UserSession";
import fetch from "../util/fetch";

async function removeUserSession(user: User, sessionId: string): Promise<UserSession[]> {
    return await fetch<UserSession[]>("/removesessions", {
        method: "POST",
    }, {
        session: user.sessionToken,
        "remove": sessionId,
    }) as UserSession[];
}

export default removeUserSession;