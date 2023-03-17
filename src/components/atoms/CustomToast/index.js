import { Alert } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
}));

const CustomToast = ({ children, appearance }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert severity={appearance} variant="filled">
        <strong>{children}</strong>
      </Alert>
    </div>
  );
};

export default CustomToast;
