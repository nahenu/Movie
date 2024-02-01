import "bootstrap/dist/css/bootstrap.min.css";

const SearchBox = ({ searchValue, setSearchValue }) => {
  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="row">
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a movie"
          value={searchValue}
          onChange={handleSearchInputChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
