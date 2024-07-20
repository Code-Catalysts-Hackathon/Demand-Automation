export interface IUserState{
    firstName:string;
    lastName:string;
    role:string
}

export interface IAppContext{
    user:IUserState;
    showNav:boolean;
    setUser:React.Dispatch<React.SetStateAction<IUserState>>
    setLoader:React.Dispatch<React.SetStateAction<boolean>>
    setShowNav:React.Dispatch<React.SetStateAction<boolean>>
}