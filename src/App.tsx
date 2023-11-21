import { Navigate, Route, Routes } from "react-router-dom";
import Carts from "./components/Body/Carts";
import Contacts from "./components/Body/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Tours from "./components/Tours/Tours";
import OneTour from "./components/Tours/OneTour";

function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/tours" element={<Tours/>} />
        <Route path="/tours/tours/:id" element={<OneTour/>} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/carts" element={<Carts />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
