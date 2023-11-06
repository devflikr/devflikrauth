import authLib from "../main";
import User from "../types/User";
import listen from "../util/listen";

function setCurrentAuthIndex(index: number): User {
    if (authLib.auth.length == null) {
        authLib.index = -1;
    } else if (authLib.auth[index]) {
        authLib.index = index;
    } else {
        authLib.index = 0;
    }

    return listen();
}

export default setCurrentAuthIndex;