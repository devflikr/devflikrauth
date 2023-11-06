
import User from "../types/User";
import UserSession from "../types/UserSession";
import fetch from "../util/fetch";

async function getUserSessions(user: User): Promise<UserSession[]> {
    return await fetch<UserSession[]>("/getsessions", {
        method: "POST",
    }, {
        session: user.sessionToken,
    }) as UserSession[];
}

export default getUserSessions;