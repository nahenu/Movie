import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import BookingForm from "./components/BookingForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/booking/:id" element={<BookingForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
