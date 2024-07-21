import React, { ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import AppContext from '../contexts/appContext';
import HeaderSidebar from '../components/Headers/HeaderSidebar';
import { getLocalToken } from '../utils';
import { decodeTokenPayload } from '../utils/decryption';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/Loader';
import { EUserRole } from '../contexts/appContext/model';

const AdminLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const { showNav, user, setUser } = useContext(AppContext);
  const [load, setLoad] = useState(false);
  const validateToken = useCallback(() => {
    const token = getLocalToken() || '';
    if (token) {
      if (!user.id) {
        const decoded = decodeTokenPayload(token);
        if (decoded.expired || EUserRole[decoded.payload.role]) {
          navigate('/');
          return null;
        } else {
          setUser(decoded.payload);
        }
      }else if(!EUserRole[user.role]){
        navigate('/');
      }
      setLoad(true);
    } else {
      navigate('/');
    }
  }, [user,navigate,setUser]);

  useEffect(() => {
    validateToken();
  }, [validateToken]);

  return (
    <>
      {!load ? <Loader /> : <></>}
      <HeaderSidebar />
      <div
        className={`content ml-12 transform ease-in-out duration-1000 pt-20 px-2 md:px-5 pb-4 ${showNav ? 'md:ml-60' : ''}`}>
        {children}
      </div>
    </>
  );
};

export default AdminLayout;
