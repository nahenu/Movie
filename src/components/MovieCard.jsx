import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { Title: title, Poster: poster, Year: year, imdbID: id } = movie;

  return (
    <div className="card movie-card">
      <Link to={`/movie/${id}`}>
        <img src={poster} alt={title} className="card-img-top" />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
