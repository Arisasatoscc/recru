import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./components/Main"; // 遷移元のページ
import Inforsession from "./components/Inforsession"; // 遷移先のページ
import Student from "./components/Student";
import { useCookies } from "react-cookie";


function AppRouter() {
  const [cookies, setCookie] = useCookies();
  if (!cookies.recruit_year) {
    setCookie("recruit_year", new Date().getFullYear());
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/inforsession" element={<Inforsession />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
