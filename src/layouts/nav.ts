import { FaLightbulb, FaRegLightbulb  } from 'react-icons/fa';
import { AiFillDashboard, AiOutlineDashboard } from 'react-icons/ai';
import { BsPeople, BsPeopleFill  } from "react-icons/bs";

export const navlist = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    activeIcon: AiFillDashboard,
    icon: AiOutlineDashboard
  },
  {
    name: 'Demands',
    href: '/demands',
    activeIcon: FaLightbulb ,
    icon: FaRegLightbulb  
  },
  {
    name: 'Employee',
    href: '/employee',
    activeIcon: BsPeopleFill ,
    icon: BsPeople  
  }
];
