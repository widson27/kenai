import React from 'react';
import buscar from '../../assets/button-search.png';
import notificacao from '../../assets/notification.png';
import user from '../../assets/button-user.png';

function NavBar() {
  return (
    <nav className="lg:flex justify-between gap-[64px] hidden items-center">
      <img src={buscar} alt="" />
      <p className="text-white font-semibold text-2xl">Inicio</p>
      <p className="text-white font-semibold text-2xl">Minha lista</p>
      <img src={notificacao} alt="" />
      <img src={user} alt="" />
    </nav>
  );
}

export default NavBar;
