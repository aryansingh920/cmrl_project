import React from "react";
import Navbar from "./components/Navbar/Navbar";
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
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,HashRouter  } from "react-router-dom";

import axios from "axios";
import ThankYou from "./components/ThankYou/ThankYou";
import { useCookies } from 'react-cookie';







const App = () => {


  return (
    <div>
      <Navbar />

{      <HashRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="redirect" element={<Redirect />} />
          <Route path="station" element={<Station />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="/feedback_student" element={<FeedbackStudent />} />
          <Route path="/thankYou" element={<ThankYou />} />
          <Route path="/admin" element={<Dash />} />
          <Route path="/HomeAdmin" element={<HomeAdmin />} />
        </Routes>
      </HashRouter>}
      {/* <Dash /> */}
      <Footer />
    </div>
  );
};

export default App;
