import { Navigate, Route, Routes } from "react-router-dom";
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
import styles from "../src/components/Body/Excursions.module.css";
import Body from "./components/Body/body";
import { useSelector } from "react-redux";
import SignUpAdmin from "./components/Sign/Admin/SignUpAdmin";
import SignInAdmin from "./components/Sign/Admin/SignInAdmin";
import Sidebar from "./components/Sidebar/Sidebar";
import Orders from "./orders/Orders";
import Comments from "./components/comments/Comments";

function App() {
  const token = useSelector((state) => state.application.token);
  const user = useSelector((state) => state.application.user);
  const sidebar = useSelector((state) => state.sidebarReducer.sidebar);


  return (
    <div className={styles.aad}>
      <Header />
      <div className={styles.allMain}>
        {sidebar ? (
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
        ) : null}

        <div className={styles.main}>
          <Routes>
            {token ? (
              <>
                <Route path="/login" element={<Navigate to="/" />} />
                <Route path="/signup" element={<Navigate to="/" />} />
                <Route path="/com" element={<Comments />} />
              </>
            ) : (
              <>
                <Route path="/login" element={<SignIn />} />
                <Route path="/loginAdmin" element={<SignInAdmin />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signupadmin" element={<SignUpAdmin />} />
              </>
            )}
            {user.admin ? (
              <>
                <Route path="/loginAdmin" element={<Navigate to="/" />} />
                <Route path="/signupadmin" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/login" element={<SignIn />} />
                <Route path="/loginAdmin" element={<SignInAdmin />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signupadmin" element={<SignUpAdmin />} />
              </>
            )}
            <Route path="/" element={<Body />} />
            <Route path="/help" element={<Help />} />
            <Route path="/ReservationTour" element={<ReservationTour />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/category/:categoryId" element={<Tours />} />
            <Route path="/tours/:id" element={<OneTour />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/excursion" element={<Excursions />} />
            <Route path="/excursion/:id" element={<OneExcursion />} />
            <Route path="/orders" element={<Orders/>} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
