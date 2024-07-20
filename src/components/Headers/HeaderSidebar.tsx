import React, { useContext } from 'react';
import LogoSVG from '../common/LogoSVG';
import { Link, useLocation } from 'react-router-dom';
import AppContext from '../../contexts/appContext';
import { navlist } from '../../layouts/nav';

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
            <div className="flex-none flex justify-center">
              <div className="w-8 h-8 flex ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShta_GXR2xdnsxSzj_GTcJHcNykjVKrCBrZ9qouUl0usuJWG2Rpr_PbTDu3sA9auNUH64&usqp=CAU"
                  alt="profile"
                  className="shadow rounded-full object-cover"
                />
              </div>
            </div>

            <div className="hidden md:block text-sm md:text-md text-white">
              John Doe
            </div>
          </div>
        </div>
      </div>
      <aside
        className={`w-60 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-primary-dark ${showNav ? 'translate-x-none' : '-translate-x-48'}`}>
        <div
          className={`max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#1E293B]  absolute top-2 rounded-full h-12 ${showNav ? 'translate-x-24 scale-x-0' : 'translate-x-0'}`}>
          <div className="flex items-center space-x-3 group bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-purple-500  pl-10 pr-2 py-1 rounded-full text-white  ">
            <div className="transform ease-in-out duration-300 mr-12">NERVE</div>
          </div>
        </div>
        <div
          onClick={openNav}
          className="-right-6 transition transform ease-in-out duration-500 flex border-4 border-white dark:border-[#0F172A] bg-primary dark:hover:bg-blue-500 hover:bg-primary-light absolute top-2 p-3 rounded-full text-white hover:rotate-45">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>
        </div>
        <div className="absolute left-4">
          <LogoSVG />
        </div>
        <div
          className={`max  text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)] ${!showNav ? 'hidden' : 'flex'}`}>
          {navlist.map((navItem) => {
            const isActive =  location.pathname.startsWith(navItem.href);
            return (
              <Link
                to={navItem.href}
                key={navItem.href}
                className="hover:ml-4 w-full text-white dark:hover:text-blue-500 bg-primary hover:bg-primary-light p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                 {isActive?<navItem.activeIcon />:<navItem.icon />}
                <div className="">{navItem.name}</div>
              </Link>
            );
          })}
        </div>
        <div
          className={`"mini mt-20 flex-col space-y-2 w-full h-[calc(100vh)] ${!showNav ? 'flex' : 'hidden'}`}>
          {navlist.map((navItem) => {
            const isActive =  location.pathname.startsWith(navItem.href);
            return (
              <Link
                title={navItem.name}
                to={navItem.href}
                key={navItem.href}
                className="hover:ml-4 justify-end pr-5 text-white dark:hover:text-blue-500 w-full  bg-primary hover:bg-primary-light cursor-pointer  p-3 rounded-full transform ease-in-out duration-300 flex">
                {isActive?<navItem.activeIcon />:<navItem.icon />}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
