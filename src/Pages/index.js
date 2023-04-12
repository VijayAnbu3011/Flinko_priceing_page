import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RouterComponent } from "../routes";

import Navbar from "./navbar";

const Home = () => {
  return (
    <div className="img">
      <div className="container py-3">
        <div id="loader" style={{ display: "none" }}>
          <div className="loader"></div>
        </div>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<RouterComponent />} />
            <Route path="/" element={<Navigate to="/pricing" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Home;
