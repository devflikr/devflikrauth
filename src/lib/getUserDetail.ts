
import UserDetail from "../types/UserDetail";
import fetch from "../util/fetch";

async function getUserDetail(type: "email" | "uid" | "username", find: string): Promise<UserDetail | null> {
    return await fetch<UserDetail>("/getuserdetail", {
        method: "POST",
    }, {
        [type]: find,
    }) as UserDetail | null;
}

export default getUserDetail;