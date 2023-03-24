import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonComponent from "../../components/atoms/ButtonComponent";
import InputBoxComponent from "../../components/atoms/InputBoxComponent";

function SetPassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        top: "180px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxHeight: "content",
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
          />
          <InputBoxComponent
            textLabel="Confirm Password"
            placeholder="******"
            type="password"
            iconName="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
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
            // onBtnClick={handleSubmit}
          ></ButtonComponent>
        </Box>
      </Paper>
    </Grid>
  );
}

export default SetPassword;
