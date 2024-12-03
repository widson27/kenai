import React, { useState } from 'react';
import avatar1 from '../../assets/3.png';
import avatar2 from '../../assets/5.png';
import avatar3 from '../../assets/7.png';
import { useNavigate } from 'react-router-dom';

function NovoPerfil() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState<string | undefined>(avatar3);

  const navigate = useNavigate();

  const avatars = [avatar1, avatar2, avatar3];

  // Função que adiciona o perfil
  const addUser = () => {
    if (!name || !avatar) {
      alert('Por favor, preencha o nome e selecione um avatar.');
      return;
    }

    // Recupera os perfis existentes do localStorage
    const existingProfiles = JSON.parse(
      localStorage.getItem('profiles') || '[]',
    );

    // Cria o novo perfil
    const newProfile = { name, avatar };
    const updatedProfiles = [...existingProfiles, newProfile];

    // Armazena os perfis atualizados no localStorage
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));

    // Navega para a página de perfis
    navigate('/');
  };

  return (
    <div className="w-full h-screen bg-zinc-950 flex flex-col items-center">
      <div className="flex flex-col items-center mb-[56px]">
        <h1 className="my-[15.5px] text-2xl font-normal text-transparent bg-clip-text bg-gradient-to-b to-pinkCustom from-orangeCustom">
          Kenai
        </h1>
      </div>

      <div className="flex flex-col items-center gap-2 my-8">
        <img className="w-[120px]" src={avatar} alt="Avatar" />
        <h3 className="text-white text-lg font-bold">{name || 'Nome'}</h3>
      </div>

      <div className="w-[312px] flex flex-col p-2 bg-[#181818] gap-2 rounded-md">
        <div>
          <label className="text-white text-lg">Escolha seu avatar:</label>
          <div className="flex w-full justify-center my-4 gap-4">
            {avatars.map((img, index) => (
              <img
                key={index}
                onClick={() => setAvatar(img)} // Setando o avatar selecionado
                className="w-[25%] cursor-pointer"
                src={img}
                alt={`Avatar ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <label className="text-white text-lg">Digite seu nome:</label>
        <input
          className="py-1 px-2 rounded-md text-base"
          type="text"
          placeholder="Qual o seu nome?"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={addUser}
        className="my-[56px] fixed bottom-0 bg-[#181818] p-3 w-[312px] h-[54px] text-base text-white font-semibold rounded-md"
      >
        Criar perfil
      </button>
    </div>
  );
}

export default NovoPerfil;
