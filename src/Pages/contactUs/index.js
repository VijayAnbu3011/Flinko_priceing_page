import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import InputBoxComponent from "../../components/atoms/InputBoxComponent";
import ButtonComponent from "../../components/atoms/ButtonComponent";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SubmitContactDetails } from "../../services/pricing";
import { useToasts } from "react-toast-notifications";

function ContactUs() {
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
      obj.employeeName = "This Fiels is Required";
      result = true;
    } else {
      obj.employeeName = "";
      result = false;
    }
    if (contactState.mobileNo === "") {
      obj.mobileNo = "This Fiels is Required";
      result = true;
    } else {
      if (/^\d{10}$/.test(contactState.mobileNo)) {
        obj.mobileNo = "";
        result = false;
      } else {
        obj.mobileNo = "Enter Valid Mobile Number";
        result = true;
      }
    }
    if (contactState.companyName === "") {
      obj.companyName = "This Fiels is Required";
      result = true;
    } else {
      obj.companyName = "";
      result = false;
    }
    if (contactState.email === "") {
      obj.email = "This Fiels is Required";
      result = true;
    } else {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactState.email)
      ) {
        obj.email = "";
        result = false;
      } else {
        obj.email = "Enter Valid Email Id";
        result = true;
      }
    }
    if (contactState.message === "") {
      obj.message = "This Fiels is Required";
      result = true;
    } else {
      obj.message = "";
      result = true;
    }
    setContactStateErr(obj);
    obj = {};
    return result;
  };
  const { addToast } = useToasts();

  const handleChange = (e) => {
    setContactState({
      ...contactState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    let payload = contactState;
    let valid = validate();
    console.log(valid, "valid");
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
    <Box width="100%" className="d-flex">
      <Grid container lg={12} className="d-flex m-1 p-3">
        <Grid item lg={12}>
          <Typography fontSize={30} fontWeight="bold" className="ps-3">
            Contact
          </Typography>
        </Grid>
        <Grid item lg={6} sm={12} className="d-flex flex-column p-3">
          <Grid
            container
            lg={12}
            sm={12}
            className="d-flex my-2 p-3"
            border={1}
          >
            <Grid item lg={12} sm={12}>
              <Typography className="d-flex py-1  fs-24 fw-400">
                Reach out to us with your details and we will connect with you!
              </Typography>
            </Grid>
            <Grid item lg={12} sm={12} xs={12}>
              <InputBoxComponent
                name="employeeName"
                value={contactState.employeeName}
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Name"
                errorText={contactStateErr.employeeName}
              />
            </Grid>
            <Grid item lg={12} sm={12} xs={12}>
              <InputBoxComponent
                name="email"
                value={contactState.email}
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="E-mail"
                errorText={contactStateErr.email}
              />
            </Grid>
            <Grid container justifyContent="space-between">
              <Grid item lg={5.8} sm={12} xs={12}>
                <InputBoxComponent
                  name="mobileNo"
                  value={contactState.mobileNo}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="Phone"
                  errorText={contactStateErr.mobileNo}
                />
              </Grid>
              <Grid item lg={5.8} sm={12} xs={12}>
                <InputBoxComponent
                  name="companyName"
                  value={contactState.companyName}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="Company Name"
                  errorText={contactStateErr?.companyName ?? ""}
                />
              </Grid>
            </Grid>
            <Grid item lg={12} sm={12} xs={12}>
              <InputBoxComponent
                name="message"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={contactState.message}
                errorText={contactStateErr.message}
                multiline={true}
                size="large"
                placeholder="Comments"
                rows={5}
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
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} sm={12}>
          <Grid container lg={12} sm={12} className="d-flex flex-column p-3">
            <Grid item lg={12} sm={12}>
              <Grid container className="d-flex my-2 p-3" border={1}>
                <Grid item lg={12} sm={12} className="d-flex p-2">
                  <Typography>
                    <EmailIcon />
                  </Typography>
                  <Typography className="d-flex ps-1">
                    flinko.app@gmail.com
                  </Typography>
                </Grid>
                <Grid item lg={12} sm={12} className="d-flex p-2">
                  <Typography>
                    <EmailIcon />
                  </Typography>
                  <Typography className="d-flex ps-1">
                    flinko.app@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={12}>
              <Grid container className="d-flex my-2 p-3" border={1}>
                <Grid item lg={12} sm={12} className="d-flex p-2">
                  <Typography>
                    <LocationOnIcon />
                  </Typography>
                  <Typography className="d-flex ps-1">
                    c29,Sector 6,Noida 203101,India
                  </Typography>
                </Grid>
                <Grid item lg={12} sm={12} className="d-flex px-3">
                  <Typography className="ps-4">
                    +91 120-4546011 | +91 120-4107048
                  </Typography>
                </Grid>
                <Grid item lg={12} sm={12} className="d-flex p-2">
                  <Typography>
                    <LocationOnIcon />
                  </Typography>
                  <Typography className="d-flex ps-1">
                    3422 Old Capitol Trail #136, Wilmington, DE 19808, USA
                  </Typography>
                </Grid>
                <Grid item lg={12} sm={12} className="d-flex px-3">
                  <Typography className="ps-4">+1 323 540 3045</Typography>
                </Grid>
                <Grid item lg={12} sm={12} className="d-flex p-2">
                  <Typography>
                    <LocationOnIcon />
                  </Typography>
                  <Typography className="d-flex ps-1">
                    Block EP, Y23, Sec-5, Salt Lake City, Kolkata-700091, India.
                  </Typography>
                </Grid>
                <Grid item lg={12} sm={12} className="d-flex px-3">
                  <Typography className="ps-4">+91 33 46035883</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactUs;