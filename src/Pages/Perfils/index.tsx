import React from 'react';
import { Link } from 'react-router-dom';

function Perfils() {
  // Recupera os perfis do localStorage
  const profiles = JSON.parse(localStorage.getItem('profiles') || '[]');

  return (
    <div className="w-full h-screen bg-zinc-950 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="my-[2%] text-2xl font-normal text-transparent bg-clip-text bg-gradient-to-b to-pinkCustom from-orangeCustom">
          Kenai
        </h1>
        <h2 className="text-white text-xl mt-[5px]">
          Bem-vindo(a) de volta ao Kenai
        </h2>
        <p className="text-white text-lg">Quem está usando?</p>
      </div>

      <div className="flex w-full h-full justify-center items-center mb-[90px] ">
        {/* Verificando se há perfis */}
        {profiles.length === 0 ? (
          <p className="text-white text-lg mt-4">
            Ainda não há perfis criados. Adicione um perfil!
          </p>
        ) : (
          <div className="flex justify-center gap-6 sm:gap-10 flex-col sm:flex-row sm:flex-wrap">
            {profiles.map(
              (profile: { name: string; avatar: string }, index: number) => (
                <Link key={index} to="/home/">
                  <div className="flex flex-col items-center gap-2">
                    <img
                      className="w-[100px] sm:w-[130px]  cursor-pointer"
                      src={profile.avatar}
                      alt={`Avatar de ${profile.name}`}
                    />
                    <h3 className="text-white text-lg">{profile.name}</h3>
                  </div>
                </Link>
              ),
            )}
          </div>
        )}
      </div>

      <Link to="/perfil/" className="fixed bottom-0 w-[80%] sm:w-[312px]">
        <button
          type="button"
          className="my-[30px]  bg-[#181818] p-3 w-full h-[54px] text-base text-white font-semibold rounded-md"
        >
          Adicionar perfil
        </button>
      </Link>
    </div>
  );
}

export default Perfils;
