import authLib from "./main";

import User from "./types/User";
import UserDetail from "./types/UserDetail";
import UserSession from "./types/UserSession";
import UserProfileOptions from "./types/UserProfileOptions";


import signOut from "./lib/signOut";

import AuthReject from "./types/AuthReject";
import AuthLibrary from "./types/AuthLibrary";
import AuthListener from "./types/AuthListener";
import AuthResponse from "./types/AuthResponse";

import getUserDetail from "./lib/getUserDetail";
import getUserSessions from "./lib/getUserSessions";

import removeUserSession from "./lib/removeUserSession";

import updateUserProfile from "./lib/updateUserProfile";
import updateUserPassword from "./lib/updateUserPassword";
import updateUserUsername from "./lib/updateUserUsername";

import onAuthStateUpdate from "./lib/onAuthStateUpdate";
import setCurrentAuthIndex from "./lib/setCurrentAuthIndex";

import sendNewPassword from "./lib/sendNewPassword";
import sendEmailVerification from "./lib/sendEmailVerification";

import createUserWithEmailAndPassword from "./lib/createUserWithEmailAndPassword";
import loginUserWithUsernameAndPassword from "./lib/loginUserWithUsernameAndPassword";

const library = authLib;

const devFlikrAuth = {
    library,

    signOut,
    onAuthStateUpdate,
    setCurrentAuthIndex,

    getUserDetail,
    getUserSessions,

    removeUserSession,

    updateUserProfile,
    updateUserPassword,
    updateUserUsername,

    sendNewPassword,
    sendEmailVerification,

    createUserWithEmailAndPassword,
    loginUserWithUsernameAndPassword,
};

export {
    library,

    createUserWithEmailAndPassword,
    loginUserWithUsernameAndPassword,

    sendNewPassword,
    sendEmailVerification,

    getUserDetail,
    getUserSessions,

    removeUserSession,

    signOut,
    onAuthStateUpdate,
    setCurrentAuthIndex,

    updateUserProfile,
    updateUserPassword,
    updateUserUsername,

    User,
    UserDetail,
    UserSession,
    UserProfileOptions,

    AuthReject,
    AuthLibrary,
    AuthListener,
    AuthResponse,
};

export default devFlikrAuth;