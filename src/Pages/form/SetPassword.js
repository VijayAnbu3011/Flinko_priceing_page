import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonComponent from "../../components/atoms/ButtonComponent";
import InputBoxComponent from "../../components/atoms/InputBoxComponent";
import { useToasts } from "react-toast-notifications";
import { useLocation, useNavigate } from "react-router-dom";
import { completeTheRegistration } from "../../services/pricing";

let errObj = {
  password: "",
  confirmPassword: "",
};

function SetPassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const { state } = useLocation();
  const [error, setError] = useState(errObj);
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,16}$/;

  const handleError = () => {
    errObj = {
      password: "",
      confirmPassword: "",
    };
    let formError = false;
    if (formData.password === "") {
      formError = true;
      errObj.password = "This field is required";
    }

    if (formData.confirmPassword === "") {
      formError = true;
      errObj.confirmPassword = "This field is required";
    }

    if (formData.password !== "" && !passwordRegex.test(formData.password)) {
      formError = true;
      errObj.password =
        "Password should contain minimum 8 and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    }

    if (
      formData.password !== formData.confirmPassword &&
      formData.confirmPassword !== ""
    ) {
      formError = true;
      errObj.confirmPassword = "Password does not match";
    }

    setError(errObj);

    return formError;
  };
  const completeRegistrationFully = async () => {
    const err = handleError();
    if (!err) {
      const payload = {
        employeeId: state?.employeeId,
        newPassword: formData.password,
        confirmPassword: formData.confirmPassword,
      };
      const { data, errRes } = await completeTheRegistration(payload);
      if (data) {
        if (data.error) {
          addToast(data.message, { appearance: "error" });
        } else {
          localStorage.setItem("companyId", data?.data?.companyId);
          addToast(data.message, { appearance: "success" });
          navigate("/pricing/checkout");
        }
      } else {
        addToast(errRes.message, { appearance: "error" });
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      className="my-5"
    >
      <Paper
        elevation={3}
        sx={{
          maxHeight: "content",
          maxWidth: "30%",
          display: "flex",
          flexDirection: "column",
          padding: "15px",
        }}
        className="py-3"
      >
        <Typography
          variant="h4"
          color={"#1181B2"}
          className="px-4 "
          sx={{ fontWeight: "bold" }}
        >
          Set New Password
        </Typography>
        <Box className="mt-2">
          <InputBoxComponent
            textLabel="Enter Password"
            placeholder="******"
            type="password"
            iconName="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            errorText={error.password}
          />
          <InputBoxComponent
            textLabel="Confirm Password"
            placeholder="******"
            type="password"
            iconName="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            errorText={error.confirmPassword}
          />
        </Box>
        <Box
          sx={{
            paddingTop: "12px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <ButtonComponent
            label="SUBMIT"
            fullWidth
            onBtnClick={completeRegistrationFully}
          ></ButtonComponent>
        </Box>
      </Paper>
    </Grid>
  );
}

export default SetPassword;
