import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Movie } from '../../types/movie';
import StarRating from '../StarRating';

function CardsFilmes() {
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
        .slice(0, 6); // Seleciona os primeiros 6 filmes
      setMovies(randomMovies);
      console.log(randomMovies);
    });
  };

  return (
    <ul className="w-full gap-4 overflow-y-auto justify-center lg:justify-normal flex-wrap flex ">
      {movies.map((movie) => (
        <li className="flex flex-col" key={movie.id}>
          <div className="w-[168px] h-[256px] relative">
            <img
              className="object-cover"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="absolute left-2 bottom-2">
              <StarRating rating={movie.vote_average} />
              <h2 className="text-xl text-white font-semibold">
                {movie.title}
              </h2>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CardsFilmes;
