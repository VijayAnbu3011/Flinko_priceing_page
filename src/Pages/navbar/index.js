import React from "react";
import { Box } from "@mui/material";
import Logo from "../../assests/logo.svg";
function Navbar() {
  return (
    <>
      <Box className="d-flex flex-column flex-md-row mb-4 py-1 border-bottom">
        <img src={Logo} alt="logo" width={100} />
        {/* <Box className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <Typography className="me-3 py-2 text-dark text-decoration-none">
            Features
          </Typography>
          <Typography className="me-3 py-2 text-dark text-decoration-none">
            Enterprise
          </Typography>
          <Typography className="me-3 py-2 text-dark text-decoration-none">
            Support
          </Typography>
          <Typography className="py-2 text-dark text-decoration-none">
            Pricing
          </Typography>
        </Box> */}
      </Box>
    </>
  );
}

export default Navbar;
