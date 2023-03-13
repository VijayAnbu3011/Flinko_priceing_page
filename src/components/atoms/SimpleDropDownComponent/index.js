import Autocomplete from "@mui/material/Autocomplete";
import { TextField, Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FormHelperText } from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles({
  customTextField: {
    "& input::placeholder": {
      fontSize: "14px",
    },
  },
  input: {
    color: "#B3B3B3",
  },
  clearIndicator: {
    color: "red",
  },
  optionStyle: {
    width: "100%",
    display: "flex",
    margin: "0px 5px",
    padding: "6px 5px",
    borderBottom: "0.5px solid #DDEDF4",
    cursor: "pointer",
    "&:hover": {
      background: "#9FCCE066 !important",
    },
  },
  listBox: {
    border: "1px solid #9FCCE0 !important",
    borderRadius: "8px !important",
    marginTop: "3px",
  },
});

const commonStyles = {
  bgcolor: "background.paper",
  m: 0.2,
  borderColor: "grey.500",
  height: "1.2rem",
};

const SimpleDropdownComponent = ({
  id = "simple-drop-down",
  value = null,
  inputValue,
  options = [],
  fullWidth = false,
  label = "",
  variant = "outlined",
  errorText = "",
  placeholder = "-- select --",
  onChange = () => {},
  onBlur = () => {},
  readOnly = false,
  disabled = false,
  size = "small",
  sx = {},
  multiple = false,
  onInputChange = () => {},
  textLabel = "",
  showAddCompanies = false,
  addBtnClick = () => {},
  endAdornmentLine = true,
  required = false,
}) => {
  const classes = useStyles();

  const renderOption = (props, option) => {
    return (
      <li {...props} style={{ padding: 0, margin: 0, width: "100%" }}>
        <Box className={classes.optionStyle}>
          <Typography
            sx={{ color: "#4a4a4a", fontSize: "14px", fontWeight: "400" }}
          >
            {option.label}
          </Typography>
        </Box>
      </li>
    );
  };

  return (
    <>
      <Grid mb="3px" px="6px">
        <Typography
          sx={{ cursor: "pointer", color: disabled ? "#ccc" : "#000" }}
          className="ff-Ro fs-14 fw-500"
        >
          {textLabel}
          {required && <span className="text-danger ms-1">*</span>}
        </Typography>
      </Grid>
      <Box>
        <Autocomplete
          noOptionsText={
            showAddCompanies ? (
              <Box
                onClick={addBtnClick}
                className="d-flex border rounded p-1  border-primary justify-content-around align-items-center cursor-pointer"
              >
                <AddIcon className="color-blue" />
                <Typography className="fs-14">Add New Company</Typography>
              </Box>
            ) : (
              <Typography>No options available</Typography>
            )
          }
          size={size}
          value={value}
          inputValue={inputValue}
          clearOnBlur={false}
          id={id}
          multiple={multiple}
          options={options}
          fullWidth={fullWidth}
          getOptionLabel={option => (option.label ? option.label : "")}
          isOptionEqualToValue={(option, value) =>
            value === undefined || value === "" || option.id === value.id
          }
          disabled={disabled}
          renderOption={(props, option) => renderOption(props, option)}
          renderInput={params => (
            <TextField
              {...params}
              label={label}
              variant={variant}
              error={Boolean(errorText)}
              onBlur={onBlur}
              placeholder={placeholder}
              classes={{ root: classes.customTextField }}
            />
          )}
          onChange={(_, value) => {
            onChange(value);
          }}
          onInputChange={(_, newvalue) => {
            onInputChange(newvalue);
          }}
          readOnly={readOnly}
          sx={{
            "& .MuiInputBase-input": {
              ...commonStyles,
            },
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: "#1181b2",
                borderRadius: "6px",
              },
            },
            "& .MuiOutlinedInput-root:focus": {
              "& > fieldset": {
                outline: "none",
                borderColor: "#A6A6A6",
                borderRadius: "6px",
              },
            },
            "& .MuiOutlinedInput-root:active": {
              "& > fieldset": {
                outline: "none",
                borderColor: "#1181b2",
                borderRadius: "6px",
              },
            },

            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                borderColor: "#A6A6A6",
                borderRadius: "6px",
              },
            },
            "& .MuiAutocomplete-popupIndicatorOpen": {
              borderRadius: 0,
              borderRight: endAdornmentLine ? "1px solid #A6A6A6" : "",
            },
            "& .css-qzbt6i-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator":
              {
                borderRadius: 0,
                borderLeft: endAdornmentLine ? "1px solid #A6A6A6" : "",
              },
            ...sx,
          }}
          classes={{ paper: classes.listBox }}
          popupIcon={
            <>
              <IoMdArrowDropdown
                style={{
                  color: "#A6A6A6",
                }}
              />
            </>
          }
        />
      </Box>
      {errorText && (
        <FormHelperText error className="fw-700">
          {errorText}
        </FormHelperText>
      )}
    </>
  );
};

export default SimpleDropdownComponent;
