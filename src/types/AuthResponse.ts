import User from "./User";
import UserDetail from "./UserDetail";
import UserSession from "./UserSession";

type AuthResponse = {
    success: boolean;
    status: "success";
    message: unknown;
    deviceToken: string;
    auth?: User[];
    data?: User | UserDetail | UserSession | null;
}

export default AuthResponse;