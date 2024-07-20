import React from "react";
import { IAppContext } from "./model";

const AppContext = React.createContext<IAppContext>(null as unknown as IAppContext);

export default AppContext;