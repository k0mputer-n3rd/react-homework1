// React Homework Project
// Allen P.
// 04/24/2022

// MovieCard.js
// ============

function MovieCard({ info }) {
  const logInfo = typeof(info);
  console.log(`MovieCard: ${logInfo}`);
  console.log(info);
  return (
    <div className="MovieCard-Box">
      <div className="MovieCard-Poster">
        <img className="MovieCard-Image" src={info.Poster} alt="The Poster" />
      </div>
      <div className="MovieCard-Title">{info.Title}</div>
      <div className="MovieCard-Type">{info.Type}</div>
    </div>
  );
}

export default MovieCard;
