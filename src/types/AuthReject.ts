
type AuthReject = {
    error: boolean;
    status: "error";
    message: unknown;
    code: number;
    type: string;
    data: unknown;
}

export default AuthReject;