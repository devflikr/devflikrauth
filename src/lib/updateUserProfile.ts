
import User from "../types/User";
import fetch from "../util/fetch";

export type UserProfileOptions = {
    firstname?: string | null;
    lastname?: string | null;
    profile?: string | null;
    phone?: string | null;
};

async function updateUserProfile(user: User, update: UserProfileOptions) {
    const firstname = (update.firstname === undefined ? user.firstname : update.firstname) || null;
    const lastname = (update.lastname === undefined ? user.lastname : update.lastname) || null;
    const profile = (update.profile === undefined ? null : update.profile) || null;
    const phone = (update.phone === undefined ? user.phone : update.phone) || null;
    return await fetch("/updateprofile", {
        method: "POST",
    }, {
        session: user.sessionToken,
        firstname,
        lastname,
        profile,
        phone,
    });
}

export default updateUserProfile;