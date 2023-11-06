import authLib from "../main";
import AuthListener from "../types/AuthListener";
import listen from "../util/listen";

function onAuthStateUpdate(callback: AuthListener): () => void {
    authLib.listeners.push(callback);
    listen();
    return () => {
        authLib.listeners = authLib.listeners.filter(listener => listener !== callback);
    };
}

export default onAuthStateUpdate;