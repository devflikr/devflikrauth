
import UserSession from "../types/UserSession";
import fetch from "../util/fetch";

async function refetchLookupContents(): Promise<UserSession[]> {
    return await fetch<UserSession[]>("/lookup", {
        method: "POST",
    }) as UserSession[];
}

export default refetchLookupContents;