import User from "./User";
import AuthListener from "./AuthListener";

type AuthLibrary = {
    hasAuth: boolean;
    listeners: AuthListener[];
    auth: User[];
    index: number;
    error: unknown;
};

export default AuthLibrary;