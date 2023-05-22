import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import ButtonComponent from "../../components/atoms/ButtonComponent";
import OtpBoxes from "../../components/molecules/OtpBoxes";
import { resendOtpForRegister, verifyOtp } from "../../services/pricing";
let clearIntervalHelper = "";
function OptPage() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [thirdNumber, setThirdNumber] = useState("");
  const [fourthNumber, setFourthNumber] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const { addToast } = useToasts();
  const [otpError, setOtpError] = useState("");

  const handleError = () => {
    let otpErr = "";
    if (
      firstNumber === "" ||
      secondNumber === "" ||
      thirdNumber === "" ||
      fourthNumber === ""
    ) {
      otpErr = "Invalid otp";
      setOtpError(otpErr);
    }
    return otpErr;
  };
  const verifyTheOtp = async () => {
    const err = handleError();
    if (!err) {
      const paylaod = {
        employeeId: state?.employeeId,
        otp: `${firstNumber}${secondNumber}${thirdNumber}${fourthNumber}`,
      };

      const { data, errRes } = await verifyOtp(paylaod);
      if (data) {
        if (data.error) {
          addToast(data.message, { appearance: "error" });
        } else {
          addToast(data.message, { appearance: "success" });
          navigate("/pricing/setpassword", {
            state: {
              employeeId: state?.employeeId,
            },
          });
        }
      } else {
        addToast(errRes?.message, { appearance: "error" });
      }
    }
  };
  const [timer, setTimer] = useState();
  const [timeExpired, setTimeExpired] = useState(false);

  const showOnTheTimer = (timeLeft) => {
    if (timeLeft <= 0) {
      return `${0}${0}:${0}${0}`;
    } else if (timeLeft < 10) return `${0}${0}:${0}${timeLeft}`;
    else if (timeLeft >= 10 && timeLeft < 60) {
      const remainder = timeLeft % 10;
      const quotient = Math.floor(timeLeft / 10);
      return `${0}${0}:${quotient}${remainder}`;
    } else if (timeLeft >= 60) {
      const somequotient = Math.floor(timeLeft / 60);
      const someremainder = timeLeft % 60;
      if (somequotient < 10 && someremainder < 10) {
        return `${0}${somequotient}:${0}${someremainder}`;
      } else if (somequotient >= 10 && someremainder < 10) {
        const quotienQuotient = Math.floor(somequotient / 10);
        const quotientRemainder = somequotient % 10;
        return `${quotienQuotient}${quotientRemainder}:${0}${someremainder}`;
      } else if (somequotient < 10 && someremainder >= 10) {
        const remainderQuotient = Math.floor(someremainder / 10);
        const remainderRemainder = someremainder % 10;
        return `${0}${somequotient}:${remainderQuotient}${remainderRemainder}`;
      } else if (somequotient >= 10 && someremainder >= 10) {
        const quotientQuotient = Math.floor(somequotient / 10);
        const quotientRemainder = somequotient % 10;
        const remainderQuotient = Math.floor(someremainder / 10);
        const remainderReamainder = someremainder % 10;
        return `${quotientQuotient}${quotientRemainder}:${remainderQuotient}${remainderReamainder}`;
      }
    }
  };

  const resendTheOtp = async () => {
    const payload = {
      employeeId: state?.employeeId,
    };
    const { data, errRes } = await resendOtpForRegister(payload);
    if (data) {
      if (data.error) {
        addToast(data.message, { appearance: "error" });
      } else {
        const currentTime = new Date();
        localStorage.setItem("otpSentTime", currentTime.getTime());
        setTimeExpired(false);
        addToast(data.message, { appearance: "success" });
        handleExpiryTime();
        setFirstNumber("");
        setSecondNumber("");
        setThirdNumber("");
        setFourthNumber("");
      }
    } else {
      addToast(errRes?.message, { appearance: "error" });
    }
  };
  const handleExpiryTime = () => {
    clearIntervalHelper = setInterval(() => {
      const currentTime = new Date();
      let timeDifference =
        currentTime.getTime() - localStorage.getItem("otpSentTime");
      timeDifference = timeDifference / 1000;
      const theTimeLeftToExp = 300 - Math.floor(timeDifference);

      if (theTimeLeftToExp <= 0) {
        clearInterval(clearIntervalHelper);
        setTimeExpired(true);
        localStorage.removeItem("otpSentTime");
      }

      setTimer(showOnTheTimer(theTimeLeftToExp));
    }, 1000);
  };

  useEffect(() => {
    handleExpiryTime();
    return () => {
      clearInterval(clearIntervalHelper);
    };
  }, []);

  useEffect(() => {
    if (timer === "00:00") {
      clearInterval(clearIntervalHelper);
    }
  }, [timer]);

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
          OTP Verification
        </Typography>
        <Box>
          <OtpBoxes
            firstNumber={firstNumber}
            setFirstNumber={setFirstNumber}
            secondNumber={secondNumber}
            setSecondNumber={setSecondNumber}
            thirdNumber={thirdNumber}
            setThirdNumber={setThirdNumber}
            fourthNumber={fourthNumber}
            setFourthNumber={setFourthNumber}
          />
          {otpError && (
            <small className="fw-bold text-danger text-center d-block mt-2">
              {otpError}
            </small>
          )}
        </Box>
        <Box>
          <Typography
            sx={{ cursor: "pointer" }}
            className="text-center color-blue fw-bold mt-2"
            onClick={resendTheOtp}
          >
            Resend OTP
          </Typography>
          {timeExpired ? (
            <Typography className="text-danger fw-bold fs-12 text-center">
              OTP Expired!
            </Typography>
          ) : (
            <Typography className="text-center fw-bold fs-12">
              Time Left: {timer}
            </Typography>
          )}
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
            onBtnClick={verifyTheOtp}
            fullWidth
          ></ButtonComponent>
        </Box>
      </Paper>
    </Grid>
  );
}

export default OptPage;
