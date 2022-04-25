// React Homework Project
// Allen P.
// 04/24/2022

// MovieForm.js
// ============

import React from "react";

import { useEffect, useState } from "react";
import MovieList from './MovieList';
import MovieDetails from "./MovieDetails";
import MovieCard from "./MovieCard";
import { movieData } from "./movieData";

// Use key from REACT_APP_OMDB_API_KEY in .env.local
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;


function MovieForm() {
console.log(`API_KEY is ${API_KEY}`);

  // const [movieList, setMovieList] = React.useState([]);
  // For now, create a movielist array that has one element from movieData
  // const movieList = [movieData];
  const [movieList, setMovieList] = useState([movieData]);

  useEffect(() => {
    const listMoviesByName = async (name) => {
      const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${name}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setMovieList(data.Search);
    };
    listMoviesByName("batman");
  }, []);

  return (
    // <div><MovieList movieList={ movieList }/></div>
    <>
      <MovieList movieList={movieList} />
    </>
  );
}

export default MovieForm;
