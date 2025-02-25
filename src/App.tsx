import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import AppContext from './contexts/appContext';
import { EUserRole, IUserState } from './contexts/appContext/model';
import Loader from './components/common/Loader';

function App() {
  const [loader, setLoader] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(true);
  const [user, setUser] = useState<IUserState>({
    id: 0,
    firstName: '',
    lastName: '',
    role: EUserRole.BUPLATFORMHEAD,
    businessUnit:null,
    platform:null
  });

  return (
    <AppContext.Provider
      value={{
        user,
        showNav,
        setUser,
        setLoader,
        setShowNav
      }}>
      {loader ? <Loader /> : <></>}
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
