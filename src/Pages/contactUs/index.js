import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputBoxComponent from "../../components/atoms/InputBoxComponent";
import ButtonComponent from "../../components/atoms/ButtonComponent";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SubmitContactDetails } from "../../services/pricing";
import { useToasts } from "react-toast-notifications";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Contact from "../../assests/contactus.jpg";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [contactState, setContactState] = useState({
    employeeName: "",
    mobileNo: "",
    email: "",
    companyName: "",
    message: "",
  });
  const [contactStateErr, setContactStateErr] = useState({
    employeeName: "",
    mobileNo: "",
    email: "",
    companyName: "",
    message: "",
  });
  let validate = () => {
    let result = false;
    let obj = { ...contactStateErr };
    if (contactState.employeeName === "") {
      obj.employeeName = "This Field is Required";
      result = true;
    } else {
      obj.employeeName = "";
    }
    if (contactState.mobileNo === "") {
      obj.mobileNo = "This Field is Required";
      result = true;
    } else {
      if (/^\d{10}$/.test(contactState.mobileNo)) {
        obj.mobileNo = "";
      } else {
        obj.mobileNo = "Enter Valid Mobile Number";
        result = true;
      }
    }
    if (contactState.companyName === "") {
      obj.companyName = "This Field is Required";
      result = true;
    } else {
      obj.companyName = "";
    }
    if (contactState.email === "") {
      obj.email = "This Field is Required";
      result = true;
    } else {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactState.email)
      ) {
        obj.email = "";
      } else {
        obj.email = "Enter Valid Email Id";
        result = true;
      }
    }
    if (contactState.message === "") {
      obj.message = "This Field is Required";
      result = true;
    } else {
      obj.message = "";
    }
    setContactStateErr(obj);
    obj = {};
    return result;
  };
  const { addToast } = useToasts();

  const handleChange = e => {
    setContactState({
      ...contactState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    let payload = contactState;
    let valid = validate();
    if (!valid) {
      let { data, errRes } = await SubmitContactDetails(payload);
      if (data) {
        addToast(data.message, { appearance: "success" });
        setContactState({
          employeeName: "",
          mobileNo: "",
          email: "",
          companyName: "",
          message: "",
        });
      } else if (errRes) {
        addToast(errRes.message, { appearance: "error" });
      }
    }
  };
  return (
    <Box className="d-md-flex flex-column m-5 p-1">
      <Grid container item lg={12}>
        <Grid container item lg={12} sm={12} xs={12}>
          <Grid item lg={7} sm={12} xs={12}>
            <Grid item lg={8} sm={12} xs={12}>
              <Typography className="d-flex fs-30 fw-600">
                Contact Us
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
              <Typography className="fs-5 text-muted">
                Contact us to get information about anything related to
                Flinko.app, services, our company
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg={4} sm={12} xs={12} className="d-flex ">
            <img src={Contact} alt="" width={"100%"} height={"350px"} />
          </Grid>
        </Grid>
        <Grid
          item
          lg={12}
          border={1}
          borderColor={"#D3D3D3"}
          className="d-flex m-1"
          boxShadow="rgb(204, 204, 204) 0px 1px 5px"
          boxSizing="border-box"
        >
          <Grid container lg={5} md={5} sm={12} className="p-1">
            <Grid container bgcolor={"#1181b2"} borderRadius={"5px"}>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                className="d-flex flex-column ps-5 pt-5 justify-content-start align-items-start"
              >
                <Typography fontSize={22} fontWeight={"bold"} color={"white"}>
                  Contact Information
                </Typography>
                <Typography
                  fontSize={"15"}
                  fontWeight={"300"}
                  color={"white"}
                  className="my-3"
                >
                  Fill up the form and our team will get back to you.
                </Typography>
                <Typography className="d-flex ps-1 pt-5" color="white">
                  <LocalPhoneIcon sx={{ color: "white" }} />{" "}
                  <Typography className="ps-1">+91 0000000000</Typography>
                </Typography>
                <Typography className="d-flex ps-1 pt-4" color="white">
                  <EmailIcon sx={{ color: "white" }} />
                  <Typography className="ps-2">flinko.app@gmail.com</Typography>
                </Typography>
                <Typography className="d-flex ps-1 pt-4" color="white">
                  <LocationOnIcon sx={{ color: "white" }} />
                  <Typography className="ps-2">
                    C29, Sector 6, Noida 203101, India
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={7} md={7} sm={12} className="d-flex flex-column p-3">
            <Grid
              container
              item
              lg={12}
              sm={12}
              boxSizing="border-box"
              className="d-flex my-2 p-3 "
            >
              <Grid
                item
                lg={12}
                sm={12}
                xs={12}
                className="my-1"
                boxSizing="border-box"
              >
                <InputBoxComponent
                  textLabel="Name"
                  name="employeeName"
                  value={contactState.employeeName}
                  onChange={e => {
                    handleChange(e);
                  }}
                  placeholder="Enter Name"
                  errorText={contactStateErr.employeeName}
                  required
                />
              </Grid>
              <Grid item lg={12} sm={12} xs={12} className="my-2">
                <InputBoxComponent
                  textLabel="E-mail"
                  name="email"
                  value={contactState.email}
                  onChange={e => {
                    handleChange(e);
                  }}
                  placeholder="Enter E-mail ID"
                  errorText={contactStateErr.email}
                  required
                />
              </Grid>
              <Grid container justifyContent="space-between">
                <Grid item lg={5.8} sm={12} xs={12} className="my-2">
                  <InputBoxComponent
                    textLabel="Mobile No"
                    name="mobileNo"
                    value={contactState.mobileNo}
                    onChange={e => {
                      handleChange(e);
                    }}
                    placeholder="Enter Mobile Number"
                    errorText={contactStateErr.mobileNo}
                    required
                  />
                </Grid>
                <Grid item lg={5.8} sm={12} xs={12} className="my-2">
                  <InputBoxComponent
                    textLabel="Company Name"
                    name="companyName"
                    value={contactState.companyName}
                    onChange={e => {
                      handleChange(e);
                    }}
                    placeholder="Enter Company Name"
                    errorText={contactStateErr?.companyName ?? ""}
                    required
                  />
                </Grid>
              </Grid>
              <Grid item lg={12} sm={12} xs={12} className="my-2">
                <InputBoxComponent
                  textLabel="Comments"
                  name="message"
                  onChange={e => {
                    handleChange(e);
                  }}
                  value={contactState.message}
                  errorText={contactStateErr.message}
                  multiline={true}
                  size="large"
                  placeholder="Enter Comments"
                  rows={5}
                  required
                />
              </Grid>
              <Grid
                item
                lg={12}
                sm={12}
                xs={12}
                className="d-flex py-3"
                justifyContent="flex-end"
              >
                <ButtonComponent
                  label="Submit"
                  onBtnClick={() => {
                    handleSubmit();
                  }}
                  muiProps="px-5"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactUs;
