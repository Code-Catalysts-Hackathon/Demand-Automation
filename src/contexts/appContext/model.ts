export interface IUserState{
    firstName:string;
    lastName:string;
    role:string
}

export interface IAppContext{
    user:IUserState;
    setUser:(value:IUserState)=>void;
    setLoader:(value:boolean)=>void;
}