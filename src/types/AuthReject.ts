
type AuthReject = {
    error: boolean;
    status: "error";
    deviceToken: string;
    message: unknown;
    code: number;
    type: string;
    data: unknown;
}

export default AuthReject;