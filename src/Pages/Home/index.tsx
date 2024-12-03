import React from 'react';
import Header from '../../components/Header';
import CardsFilmes from '../../components/CardsFilmes';
import FilmeDestaque from '../../components/FilmeDestaque';

function Home() {
  return (
    <main className="flex flex-col pb-[3%] px-[5%] sm:px-[15%] justify-between w-full h-screen z-[-1] bg-black">
      <Header />
      <FilmeDestaque />
      <CardsFilmes />
    </main>
  );
}

export default Home;
