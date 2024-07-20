import React, { ReactNode, useContext, useState } from 'react';
import AppContext from '../contexts/appContext';
import HeaderSidebar from '../components/Headers/HeaderSidebar';

const AdminLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { showNav } = useContext(AppContext);

  return (
    <>
      <HeaderSidebar />
      <div
        className={`content ml-12 transform ease-in-out duration-1000 pt-20 px-2 md:px-5 pb-4 ${showNav ? 'md:ml-60' : ''}`}>
        {children}
      </div>
    </>
  );
};

export default AdminLayout;
