import { isExpired, decodeToken as decodeJwt } from "react-jwt";

export const decodeTokenPayload = (token:string)=>{

    const expired = isExpired(token);
    const payload = decodeJwt(token);

    return ({
        expired,
        payload
    })
}