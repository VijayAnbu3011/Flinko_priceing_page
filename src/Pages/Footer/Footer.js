import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assests/logo.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  const navigate = useNavigate();

  return (
    // <Grid container className=" px-2 py-4" borderTop={"1px solid #D3D3D3"}>
    //   <Grid item lg={4} md={4} sm={4} xs={12}>
    //     <Grid
    //       container
    //       item
    //       className="d-flex justify-content-center justify-content-xs-center align-items-center"
    //     >
    //       <Grid item>
    //         <img
    //           src={Logo}
    //           alt="logo"
    //           width={150}
    //           onClick={() => navigate("/")}
    //           style={{ cursor: "pointer" }}
    //         />
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid item lg={2} md={2} sm={2} xs={12}>
    //     <Grid
    //       container
    //       item
    //       className="d-flex justify-content-center  align-items-center "
    //     >
    //       <Grid item>
    //         <Typography
    //           className="d-flex flex-row me-3 py-2  text-dark text-decoration-none cursor-pointer"
    //           onClick={() => navigate("/weOffer")}
    //         >
    //           We Offer{" "}
    //         </Typography>
    //         <Typography
    //           className="me-3 py-2 text-dark  text-decoration-none cursor-pointer"
    //           onClick={() => navigate("/pricing")}
    //         >
    //           Pricing
    //         </Typography>
    //         <Typography
    //           className="me-3 py-2  text-dark text-decoration-none cursor-pointer"
    //           onClick={() => navigate("/aboutUs")}
    //         >
    //           About Us
    //         </Typography>
    //         <Typography
    //           className="me-3 py-2  text-dark text-decoration-none cursor-pointer"
    //           onClick={() => navigate("/contactUs")}
    //         >
    //           Contact Us
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //   <Grid item lg={6} md={6} sm={6} xs={12}>
    //     <Grid
    //       container
    //       item
    //       className="d-flex justify-content-start align-items-center"
    //     >
    //       <Grid item lg={12} sm={12} className="d-flex p-2">
    //         <Typography>
    //           <LocationOnIcon />
    //         </Typography>
    //         <Typography className="d-flex ps-1">
    //           c29,Sector 6,Noida 203101,India
    //         </Typography>
    //       </Grid>
    //       <Grid item lg={12} sm={12} className="d-flex px-3">
    //         <Typography className="ps-4">
    //           +91 120-4546011 | +91 120-4107048
    //         </Typography>
    //       </Grid>
    //       <Grid item lg={12} sm={12} className="d-flex p-2">
    //         <Typography>
    //           <LocationOnIcon />
    //         </Typography>
    //         <Typography className="d-flex ps-1">
    //           3422 Old Capitol Trail #136, Wilmington, DE 19808, USA
    //         </Typography>
    //       </Grid>
    //       <Grid item lg={12} sm={12} className="d-flex px-3">
    //         <Typography className="ps-4">+1 323 540 3045</Typography>
    //       </Grid>
    //       <Grid item lg={12} sm={12} className="d-flex p-2">
    //         <Typography>
    //           <LocationOnIcon />
    //         </Typography>
    //         <Typography className="d-flex ps-1">
    //           Block EP, Y23, Sec-5, Salt Lake City, Kolkata-700091, India.
    //         </Typography>
    //       </Grid>
    //       <Grid item lg={12} sm={12} className="d-flex px-3">
    //         <Typography className="ps-4">+91 33 46035883</Typography>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>
    <Grid container className="px-2 py-1" bgcolor="#212529">
      <Grid
        item
        lg={6}
        md={6}
        sm={12}
        className="d-flex px-3"
        justifyContent="start"
      >
        <Typography className="p-2 " color="#afb1b4">
          Copyright © 2022 Flinko. All Rights Reserved.
          {/* Technologies Private Limited All rights reserved */}
        </Typography>
      </Grid>
      <Grid item lg={6} md={6} sm={12} className="d-flex px-3">
        <Grid container>
          <Grid item lg={6} className="d-flex" justifyContent="end">
            <Typography className="p-2" color="#afb1b4">
              Terms Of Service
            </Typography>
          </Grid>
          <Grid item lg={6} className="d-flex" justifyContent="center">
            <Typography className="p-2" color="#afb1b4">
              Privacy Policy
            </Typography>
          </Grid>
          {/* <Grid item lg={2.5}>
            <Typography className="p-2" color="#afb1b4">
              Security Policy
            </Typography>
          </Grid>
          <Grid item lg={3.5}>
            <Typography className="p-2" color="#afb1b4">
              GDPR compliance
            </Typography>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
