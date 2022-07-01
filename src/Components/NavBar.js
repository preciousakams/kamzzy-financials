import React from 'react';
import { BsMic } from 'react-icons/bs';
import { IoIosSettings } from 'react-icons/io';

const NavBar = () => (
  <div>
    <ul className="navList">
      <li><BsMic /></li>
      <li><IoIosSettings aria-label="setting" /></li>
    </ul>
  </div>
);
export default NavBar;
