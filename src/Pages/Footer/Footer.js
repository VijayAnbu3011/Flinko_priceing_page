import { Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <Grid container className="px-2 pe-0 py-1" bgcolor="#212529">
      <Grid
        item
        lg={6}
        md={6}
        sm={12}
        className="d-flex ps-3"
        justifyContent="start"
      >
        <Typography className="p-2 " color="#afb1b4">
          Copyright © 2023 Flinko.app . All Rights Reserved.
        </Typography>
      </Grid>
      <Grid item lg={6} md={6} sm={12} className="d-flex justify-content-end">
        <Grid item lg={6} className="d-flex" justifyContent="center">
          <Typography
            className="p-2 pe-0"
            color="#afb1b4"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/privacyPolicy")}
          >
            Privacy Policy
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
