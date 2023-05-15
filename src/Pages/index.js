import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RouterComponent } from "../routes";
import { Box } from "@mui/material";

import Navbar from "./navbar";
import Pricing from "./pricing";
import WeOffer from "./weOffer";
import AboutUs from "./aboutUs";
import ContactUs from "./contactUs";
import HomePage from "./home/HomePage";

const Home = () => {
  return (
    <Box className="img">
      <Box>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="*" element={<RouterComponent />} />
            {/* <Route path="/" element={<Navigate to="/pricing" />} />
            <Route path="/weOffer" element={<Navigate to="/weOffer" />} /> */}
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/weOffer" element={<WeOffer />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
        <Box id="loader" style={{ display: "none" }}>
          <Box className="loader"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
