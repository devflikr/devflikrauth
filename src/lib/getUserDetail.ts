
import UserDetail from "../types/UserDetail";
import fetch from "../util/fetch";

async function getUserDetail(type: "email" | "uid" | "username", find: string) {
    return await fetch<UserDetail>("/getuserdetail", {
        method: "POST",
    }, {
        [type]: find,
    });
}

export default getUserDetail;