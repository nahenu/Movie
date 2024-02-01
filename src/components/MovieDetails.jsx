import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `http://www.omdbapi.com/?i=${params.id}&apikey=263d22d8`;

      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Title) {
        setMovie(responseJson);
      }
    };

    fetchMovieDetails();
  }, [params.id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid movie-details">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <a href={`/booking/${movie.imdbID}`} className="btn btn-primary">
        Book a ticket
      </a>
    </div>
  );
};

export default MovieDetails;
