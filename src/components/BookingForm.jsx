import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";

const BookingForm = () => {
  const params = useParams();
  const [movieId, setMovieId] = useState(params.id);
  const [screeningDate, setScreeningDate] = useState("");
  const [screeningTime, setScreeningTime] = useState("");
  const [seats, setSeats] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieId && screeningDate && screeningTime && seats && seats >= 1) {
      return alert("Ticket is Confirmed");
    } else {
      return alert("please fill all details correctly");
    }
  };
  const handleSeat = (e) => {
    setSeats((prev) => {
      if (prev >= 0) {
        return e.target.value;
      } else {
        return 0;
      }
    });

    // if (seats < 0) {
    //   return setSeats(0);
    // }
  };
  return (
    <div className="container-fluid booking-form">
      <h2>Book a ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="screeningDate">Screening Date</label>
          <input
            type="date"
            className="form-control"
            id="screeningDate"
            value={screeningDate}
            onChange={(e) => setScreeningDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="screeningTime">Screening Time</label>
          <input
            type="time"
            className="form-control"
            id="screeningTime"
            value={screeningTime}
            onChange={(e) => setScreeningTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="seats">Number of Seats</label>
          <input
            type="number"
            className="form-control"
            id="seats"
            value={seats}
            onChange={handleSeat}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Book Now
          </button>
          <Link to={"/"}>
            <button className="btn btn-primary mx-2">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
