import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Mob_Navbar from "./components/mob_navbar/Mob_Navbar";
import Mob_Footer from "./components/mob_footer/Mob_Footer";
import Home from "./components/Home/Home";
import HomeAdmin from "./components/HomeAdmin/HomeAdmin";
import Redirect from "./components/Redirect/Redirect";
import Footer from "./components/Footer/Footer";
import Page2 from "./components/Page2/Page2";
import Station from "./components/Station/Station";
// import ThankYou from "./components/ThankYou/ThankYou";
import Feedback from "./components/Feedback/Feedback";
import FeedbackStudent from "./components/FeedbackStudent/FeedbackStudent";
import Dash from "./components/Dash/Dash";
// import HomeAdmin from "./components/HomeAdmin/HomeAdmin";

import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,HashRouter  } from "react-router-dom";

import axios from "axios";
import ThankYou from "./components/ThankYou/ThankYou";
import { useCookies } from 'react-cookie';
import NavbarTemp from "./components/NavbarTemp/NavbarTemp";


const App = () => {


  return (
    <div>

{      <HashRouter >
  {/* <Navbar /> */}
  {/* <Mob_Navbar /> */}
        {/* <NavbarTemp /> */}
        <Routes>
          <Route path="/" element={<NavbarTemp />} />
          <Route path="/home" element={<Home />} />
          <Route path="redirect" element={<Redirect />} />
          <Route path="station" element={<Station />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="/feedback_student" element={<FeedbackStudent />} />
          <Route path="/thankYou" element={<ThankYou />} />
          <Route path="/homeadmin" element={<HomeAdmin />} />
          <Route path="/admin" element={<Dash />} />
          <Route path="/homeadmin/admin" element={<HomeAdmin />} />
        </Routes>
    {/* <Footer /> */}
    {/* <Mob_Footer /> */}
      </HashRouter>}
      {/* <Dash /> */}
    </div>
  );
};

export default App;
