import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RouterComponent } from "../routes";
import { Box } from "@mui/material";

import Navbar from "./navbar";
import Pricing from "./pricing";
import WeOffer from "./weOffer";
import AboutUs from "./aboutUs";
import ContactUs from "./contactUs";
import HomePage from "./home/HomePage";
import Footer from "./Footer/Footer";
import Policy from "./privacyPolicy/Policy";

const Home = () => {
  return (
    <Box className="img">
      <Box>
        <BrowserRouter>
          <Navbar />
          <Box sx={{ minHeight: "calc(100vh - 125px)" }}>
            <Routes>
              <Route path="*" element={<RouterComponent />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/weOffer" element={<WeOffer />} />
              <Route path="/privacyPolicy" element={<Policy />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Box>
          <Footer />
        </BrowserRouter>
        <Box id="loader" style={{ display: "none" }}>
          <Box className="loader"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
