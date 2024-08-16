import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Help from "./components/Help";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help/:topic" element={<Help />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
