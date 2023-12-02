
function stringifyObject(obj: object) {
    return Object.entries(obj).reduce((acc, [key, value]) => acc + "&" + key + "=" + value, "");
}

export default stringifyObject;