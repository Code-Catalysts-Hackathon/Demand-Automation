import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import AppContext from './contexts/appContext';

function App() {
  return (
    <AppContext.Provider value={{}}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
