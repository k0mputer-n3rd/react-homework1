// React Homework Project
// Allen P.
// 04/17/2022

import './App.css';
import { movieData } from "./components/movieData";
import { MovieDetails } from "./components/MovieDetails";

// let appKey = "";

function App() {
  return (
    <div className="App">
      {/* <MovieDetails(movieData) /> */}
      {/* <MovieDetails({movieData}) /> */}
      {/* <MovieDetails props=movieData /> */}
      <MovieDetails props={movieData} />
    </div>
  );
}

export default App;


// const MyFunction = () => {
//   let something = prompt("Enter Test Data");
//   console.log(`The message is: ${something}`);
//   return(
//     <div>
//         <h1>This is a test of {something}</h1>
//     </div>
//   )
// }

