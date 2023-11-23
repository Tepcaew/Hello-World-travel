

import { Route, Routes } from "react-router-dom";
import Contacts from "./components/Body/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Tours from "./components/Tours/Tours";
import OneTour from "./components/Tours/OneTour";
import Excursions from "./components/Body/Excursions";
import OneExcursion from "./components/Body/OneExcursion";
import SignIn from "./components/Sign/SignIn";
import SignUp from "./components/Sign/SignUp";
import Help from "./components/Body/BlockHelp/Help";
import Reviews from "./components/Body/Reviews/Reviews";
import ReservationTour from "./components/Body/Reservation/ReservationTour";
import Body from "./components/Body/body";

function App() {
  return (
    <div>


      <Header />
      
      <Routes>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/main" element={<Body/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/ReservationTour" element={<ReservationTour/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/tours" element={<Tours/>} />
        <Route path="/tours/tours/:id" element={<OneTour/>} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/excursion" element={<Excursions />} />
        <Route path="/excursion/excursion/:id" element={<OneExcursion />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
