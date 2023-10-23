import User from "./User";

type AuthResponse = {
    success: boolean;
    status: "success";
    message: unknown;
    data: User[];
}

export default AuthResponse;