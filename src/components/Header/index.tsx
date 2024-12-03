import React from 'react';
import menu from '../../assets/icon-menu-mobile.png';
import NavBar from '../NavBar';

function Header() {
  return (
    <div className="w-full z-[1] h-[50px] pt-4 flex justify-between items-center">
      <h1 className="text-[40px] font-normal text-transparent bg-clip-text bg-gradient-to-b to-pinkCustom from-orangeCustom">
        Kenai
      </h1>
      <NavBar />
      <img src={menu} className="w-8 h-8 lg:hidden" />
    </div>
  );
}

export default Header;
