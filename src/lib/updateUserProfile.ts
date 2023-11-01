
import User from "../types/User";
import fetch from "../util/fetch";
import UserProfileOptions from "../types/UserProfileOptions";

async function updateUserProfile(user: User, update: UserProfileOptions) {
    const firstname = (update.firstname === undefined ? user.firstname : update.firstname) || null;
    const lastname = (update.lastname === undefined ? user.lastname : update.lastname) || null;
    const birthday = (update.birthday === undefined ? user.birthday : update.birthday) || null;
    const profile = (update.profile === undefined ? null : update.profile) || null;
    const gender = (update.gender === undefined ? user.gender : update.gender) || "null";
    const phone = (update.phone === undefined ? user.phone : update.phone) || null;
    return await fetch<User>("/updateprofile", {
        method: "POST",
    }, {
        session: user.sessionToken,
        firstname,
        lastname,
        birthday: birthday?.getTime(),
        profile,
        gender,
        phone,
    }, "email", user.email);
}

export default updateUserProfile;