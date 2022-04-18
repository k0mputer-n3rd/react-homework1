// React Homework Project
// Allen P.
// 04/17/2022

// utils.js

// Function to respond to information typed in input box
// export const myFunction = () => {
//   let something = prompt("Enter Test Data");
//   console.log(`The message is: ${something}`);
//   return `The message is: ${something}`;
// }

export const MyFunction = () => {
  if (!appKey) {
    appKey = prompt("Enter App Key for OMDbAPI");
  }
  movieID = prompt("Enter Movie ID");
  let something = getMoviesById(movieID);
  console.log(`Returned value: ${something}`);
  return(
    <div>
        <h1>You typed: {movieID}</h1>
    </div>
  )
}

// Function to search for movies by partial title
export const searchMoviesByName = async (search) => {
  let apiKey = prompt("Enter API Key");
  // accessing the API
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;
  // Get an object of detailed information about the specified movie
  const response = await fetch(url);
  // return an array of movies with a matching title from OMDb API
  const data = await response.json();
  console.log(data);
  return data;
};

// Function to get movie information for a specific title
export const getMovieByTitle = async (title) => {
  let apiKey = prompt("Enter API Key");
  // accessing the API
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`;
  // Get an object of detailed information about the specified movie
  const response = await fetch(url);
  // return an array of movies with a matching title from OMDb API
  const data = await response.json();
  console.log(data);
  return data;
};

// Function to get movie information by movie ID
export const getMoviesById = async (id) => {
  let apiKey = prompt("Enter API Key");
  // accessing the API
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
  // Get an array of movies with a matching id from OMDb API
  const response = await fetch(url);
  // get an object of detailed information about the specified movie
  const data = await response.json();
  console.log(data);
  return data;
};
