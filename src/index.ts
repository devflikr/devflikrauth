import authLib from "./main";

import User from "./types/User";

import signOut from "./lib/signOut";

import AuthReject from "./types/AuthReject";
import AuthLibrary from "./types/AuthLibrary";
import AuthListener from "./types/AuthListener";
import AuthResponse from "./types/AuthResponse";

import updatePassword from "./lib/updatePassword";
import updateUserProfile from "./lib/updateUserProfile";
import updateUserUsername from "./lib/updateUserUsername";

import onAuthStateUpdate from "./lib/onAuthStateUpdate";
import setCurrentAuthIndex from "./lib/setCurrentAuthIndex";

import resetPasswordWithToken from "./lib/resetPasswordWithToken";
import sendPasswordResetToken from "./lib/sendPasswordResetToken";

import createUserWithEmailAndPassword from "./lib/createUserWithEmailAndPassword";
import loginUserWithUsernameAndPassword from "./lib/loginUserWithUsernameAndPassword";

const library = authLib;

const devFlikrAuth = {
    library,

    signOut,

    onAuthStateUpdate,

    updatePassword,
    updateUserProfile,
    updateUserUsername,
    setCurrentAuthIndex,

    resetPasswordWithToken,
    sendPasswordResetToken,

    createUserWithEmailAndPassword,
    loginUserWithUsernameAndPassword,
};

export {
    library,

    loginUserWithUsernameAndPassword,
    createUserWithEmailAndPassword,

    resetPasswordWithToken,
    sendPasswordResetToken,

    setCurrentAuthIndex,
    onAuthStateUpdate,
    signOut,

    updatePassword,
    updateUserProfile,
    updateUserUsername,

    AuthLibrary,
    AuthListener,
    AuthReject,
    AuthResponse,
    User,
};

export default devFlikrAuth;