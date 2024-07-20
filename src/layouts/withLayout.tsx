import React from 'react';
import Footer from '../components/Footer';
import HeaderDefault from '../components/Headers/HeaderDefault';
import AdminLayout from './AdminLayout';

const defaultLayout = (Component: any) => {
  return () => (
    <div className="flex flex-col min-h-[100vh]">
      <HeaderDefault />
      <Component />
      <Footer className='mt-auto' />
    </div>
  );
};

const authLayout = (Component: any) => {
  return () => (
    <AdminLayout>
      <Component />
    </AdminLayout>
  );
};

const withLayout = (Component: any, type: string = 'default') => {
  if (type === 'auth') {
    return authLayout(Component);
  }
  return defaultLayout(Component);
};

export default withLayout;
