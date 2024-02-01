import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="container-fluid movie-list">
      <div className="row">
        {movies.map((movie, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
