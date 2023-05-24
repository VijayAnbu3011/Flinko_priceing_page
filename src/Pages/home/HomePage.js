import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ButtonComponent from "../../components/atoms/ButtonComponent";
import HumanResourse from "../../assests/hr.jpg";
import sales from "../../assests/Business.jpg";
import Hiring from "../../assests/Hiring.jpg";
import Profile from "../../assests/Profile.jpg";
import IT from "../../assests/IT.jpg";
import Account from "../../assests/Account.jpg";
import ProjectManagement from "../../assests/Project Management.jpg";
import EmployeeManagement from "../../assests/EmployeeManagement.jpg";
import ReportingManager from "../../assests/Reporting Manager.jpg";
import Admin from "../../assests/Admin.jpg";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box className="d-md-flex flex-column m-5 p-1">
      <Grid container item lg={12} sm={12} xs={12}>
        <Grid item lg={7} sm={12} xs={12}>
          <Typography className="d-flex fs-30 fw-700">
            You need this to build
          </Typography>

          <Grid item lg={8} sm={12} xs={12}>
            <Typography className="d-flex fs-30 fw-700">
              your dream company
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
              Flinko is your own platform to minimize your effort and get their
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
            <Grid container item lg={12} sm={12} xs={12}>
              <Grid
                item
                lg={6}
                sm={12}
                xs={12}
                className="d-flex justify-content-lg-start justify-content-center "
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
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} sm={12} xs={12} className="d-flex ">
          <img src={Profile} alt="" width={"100%"} height={"350px"} />
        </Grid>
      </Grid>
      <Grid
        container
        item
        lg={12}
        className="d-flex my-4"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid
          item
          lg={3}
          md={5}
          sm={12}
          xs={12}
          border={1}
          borderColor={"#D3D3D3"}
          className="d-flex flex-column m-3 p-3 justify-content-center align-items-center"
          borderRadius={"5px"}
          boxShadow="rgb(204, 204, 204) 0px 1px 5px"
        >
          <img src={Admin} width="100%" height="250px" alt="Admin" />
          <Typography className="d-flex fs-26 fw-500 justify-content-center">
            Admin{" "}
          </Typography>
        </Grid>
        <Grid
          item
          lg={3}
          md={5}
          sm={12}
          xs={12}
          border={1}
          borderColor={"#D3D3D3"}
          className="d-flex flex-column m-3 p-3 justify-content-center align-items-center"
          borderRadius={"5px"}
          boxShadow="rgb(204, 204, 204) 0px 1px 5px"
        >
          <img
            src={HumanResourse}
            width="100%"
            height="250px"
            alt=" Human Resourse"
          />
          <Typography className="d-flex fs-26 fw-500 justify-content-center">
            Human Resourse{" "}
          </Typography>
        </Grid>
        <Grid
          item
          lg={3}
          md={5}
          sm={12}
          xs={12}
          border={1}
          borderColor={"#D3D3D3"}
          className="d-flex flex-column m-3 p-3 justify-content-center align-items-center"
          borderRadius={"5px"}
          boxShadow="rgb(204, 204, 204) 0px 1px 5px"
        >
          <img
            src={Hiring}
            width="100%"
            height="250px"
            alt="Admin Department"
          />
          <Typography className="d-flex fs-26 fw-500 justify-content-center">
            Admin Department{" "}
          </Typography>
        </Grid>
        <Grid
          item
          lg={3}
          md={5}
          sm={12}
          xs={12}
          border={1}
          borderColor={"#D3D3D3"}
          className="d-flex flex-column m-3 p-3 justify-content-center align-items-center"
          borderRadius={"5px"}
          boxShadow="rgb(204, 204, 204) 0px 1px 5px"
        >
          <img src={IT} width="100%" height="250px" alt="IT Department" />
          <Typography className="d-flex fs-26 fw-500 justify-content-center">
            IT Department{" "}
          </Typography>
        </Grid>
        <Grid
          item
          lg={3}
          md={5}
          sm={12}
          xs={12}
          border={1}
          borderColor={"#D3D3D3"}
          className="d-flex flex-column m-3 p-3 justify-content-center align-items-center"
          borderRadius={"5px"}
          boxShadow="rgb(204, 204, 204) 0px 1px 5px"
        >
          <img src={Account} width="100%" height="250px" alt="Account" />
          <Typography className="d-flex fs-26 fw-500 justify-content-center">
            Account{" "}
          </Typography>
        </Grid>
        <Grid
          item
          lg={3}
          md={5}
          sm={12}
          xs={12}
          border={1}
          borderColor={"#D3D3D3"}
          className="d-flex flex-column m-3 p-3 justify-content-center align-items-center"
          borderRadius={"5px"}
          boxShadow="rgb(204, 204, 204) 0px 1px 5px"
        >
          <img
            src={ProjectManagement}
            width="100%"
            height="250px"
            alt="Project Management"
          />
          <Typography className="d-flex fs-26 fw-500 justify-content-center">
            Project Management{" "}
          </Typography>
        </Grid>
        <Grid
          item
          lg={3}
          md={5}
          sm={12}
          xs={12}
          border={1}
          borderColor={"#D3D3D3"}
          className="d-flex flex-column m-3 p-3 justify-content-center align-items-center"
          borderRadius={"5px"}
          boxShadow="rgb(204, 204, 204) 0px 1px 5px"
        >
          <img
            src={EmployeeManagement}
            width="100%"
            height="250px"
            alt="Employee Management"
          />
          <Typography className="d-flex fs-26 fw-500 justify-content-center">
            Employee Management{" "}
          </Typography>
        </Grid>
        <Grid
          item
          lg={3}
          md={5}
          sm={12}
          xs={12}
          border={1}
          borderColor={"#D3D3D3"}
          className="d-flex flex-column m-3 p-3 justify-content-center align-items-center"
          borderRadius={"5px"}
          boxShadow="rgb(204, 204, 204) 0px 1px 5px"
        >
          <img
            src={ReportingManager}
            width="100%"
            height="250px"
            alt="Reporting Manager"
          />
          <Typography className="d-flex fs-26 fw-500 justify-content-center">
            Reporting Manager{" "}
          </Typography>
        </Grid>
        <Grid
          item
          lg={3}
          md={5}
          sm={12}
          xs={12}
          border={1}
          borderColor={"#D3D3D3"}
          className="d-flex flex-column m-3 p-3 justify-content-center align-items-center"
          borderRadius={"5px"}
          boxShadow="rgb(204, 204, 204) 0px 1px 5px"
        >
          <img src={sales} width="100%" height="250px" alt="Admin" />
          <Typography className="d-flex fs-26 fw-500 justify-content-center">
            Sales{" "}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
