// React Homework Project
// Allen P.
// 04/24/2022

// MovieList.js
// ============

import MovieCard from "./MovieCard";

function MovieList(props) {
  console.log(`MovieList Called`);
  console.log(props);
  props.movieList.map((movie) => console.log(movie));
  return (
    <div className="MovieList-Box">
      ;{/* <MovieCard info={props.movieList[0]} /> */}
      {props.movieList.map((movie) => (
        <MovieCard key={movie.imdbID} info={movie} />
      ))}
    </div>
  );
}

export default MovieList;
