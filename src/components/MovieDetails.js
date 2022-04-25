// React Homework Project
// Allen P.
// 04/23/2022

// MovieDetails.js
// ===============

function MovieDetails({ info }) {
console.log(info);
  return (
    <div className="MovieDetails-Box">
      <div className="MovieDetails-Poster">
        <img src={info.Poster} alt="The Poster" />
      </div>
      <div className="MovieDetails-Data">
        <div className="MovieDetails-Row1">
          <div className="MovieDetails-Title">{info.Title}</div>
          <div className="MovieDetails-Rating">{info.imdbRating}</div>
        </div>
        <div className="MovieDetails-Row2">
          <div className="MovieDetails-Rated">{info.Rated}</div>
          <div className="MovieDetails-Runtime">{info.Runtime}</div>
        </div>
        <div className="MovieDetails-Genre">{info.Genre}</div>
        <div className="MovieDetails-Group">
          <div className="MovieDetails-Heading">Plot</div>
          <div className="MovieDetails-Text">{info.Plot}</div>
        </div>
        <div className="MovieDetails-Group">
          <div className="MovieDetails-Heading">Actors</div>
          <div className="MovieDetails-Text">{info.Actors}</div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
