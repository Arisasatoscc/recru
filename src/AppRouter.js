import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SC01 from "./components/SC01"; // 遷移元のページ
import SC03 from "./components/SC03"; // 遷移先のページ
import SC04 from "./components/SC04";
import { useCookies } from "react-cookie";


function AppRouter() {
  const [cookies, setCookie] = useCookies();
  if (!cookies.recruit_year) {
    setCookie("recruit_year", new Date().getFullYear());
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SC01 />} />
        <Route path="/SC03" element={<SC03 />} />
        <Route path="/SC04" element={<SC04 />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
