import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import contact from "../../assests/contact us.png";

function AboutUs() {
  return (
    <Box className="d-flex" height={"80%"}>
      <Grid container>
        <Grid
          item
          lg={12}
          sm={12}
          xs={12}
          className="d-flex mt-2"
          justifyContent="center"
          alignItems="center"
          height={"10%"}
        >
          <Typography className="d-flex fs-30 fw-700">Our Team</Typography>
        </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          xs={12}
          className="d-flex "
          justifyContent="center"
          alignItems="center"
        >
          <Typography className="d-flex fs-30 fw-400 px-3">
            The strength of the team is each individual member
          </Typography>
        </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          xs={12}
          className="d-flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography className="d-flex fs-30 fw-400 px-3">
            The strength of each member is the team
          </Typography>
        </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          xs={12}
          className="d-flex flex-row "
          justifyContent="center"
          alignItems="center"
          height={"70%"}
        >
          <img src={contact} width={"30%"} height={"80%"} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutUs;
