type UserProfileOptions = {
    firstname?: string | null;
    lastname?: string | null;
    birthday?: Date;
    profile?: string | null;
    gender?: "male" | "female" | "none" | "null";
    phone?: string | null;
};

export default UserProfileOptions;