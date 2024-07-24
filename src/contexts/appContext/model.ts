interface IName{
    id:number;
    name:string
}

export enum EUserRole {
    LBGADMIN = 'LBGADMIN',
    LTCADMIN = 'LTCADMIN',
    BUHEAD = 'BUHEAD',
    BUPLATFORMHEAD = 'BUPLATFORMHEAD',
}

export interface IUserState{
    id:number;
    firstName:string;
    lastName:string;
    role:EUserRole;
    businessUnit:IName | null;
    platform:IName | null
}

export interface IAppContext{
    user:IUserState;
    showNav:boolean;
    setUser:React.Dispatch<React.SetStateAction<IUserState>>
    setLoader:React.Dispatch<React.SetStateAction<boolean>>
    setShowNav:React.Dispatch<React.SetStateAction<boolean>>
}