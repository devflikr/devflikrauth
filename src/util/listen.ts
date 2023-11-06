import authLib from "../main";
import User from "../types/User";

export default function listen() {
    const currentUser: User | null = authLib.auth[authLib.index] || null;

    setTimeout(() => {
        authLib.listeners.forEach(listener => listener(currentUser, authLib));
    }, 0);

    return currentUser;
}