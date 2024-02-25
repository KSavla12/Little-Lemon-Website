import NavBar from './components/layout/NavBar';
import HomePage from './components/pages/HomePage';
import Footer from './components/layout/Footer';
import BookingPage from './components/pages/BookingPage';
import ConfirmedBooking from "./components/pages/Bookings/ConfirmedBooking";
import './App.css';
import { BrowserRouter , Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/booking" element={<BookingPage/>}></Route>
          <Route path="/confirmed" element={<ConfirmedBooking/>}></Route>
        </Routes>

        <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;
