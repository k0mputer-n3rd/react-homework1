// React Homework Project
// Allen P.
// 04/17/2022

export function MovieDetails({ props }) {
  console.log(props);
  return (
    <div className="MovieDetails-Box">
      <div className="MovieDetails-Poster">
        <img src={props.Poster} alt="The Poster" />
      </div>
      <div className="MovieDetails-Data">
        <div className="MovieDetails-Row1">
          <div className="MovieDetails-Title">{props.Title}</div>
          <div className="MovieDetails-Rating">{props.imdbRating}</div>
        </div>
        <div className="MovieDetails-Row2">
          <div className="MovieDetails-Rated">{props.Rated}</div>
          <div className="MovieDetails-Runtime">{props.Runtime}</div>
        </div>
        <div className="MovieDetails-Genre">{props.Genre}</div>
        <div className="MovieDetails-Group">
          <div className="MovieDetails-Heading">Plot</div>
          <div className="MovieDetails-Text">{props.Plot}</div>
        </div>
        <div className="MovieDetails-Group">
          <div className="MovieDetails-Heading">Actors</div>
          <div className="MovieDetails-Text">{props.Actors}</div>
        </div>
      </div>
    </div>
  );
}
