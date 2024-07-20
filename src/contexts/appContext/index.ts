import React from "react";
import { IAppContext } from "./model";

const AppContext = React.createContext<IAppContext | null>(null);

export default AppContext;