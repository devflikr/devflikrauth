import User from "./User";
import UserDetail from "./UserDetail";
import UserSession from "./UserSession";

type AuthResponse = {
    success: boolean;
    status: "success";
    message: unknown;
    auth?: User[];
    data?: User | UserDetail | UserSession | null;
}

export default AuthResponse;