
import User from "../types/User";
import fetch from "../util/fetch";

async function updatePassword(user: User, oldPassword: string, newPassword: string) {
    return await fetch("/pwdnew", {
        method: "POST",
    }, {
        "session": user.sessionToken,
        "old-password": oldPassword,
        "new-password": newPassword,
    });
}

export default updatePassword;