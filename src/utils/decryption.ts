import { isExpired, decodeToken as decodeJwt } from "react-jwt";
import { IUserState } from "../contexts/appContext/model";

interface ITokenResponse{
    expired:boolean;
    payload:IUserState;
}
export const decodeTokenPayload = (token:string):ITokenResponse=>{

    const expired = isExpired(token);
    const payload = decodeJwt(token) as IUserState;

    return ({
        expired,
        payload
    })
}