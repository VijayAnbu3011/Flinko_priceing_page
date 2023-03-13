import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const OtpBoxes = ({
  firstNumber,
  setFirstNumber,
  secondNumber,
  setSecondNumber,
  thirdNumber,
  setThirdNumber,
  fourthNumber,
  setFourthNumber,
}) => {
  const [firstIsFocussed, setFirstIsFocussed] = useState(true);
  const [secondFocussed, setSecondFocussed] = useState(false);
  const [thirdFocussed, setThirdFocussed] = useState(false);
  const [fourthIsFocussed, setFourthIsFocussed] = useState(false);

  const firstInputRef = useRef();
  const secondInputRef = useRef();
  const thirdInputRef = useRef();
  const fourthInputRef = useRef();

  const integerRegex = /^(\d+)$/;

  const handleFirstNumberChange = e => {
    if (firstNumber === "" && integerRegex.test(e.target.value)) {
      setFirstNumber(e.target.value);
      secondInputRef.current.focus();
      return;
    }
  };

  const handleSecondNumberChange = e => {
    if (secondNumber === "" && integerRegex.test(e.target.value)) {
      setSecondNumber(e.target.value);
      thirdInputRef.current.focus();
      return;
    }
  };

  const handleThirdNumberChange = e => {
    if (thirdNumber === "" && integerRegex.test(e.target.value)) {
      setThirdNumber(e.target.value);
      fourthInputRef.current.focus();
      return;
    }
  };

  const handleFourthNumberChange = e => {
    if (fourthNumber === "" && integerRegex.test(e.target.value)) {
      setFourthNumber(e.target.value);
      return;
    }
  };

  useEffect(() => {
    firstInputRef.current.focus();
  }, []);
  return (
    <Box>
      <Box className="d-flex justify-content-around mt-4">
        <Box width={60}>
          <TextField
            onPaste={e => {
              e.preventDefault();
            }}
            className="cursor-blue"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            onChange={handleFirstNumberChange}
            value={firstNumber}
            inputRef={firstInputRef}
            onKeyDown={e => {
              if (e.keyCode === 8) {
                setFirstNumber("");
              }
            }}
            placeholder={firstIsFocussed ? "" : "—"}
            sx={{
              "& .MuiInputBase-root": {
                "& input": {
                  textAlign: "center",
                  color: firstNumber === "" ? "grey" : "#1181B2",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                },
              },
            }}
            onFocus={() => {
              setFirstIsFocussed(true);
            }}
            onBlur={() => {
              setFirstIsFocussed(false);
            }}
          />
        </Box>
        <Box width={60}>
          <TextField
            onPaste={e => {
              e.preventDefault();
            }}
            className="cursor-blue"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            value={secondNumber}
            inputRef={secondInputRef}
            onKeyDown={e => {
              if (e.keyCode === 8) {
                setSecondNumber("");
                firstInputRef.current.focus();
              }
            }}
            placeholder={secondFocussed ? "" : "—"}
            onChange={handleSecondNumberChange}
            sx={{
              "& .MuiInputBase-root": {
                "& input": {
                  textAlign: "center",
                  color: secondNumber === "" ? "grey" : "#1181B2",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                },
              },
            }}
            onFocus={() => {
              setSecondFocussed(true);
            }}
            onBlur={() => {
              setSecondFocussed(false);
            }}
          />
        </Box>
        <Box width={60}>
          <TextField
            onPaste={e => {
              e.preventDefault();
            }}
            className="cursor-blue"
            value={thirdNumber}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            inputRef={thirdInputRef}
            onKeyDown={e => {
              if (e.keyCode === 8) {
                setThirdNumber("");
                secondInputRef.current.focus();
              }
            }}
            placeholder={thirdFocussed ? "" : "—"}
            onChange={handleThirdNumberChange}
            sx={{
              "& .MuiInputBase-root": {
                "& input": {
                  textAlign: "center",
                  color: thirdNumber === "" ? "grey" : "#1181B2",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                },
              },
            }}
            onFocus={() => {
              setThirdFocussed(true);
            }}
            onBlur={() => {
              setThirdFocussed(false);
            }}
          />
        </Box>
        <Box width={60}>
          <TextField
            onPaste={e => {
              e.preventDefault();
            }}
            className="cursor-blue"
            value={fourthNumber}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            inputRef={fourthInputRef}
            onKeyDown={e => {
              if (e.keyCode === 8) {
                setFourthNumber("");
                thirdInputRef.current.focus();
              }
            }}
            onChange={handleFourthNumberChange}
            placeholder={fourthIsFocussed ? "" : "—"}
            sx={{
              "& .MuiInputBase-root": {
                "& input": {
                  textAlign: "center",
                  color: fourthNumber === "" ? "grey" : "#1181B2",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                },
              },
            }}
            onFocus={() => {
              setFourthIsFocussed(true);
            }}
            onBlur={() => {
              setFourthIsFocussed(false);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OtpBoxes;
