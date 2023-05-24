import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Talentacquisition from "../../assests/Talentacquisition.jpg";
import Lifecycle from "../../assests/Lifecycle.png";
import Attendance from "../../assests/Attendance.jpg";
import Fun from "../../assests/Fun.jpg";
import Performancemanagement from "../../assests/Performancemanagement.png";
import PayrollandCompliance from "../../assests/PayrollandCompliance.webp";

function WeOffer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <Grid
        container
        className="d-flex flex-row px-2 py-5 justify-content-center align-items-center"
        width="100%"
        borderBottom={1}
        borderColor="greenyellow"
      >
        <Grid
          item
          lg={6}
          sm={12}
          className="d-flex flex-row"
          justifyContent="center"
        >
          <img
            src={Talentacquisition}
            alt="logo"
            width={"80%"}
            height={"80%"}
          />
        </Grid>
        <Grid item lg={6} sm={12} className="p-5">
          <Typography className="fs-22 fw-bold">Talent Acquisition </Typography>
          <Typography className="fs-18 ps-3">
            - hire the right candidate for the right job
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        className="d-flex flex-row py-5 justify-content-center align-items-center"
        borderBottom={1}
        borderColor="greenyellow"
      >
        <Grid
          item
          lg={5}
          sm={12}
          //   width="50%"
          className="d-flex flex-column m-5 ps-3"
          justifyContent="flex-start"
          //   alignItems="flex-end"
        >
          <Typography
            className="fs-22 fw-bold d-flex  p-3 "
            justifyContent="flex-start"
            alignItems="center"
          >
            Employee lifecycle{" "}
          </Typography>
          <Typography
            className="fs-18 ps-4 d-flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            - from hiring to retiring, we make everything easier
          </Typography>
        </Grid>
        <Grid
          item
          lg={6}
          sm={12}
          className="d-flex flex-row"
          justifyContent="center"
        >
          <img src={Lifecycle} alt="logo" width={"80%"} height={"80%"} />
        </Grid>
      </Grid>
      <Grid
        container
        className="d-flex flex-row py-5 justify-content-center align-items-center"
        borderBottom={1}
        borderColor="greenyellow"
      >
        <Grid
          item
          lg={6}
          sm={12}
          className="d-flex flex-row"
          justifyContent="center"
        >
          <img src={Fun} alt="logo" width={"80%"} height={"80%"} />
        </Grid>
        <Grid item lg={6} sm={12} className="ps-5">
          <Typography className="fs-22 fw-bold">Fun & Frolic </Typography>
          <Typography className="fs-18 ps-3">
            - we help you track all the employee events
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        className="d-flex flex-row py-5 justify-content-center align-items-center"
        borderBottom={1}
        borderColor="greenyellow"
      >
        <Grid
          item
          lg={5}
          sm={12}
          className="d-flex flex-column m-5 ps-3"
          justifyContent="flex-start"
          // alignItems="flex-end"
        >
          <Typography
            className="fs-22 fw-bold d-flex p-3"
            justifyContent="flex-start"
            alignItems="center"
          >
            Attendance Management{" "}
          </Typography>
          <Typography
            className="fs-18 ps-4 d-flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            - manage work hours and leaves more efficiently
          </Typography>
        </Grid>
        <Grid
          item
          lg={6}
          sm={12}
          className="d-flex flex-row"
          justifyContent="center"
        >
          <img src={Attendance} alt="logo" width={"80%"} height={"80%"} />
        </Grid>
      </Grid>
      <Grid
        container
        className="d-flex flex-row py-5 justify-content-center align-items-center"
        borderBottom={1}
        borderColor="greenyellow"
      >
        <Grid
          item
          lg={6}
          sm={12}
          className="d-flex flex-row"
          justifyContent="center"
        >
          <img
            src={PayrollandCompliance}
            alt="logo"
            width={"60%"}
            height={"60%"}
          />
        </Grid>
        <Grid item lg={6} sm={12} className="ps-5">
          <Typography className="fs-22 fw-bold">
            Payroll & Compliance{" "}
          </Typography>
          <Typography className="fs-18 ps-3">
            - Be on time with salary disbursement and compliance
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        className="d-flex flex-row py-5 justify-content-center align-items-center"
        // borderBottom={1}
        // borderColor="greenyellow"
      >
        <Grid
          item
          lg={5}
          sm={12}
          className="d-flex flex-column m-5 ps-3"
          justifyContent="flex-start"
        >
          <Typography
            className="fs-22 fw-bold d-flex p-3"
            justifyContent="flex-start"
            alignItems="center"
          >
            Performance and Perks{" "}
          </Typography>
          <Typography
            className="fs-18 ps-4 d-flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            - review employee performances, increments and PIP
          </Typography>
        </Grid>
        <Grid
          item
          lg={6}
          sm={12}
          className="d-flex flex-row"
          justifyContent="center"
        >
          <img
            src={Performancemanagement}
            alt="logo"
            width={"60%"}
            height={"60%"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default WeOffer;
