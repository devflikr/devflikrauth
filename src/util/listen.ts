import authLib from "../main";
import User from "../types/User";

export default function listen() {
    const currentUser: User | null = authLib.auth[authLib.index] || null;

    authLib.listeners.forEach(listener => listener(currentUser, authLib));

    return currentUser;
}