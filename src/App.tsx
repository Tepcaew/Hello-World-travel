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

function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>

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
