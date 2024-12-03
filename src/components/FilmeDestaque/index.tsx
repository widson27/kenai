import React, { useEffect, useState } from 'react';
import clock from '../../assets/Clock.png';
import axios from 'axios';
import { Movie } from '../../types/movie';
import StarRating from '../StarRating';

function FilmeDestaque() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: '680ff3086b99504d2f0e9bfbdde0c061',
        language: 'pt-BR',
      },
    }).then((response) => {
      const allMovies = response.data.results;
      const randomMovies = allMovies
        .sort(() => 0.5 - Math.random()) // Embaralha os filmes
        .slice(0, 1);
      setMovies(randomMovies);
      console.log(allMovies);
    });
  };

  return (
    <main className="w-full flex items-center justify-center pt-[20px]">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="flex flex-col justify-center gap-2 sm:gap-4"
        >
          <img
            className="w-full h-[400px] relative pb-5"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=""
          />

          <div className="flex flex-col justify-between gap-4 p-2 absolute bg-black/50">
            <div className="bg-[#181818] flex flex-col w-[103px] h-[24px] rounded-tr-lg rounded-bl-lg py-1 px-2">
              <h3 className="text-[#FFA634] font-semibold text-xs">
                Ação/Aventura
              </h3>
            </div>
            <div className="flex items-center gap-6">
              <StarRating rating={movie.vote_average} />{' '}
              <div className="flex items-center gap-2">
                <img src={clock} alt="" />
                <p className="text-white text-sm font-semibold">1h 57m</p>
              </div>
            </div>
            <h2 className="text-white text-[40px] font-semibold">
              {movie.title}
            </h2>
            <p className="w-[592px] text-white text-base font-semibold text-justify">
              {movie.overview}
            </p>
            <button className="bg-[#FFA634] px-10 py-[10px] my-3 lg:my-6 rounded">
              Assistir agora
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}

export default FilmeDestaque;
