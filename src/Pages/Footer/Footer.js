import { Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
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
          Copyright © 2023 Flinko.app . All Rights Reserved.
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
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
