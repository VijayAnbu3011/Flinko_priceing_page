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
        <Grid item lg={6} sm={12} className="p-4">
          <Typography className="fs-22 fw-500">Talent Acquisition </Typography>
          <Typography className="fs-18 text-muted ps-3">
            - Hire the right candidate for the right job
          </Typography>
          <Typography className="fs-18 text-muted ps-3">
            - Simple Hiring Processes
          </Typography>
          <Typography className="fs-18 text-muted ps-3">
            - Handle your recruitment process with comfort, from sourcing to
            hiring
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
        >
          <Typography className="fs-22 fw-500">Employee Lifecycle </Typography>
          <Typography className="fs-18 text-muted ps-3">
            - From hiring to retiring, we make everything easier
          </Typography>
          <Typography className="fs-18 text-muted ps-3">
            - Human Resources in Modern Businesses
          </Typography>
          <Typography className="fs-18 text-muted ps-3">
            - All-in-one solution for recruitment, appraisal, expenses, leaves,
            attendance, and so forth
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
          <Typography className="fs-22 fw-500">Fun & Frolic </Typography>
          <Typography className="fs-18 text-muted ps-3">
            - We help you track all the employee events
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        className="d-flex flex-row py-5 justify-content-center align-items-center"
        borderBottom={1}
        borderColor="greenyellow"
      >
        <Grid item lg={5} sm={12} className="m-5 ps-3">
          <Typography className="fs-22 fw-500">
            Attendance Management{" "}
          </Typography>
          <Typography className="fs-18 text-muted ps-3">
            - Manage work hours and leaves more efficiently
          </Typography>
          <Typography className="fs-18 text-muted ps-3">
            - Track all of your employees' holidays.
          </Typography>
          <Typography className="fs-18 text-muted ps-3">
            - Keep note of how many vacation days each employee takes. Employees
            enter their requests, and management accept and validate them in a
            matter of seconds. Each employee's agenda is updated accordingly.
          </Typography>
          <Typography className="fs-18 text-muted ps-3">
            - Managers may see their entire team's absences in one complete
            view, allowing them to keep the team well-organized and forecast the
            allocation of responsibilities during their colleagues' absences.
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
          <Typography className="fs-22 fw-500">
            Payroll & Compliance{" "}
          </Typography>
          <Typography className="fs-18 text-muted ps-3">
            - Be on time with salary disbursement and compliance
          </Typography>
          <Typography className="fs-18 text-muted ps-3">
            - Payroll includes everything you need to manage payroll for your
            company. You may assign user roles and rights, delegate
            responsibilities, manage approvals, and construct your organisation
            exactly how you want it
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        className="d-flex flex-row py-5 justify-content-center align-items-center"
      >
        <Grid
          item
          lg={5}
          sm={12}
          className="d-flex flex-column m-5 ps-3"
          justifyContent="flex-start"
        >
          <Typography className="fs-22 fw-500">
            Performance and Perks{" "}
          </Typography>
          <Typography className="fs-18 text-muted ps-3">
            - Review employee performances, increments and PIP
          </Typography>
          <Typography className="fs-18 text-muted ps-3">
            - By conducting routine performance reviews of the employees, you
            may keep the incentive process in your business going. Whether it's
            a small firm or a major corporation, regularly evaluate your human
            resources to benefit both your employees and the organisation
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
