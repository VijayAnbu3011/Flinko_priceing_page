import {
  Box,
  CardContent,
  Grid,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonComponent from "../../components/atoms/ButtonComponent";
import InputBoxComponent from "../../components/atoms/InputBoxComponent";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckBoxComponent from "../../components/atoms/CheckBoxComponent";
import { useToasts } from "react-toast-notifications";
import { getAllDesignation, postCompanyData } from "../../services/pricing";
import { useLocation, useNavigate } from "react-router-dom";
import SimpleDropdownComponent from "../../components/atoms/SimpleDropDownComponent";

const initialState = {
  employeeId: "",
  firstName: "",
  lastName: "",
  emailId: "",
  mobileNumber: "",
  designation: "",
  agree: "",
};

function CompanyRegisteration() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleClick = () => {
    navigate("/pricing/bussinessregisteration");
  };

  const [agree, setAgree] = useState(true);
  const [formData, setFormData] = useState({
    employeeId: "",
    firstName: "",
    lastName: "",
    emailId: "",
    mobileNumber: "",
    designation: null,
  });

  const [formDataErr, setformDataErr] = useState(initialState);
  const [designation, setDesignation] = useState([]);

  useEffect(() => {
    if (state === "0") {
      setFormData((prev) => ({
        ...prev,
        designation: { id: "Admin", label: "Admin" },
      }));
    } else {
      getDesignationData(state);
    }
  }, [state]);

  const getDesignationData = async (companyId) => {
    const { data, error } = await getAllDesignation(companyId);
    if (data) {
      const tempAarray = data.data?.map((val) => {
        return { id: val.designationId, label: val.designationName };
      });
      setDesignation([...tempAarray]);
    } else {
      setDesignation([]);
    }
  };

  const validateFields = () => {
    let errObj = { ...initialState };
    if (!formData.employeeId) {
      errObj.employeeId = "This field is required";
    } else if (!/^[a-zA-Z0-9]/.test(formData.employeeId)) {
      errObj.employeeId = "Enter Valid Employee ID.";
    }

    if (!formData.firstName) {
      errObj.firstName = "This field is required";
    } else if (formData.firstName.trim().length !== formData.firstName.length) {
      errObj.firstName =
        "First Name field accepts only alphabet and space Max(30 characters)";
    } else if (!/^[a-zA-Z ]{1,30}$/.test(formData.firstName)) {
      errObj.firstName =
        "First Name field accepts only alphabet and space Max(30 characters)";
    }

    if (!formData.lastName) {
      errObj.lastName = "This field is required";
    } else if (formData.lastName.trim().length !== formData.lastName.length) {
      errObj.lastName =
        "Last Name field accepts only alphabet and space Max(30 characters)";
    } else if (!/^[a-zA-Z ]{1,30}$/.test(formData.lastName)) {
      errObj.lastName =
        "Last Name field accepts only alphabet and space Max(30 characters)";
    }

    if (!formData.designation) {
      errObj.designation = "This field is required";
    }

    if (!formData.emailId) {
      errObj.emailId = "This field is required";
    } else if (
      // eslint-disable-next-line
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.emailId)
    ) {
      errObj.emailId = "Enter valid E-mail ID";
    }

    if (!formData.mobileNumber) {
      errObj.mobileNumber = "This field is required";
    } else if (!/^[0-9]*\d$/.test(formData.mobileNumber)) {
      errObj.mobileNumber = "Enter valid Mobile Number";
    }

    setformDataErr((prev) => ({ ...prev, ...errObj }));
    return Object.values(errObj).every((x) => x === "");
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { addToast } = useToasts();

  const handleSubmit = async () => {
    let err = validateFields();
    if (err) {
      const payload = {
        employeeId: formData.employeeId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        officialEmailId: formData.emailId,
        mobileNumber: formData.mobileNumber,
        designationName: formData.designation?.label,
      };
      let { data, errRes } = await postCompanyData(payload);
      if (data) {
        const currentTime = new Date();
        localStorage.setItem("otpSentTime", currentTime.getTime());
        addToast(data.message, { appearance: "success" });
        navigate("/pricing/otppage", {
          state: {
            employeeId: formData.employeeId,
          },
        });
        if (data.error) {
          addToast(data.message, { appearance: "error" });
        }
      } else {
        addToast(errRes.message, { appearance: "error" });
      }
    }
  };

  return (
    <>
      <Box className="px-1 px-sm-2 px-md-5">
        <Paper>
          <Box className="mx-1 mx-sm-2 mx-md-5">
            <CardContent>
              <Typography
                variant="h4"
                className="d-flex justify-content-around"
              >
                Company Register
              </Typography>
              <Grid container className="justify-content-between">
                <Grid className="mt-2" item xs={12} sm={5.5} md={5.5}>
                  <InputBoxComponent
                    placeholder="Eg:TYC012177"
                    textLabel="Employee ID"
                    required
                    name="employeeId"
                    onChange={handleInputChange}
                    value={formData.employeeId}
                    errorText={formDataErr.employeeId}
                  />
                </Grid>
                <Grid className="mt-2" item xs={12} sm={5.5} md={5.5}>
                  <InputBoxComponent
                    placeholder="Enter your first name"
                    textLabel="First Name"
                    required
                    onChange={handleInputChange}
                    name="firstName"
                    value={formData.firstName}
                    errorText={formDataErr.firstName}
                  />
                </Grid>
                <Grid className="mt-2" item xs={12} sm={5.5} md={5.5}>
                  <InputBoxComponent
                    placeholder="Enter your Last name"
                    textLabel="Last Name"
                    required
                    onChange={handleInputChange}
                    name="lastName"
                    value={formData.lastName}
                    errorText={formDataErr.lastName}
                  />
                </Grid>
                <Grid className="mt-2" item xs={12} sm={5.5} md={5.5}>
                  <InputBoxComponent
                    placeholder="Eg: example@mail.com"
                    textLabel="Official E-mail-ID"
                    required
                    onChange={handleInputChange}
                    name="emailId"
                    value={formData.emailId}
                    errorText={formDataErr.emailId}
                  />
                </Grid>
                <Grid className="mt-2" item xs={12} sm={5.5} md={5.5}>
                  <InputBoxComponent
                    placeholder="+91 123 456 7890"
                    textLabel="Mobile Number"
                    required
                    onChange={handleInputChange}
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    errorText={formDataErr.mobileNumber}
                  />
                </Grid>
                <Grid className="mt-2" item xs={12} sm={5.5} md={5.5}>
                  {state === "0" ? (
                    <InputBoxComponent
                      placeholder="Enter your designation"
                      textLabel="Designation"
                      required
                      name="designation"
                      value={formData.designation?.label}
                      errorText={formDataErr.designation}
                      readOnly
                    />
                  ) : (
                    <SimpleDropdownComponent
                      options={designation}
                      value={formData.designation}
                      onChange={(value) => {
                        setFormData({
                          ...formData,
                          designation: value,
                        });
                      }}
                      errorText={formDataErr.designation}
                      textLabel="Designation"
                      required
                    />
                  )}
                </Grid>
                <Box className="d-flex justify-content-start align-items-center">
                  <CheckBoxComponent
                    label=""
                    onChange={() => {
                      setAgree(!agree);
                    }}
                    checked={!agree}
                  />
                  <Typography
                    sx={{
                      color: "#4a4a4a",
                      fontSize: "14px",
                      fontWeight: "600",
                      marginRight: "0.5rem",
                      marginLeft: { md: "-20px" },
                    }}
                  >
                    By clicking this checkbox you are agreed to our terms and
                    conditions
                  </Typography>
                  <Tooltip title="info" placement="top">
                    <InfoOutlinedIcon className="cursor-pointer fs-20" />
                  </Tooltip>
                </Box>
              </Grid>
              <Grid
                item
                md={12}
                className="d-flex justify-content-end align-items-center"
              >
                <ButtonComponent
                  label="Pervious"
                  muiProps="mx-3"
                  variant="outlined"
                  onBtnClick={handleClick}
                />

                <ButtonComponent
                  label="Next"
                  muiProps="m-3"
                  variant="outlined"
                  disabled={agree}
                  onBtnClick={() => {
                    handleSubmit();
                  }}
                />
              </Grid>
            </CardContent>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default CompanyRegisteration;
