import frameIdGenerator from "../util/frame";
import stringifyObject from "../util/stringify";
import refetchLookupContents from "./refetchLookupContents";

let popup: Window | null;

export type AuthPopupOptions = {
    path?: "signin" | "signup" | "authchooser";
    app?: string;
    redirect?: string;
}

function openAuthPopup() {

    function openCenteredPopup(url: string, callback: () => void) {
        const width = 500;
        const height = 700;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;
        const id = frameIdGenerator();
        if (popup) popup.focus();
        else {
            popup = window.open(url + "&callback=" + id, "DevFlikr Accounts", `width=${width}, height=${height}, top=${top}, left=${left}`);
            (window as unknown as { [key: string]: unknown })[id] = callback;
        }

        return popup;
    }

    async function checkPopupStatus(popup: Window) {
        return new Promise((resolve) => {
            function selfCaller() {
                if (popup && popup.closed) {
                    return resolve(true);
                }
                setTimeout(selfCaller, 500);
            }
            selfCaller();
        });
    }

    return async (options?: AuthPopupOptions) => {
        const popupOptions = {
            app: options?.app || "DevFlikr",
            redirect: options?.redirect || encodeURIComponent(window.location.href),
        };
        return new Promise((resolve, reject) => {
            function callbackSuccessor() {
                refetchLookupContents().then((users) => resolve(users)).catch(error => reject(error));
            }
            const popup = openCenteredPopup(`https://accounts.devflikr.com/${options?.path || "signin"}?${stringifyObject(popupOptions)}`, callbackSuccessor);
            if (popup === null) return reject("Unable to open popup window.");
            checkPopupStatus(popup).then(() => {
                reject("Closed by user");
            });
        })

    };
}

export default openAuthPopup;