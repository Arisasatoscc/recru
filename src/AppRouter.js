import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"; // 遷移元のページ
import Inforsession from "./Inforsession"; // 遷移先のページ
import Studentregister from "./Studentregister";

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/inforsession" element={<Inforsession />} />
        <Route path="/studentregister" element={<Studentregister />} /> 
      </Routes>
    </Router>
  );
}

export default MainRouter;
