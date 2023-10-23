import AuthLibrary from "./AuthLibrary";
import User from "./User";

type AuthListener = (user: User | null, authLib: AuthLibrary) => void;

export default AuthListener;