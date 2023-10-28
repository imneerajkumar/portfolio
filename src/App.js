import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Head/Header";
import Home from "./component/Home/Home";
import Portfolio from "./component/Portfolio/Portfolio";
import Resume from "./component/Resume/Resume";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Projects from "./component/Portfolio/Projects";
import "./App.css";

const Main = () => {
  return (
    <>
      <Header />
      <Home />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/allProjects" element={<Projects />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
