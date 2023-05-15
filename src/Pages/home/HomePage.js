import { Grid, Typography } from "@mui/material";
import React from "react";
import ButtonComponent from "../../components/atoms/ButtonComponent";
import CalIcon from "../../assests/CalIcon.png";
import analytics from "../../assests/analytics.png";
import coding from "../../assests/coding.png";
import businessman from "../../assests/businessman.png";
import hand from "../../assests/hand.png";
import team from "../../assests/team.png";
import profits from "../../assests/profits.png";

function HomePage() {
  return (
    <Grid className="d-md-flex m-5 p-1">
      <Grid container lg={8} sm={12} xs={12}>
        <Grid item lg={12} sm={12} xs={12}>
          <Typography className="d-flex fs-30 fw-700">
            You need this to build
          </Typography>

          <Grid item lg={8} sm={12} xs={12}>
            <Typography className="d-flex fs-30 fw-700">
              a dream company
            </Typography>
          </Grid>
          <Grid
            item
            lg={8}
            sm={12}
            xs={12}
            className="d-flex pt-5"
            justifyContent="flex-start"
            alignItems="flex-end"
          >
            <Typography className="d-flex fs-20 fw-500">
              Flinko is your own plateform to minimize your effort and get their
              desire result with accuracy
            </Typography>
          </Grid>
          <Grid
            item
            lg={12}
            sm={12}
            xs={12}
            className="d-flex pt-5"
            justifyContent="center"
            alignItems="flex-end"
          >
            <Grid container lg={12} sm={12} xs={12}>
              <Grid
                item
                lg={6}
                sm={12}
                xs={12}
                className="d-flex justify-content-lg-start justify-content-cent er "
                height="10%"
              >
                <a
                  href="http://10.10.20.13:3300/auth/register"
                  className="text-decoration-none"
                >
                  <ButtonComponent
                    label="Get Free Trail"
                    size="large"
                    borderRadius="8px"
                  />
                </a>
              </Grid>
              <Grid
                item
                lg={6}
                sm={12}
                xs={12}
                className="d-flex flex-column pt-3  justify-content-center align-items-center"
              >
                <img
                  src={businessman}
                  alt="Icon"
                  width={"30%"}
                  height={"90%"}
                />
                <Typography className="ps-4 fs-24 fw-700">Admin</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container lg={10} sm={12} xs={12}>
            <Grid
              item
              lg={6}
              sm={12}
              xs={12}
              className="pt-5 d-flex flex-column justify-content-lg-start justify-content-center align-items-center"
            >
              <img src={profits} alt="Icon" width={"30%"} height={"70%"} />
              <Typography className="ps-4 fs-24 fw-700">Sales</Typography>
            </Grid>
            <Grid
              item
              lg={6}
              sm={12}
              xs={12}
              className="d-flex flex-column pt-5 justify-content-lg-start justify-content-center align-items-center"
            >
              <img src={team} alt="Icon" width={"30%"} height={"70%"} />
              <Typography className="ps-4 fs-24 fw-700">HR</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container lg={4} sm={12} xs={12}>
        <Grid
          item
          lg={12}
          sm={12}
          xs={12}
          className="d-flex justify-content-lg-end justify-content-center align-items-end pt-4"
          height={"30%"}
        >
          <img src={CalIcon} alt="Icon" width={"30%"} height={"70%"} />
        </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          xs={12}
          className="d-flex justify-content-lg-end justify-content-center "
        >
          <Typography className="pe-3 fs-24 fw-700">Accounts</Typography>
        </Grid>
        <Grid
          item
          lg={6}
          sm={12}
          xs={12}
          className="d-flex flex-column justify-content-lg-start justify-content-center align-items-center"
          height={"20%"}
        >
          <img src={hand} alt="Icon" width={"50%"} height={"80%"} />
          <Typography className=" fs-24 fw-700">Payroll</Typography>
        </Grid>
        <Grid
          item
          lg={6}
          sm={12}
          xs={12}
          className="d-flex flex-column justify-content-lg-center pt-5 justify-content-center align-items-center"
          height={"40%"}
        >
          <img src={analytics} alt="Icon" width={"50%"} height={"80%"} />
          <Typography className=" fs-24 fw-700">Analystic</Typography>
        </Grid>
        <Grid
          item
          lg={12}
          sm={12}
          xs={12}
          className="d-flex flex-column justify-content-lg-start pt-5 justify-content-center align-items-center"
          height={"30%"}
        >
          <img src={coding} alt="Icon" width={"30%"} height={"70%"} />
          <Typography className="d-flex justify-content-start ps-1 fs-24 fw-700">
            IT
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
