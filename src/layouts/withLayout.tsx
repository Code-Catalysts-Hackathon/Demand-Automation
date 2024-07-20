import React from 'react';
import Footer from '../components/Footer';
import HeaderDefault from '../components/Headers/HeaderDefault';

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
    <>
      <Component />
      <Footer />
    </>
  );
};

const withLayout = (Component: any, type: string = 'default') => {
  if (type === 'auth') {
    return authLayout(Component);
  }
  return defaultLayout(Component);
};

export default withLayout;
