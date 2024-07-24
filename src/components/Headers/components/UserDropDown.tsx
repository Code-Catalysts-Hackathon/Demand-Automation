import React, { useContext } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import AppContext from '../../../contexts/appContext';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../../../config/constants';
import ProfileImg from '../../../images/profile.jpg';

export default function UserDropDown() {
  const { user } = useContext(AppContext);
  const navigate = useNavigate()
  const onSignOut = ()=>{
    localStorage.removeItem(AUTH_TOKEN);
    navigate("/")
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="flex items-center text-white hover:text-yellow-50 focus:outline-none">
          <div className="flex-none flex justify-center">
            <div className="w-8 h-8 flex ">
              <img
                src={ProfileImg}
                alt="profile"
                className="shadow rounded-full object-cover"
              />
            </div>
          </div>

          <div className="hidden md:block text-sm md:text-md text-white">
            {user.firstName + ' ' + user.lastName}
          </div>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
        <div className="py-1">
          <MenuItem>
            <Link to="#" onClick={onSignOut} className="block w-full px-4 py-2 text-left text-sm font-ltc-m text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
              Sign out
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
