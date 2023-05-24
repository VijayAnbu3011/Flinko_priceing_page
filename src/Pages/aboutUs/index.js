import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import contact from "../../assests/contact us.jpg";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box className="d-flex">
      <Grid container item lg={12} sm={12} xs={12}>
        <Grid
          item
          lg={12}
          sm={12}
          xs={12}
          className="d-flex mt-2"
          justifyContent="center"
          alignItems="center"
          // height={"10%"}
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
            The strength of the team is each individual member.
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
            The strength of each member is the team.
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
          // height={"70%"}
        >
          <img src={contact} width={"50%"} height={"100%"} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutUs;
