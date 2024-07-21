import React, { useContext } from 'react';
import LogoSVG from '../common/LogoSVG';
import { Link, useLocation } from 'react-router-dom';
import AppContext from '../../contexts/appContext';
import { navlist } from '../../layouts/nav';
import { APP_NAME } from '../../config/constants';
import LogoSymbol from '../common/LogoSymbol';
import UserDropDown from './components/UserDropDown';

export default function HeaderSidebar() {
  const { showNav, setShowNav } = useContext(AppContext);
  const location = useLocation();
  const openNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <>
      <div className="fixed w-full z-30 flex bg-primary-dark dark:bg-[#0F172A] p-2 items-center justify-center h-16 px-10">
        <div className="logo ml-12 dark:text-white  transform ease-in-out duration-500 flex-none h-full flex items-center justify-center">
          <LogoSVG />
        </div>
        <div className="grow h-full flex items-center justify-center"></div>
        <div className="flex-none h-full text-center flex items-center justify-center">
          <div className="flex space-x-3 items-center px-3">
            <UserDropDown/>
          </div>
        </div>
      </div>
      <aside
        className={`w-60 fixed transition transform ease-in-out duration-1000 z-40 flex h-screen bg-primary-dark ${showNav ? 'translate-x-none' : '-translate-x-48'}`}>
        <div
          className={`max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#1E293B]  absolute top-2 rounded-full h-12 ${showNav ? 'translate-x-24 scale-x-0' : 'translate-x-0'}`}>
          <div className="flex items-center space-x-3 group bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-purple-500  pl-10 pr-2 py-1 rounded-full text-white  ">
            <div className="transform ease-in-out duration-300 mr-12">{APP_NAME}</div>
          </div>
        </div>
        <div
          onClick={openNav}
          className={`-right-6 z-[41] cursor-pointer transition transform ease-in-out duration-500 flex border-4 border-white dark:border-[#0F172A] bg-primary dark:hover:bg-blue-500 hover:bg-primary-light absolute top-2 p-3 rounded-full text-white ${showNav ? 'hover:-rotate-90' : 'hover:rotate-90'}`}>
          <div className="bg-white rounded-full">
            <LogoSymbol width={16} height={16} />
          </div>
        </div>
        <div className="absolute w-full">
          <div>
            <LogoSVG className={`mx-auto`} />
          </div>
        </div>
        <div
          className={`max  text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)] ${!showNav ? 'hidden' : 'flex'}`}>
          {navlist.map((navItem) => {
            const isActive = location.pathname.startsWith(navItem.href);
            return (
              <Link
                to={navItem.href}
                key={navItem.href}
                className={`hover:ml-4 w-full text-white dark:hover:text-blue-500 hover:bg-primary-light p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3 ${isActive ? 'bg-primary-light' : 'bg-primary'}`}>
                {isActive ? <navItem.activeIcon /> : <navItem.icon />}
                <div className="">{navItem.name}</div>
              </Link>
            );
          })}
        </div>
        <div
          className={`"mini mt-20 flex-col space-y-2 w-full h-[calc(100vh)] ${!showNav ? 'flex' : 'hidden'}`}>
          {navlist.map((navItem) => {
            const isActive = location.pathname.startsWith(navItem.href);
            return (
              <Link
                title={navItem.name}
                to={navItem.href}
                key={navItem.href}
                className={`hover:ml-4 justify-end pr-5 text-white dark:hover:text-blue-500 w-full  bg-primary hover:bg-primary-light cursor-pointer  p-3 rounded-full transform ease-in-out duration-300 flex ${isActive ? 'bg-primary-light' : 'bg-primary'}`}>
                {isActive ? <navItem.activeIcon /> : <navItem.icon />}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
