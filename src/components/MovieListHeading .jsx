import "bootstrap/dist/css/bootstrap.min.css";

const MovieListHeading = ({ heading }) => {
  return (
    <div className="row">
      <div className="col-12">
        <h1 className="text-primary">{heading}</h1>
      </div>
    </div>
  );
};

export default MovieListHeading;
