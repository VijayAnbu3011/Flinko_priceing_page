import { Box, CardContent, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputBoxComponent from "../../components/atoms/InputBoxComponent";
import SimpleDropdownComponent from "../../components/atoms/SimpleDropDownComponent";
import ButtonComponent from "../../components/atoms/ButtonComponent";
import {
  BusinessData,
  getAllCompanies,
  postBusinessData,
} from "../../services/pricing";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";
const initialState = {
  companyName: "",
  gstin: "",
  pan: "",
  cin: "",
  noOfEmployees: "",
  email: "",
  mobileNumber: "",
};
function BussinessRegisteration() {
  const navigate = useNavigate();
  const [allCompaniesArray, setAllCompaniesArray] = useState([
    {
      id: "",
      label: "",
    },
  ]);
  const [editData, setEditData] = useState({});

  const { addToast } = useToasts();
  const [formData, setFormData] = useState({
    companyName: { id: 0, label: "" },
    gstin: "",
    pan: "",
    cin: "",
    noOfEmployees: "",
    email: "",
    mobileNumber: "",
  });
  const getData = async () => {
    let { data, errRes } = await BusinessData();
    if (data) {
      if (!data.error) {
        setEditData(data.data);
      } else {
        setEditData({});
      }
    } else if (errRes) {
      setEditData({});
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const [formDataErr, setformDataErr] = useState(initialState);

  const validateFields = () => {
    let errObj = { ...initialState };

    if (!formData.companyName.label) {
      errObj.companyName = "This field is required";
    }

    if (!formData.email) {
      errObj.email = "This field is required";
    } else if (
      // eslint-disable-next-line
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      errObj.email = "Enter valid E-mail ID";
    }

    if (!formData.mobileNumber) {
      errObj.mobileNumber = "This field is required";
    } else if (!/^[0-9]*\d$/.test(formData.mobileNumber)) {
      errObj.mobileNumber = "Enter valid Mobile Number";
    }

    if (!formData.noOfEmployees) {
      if (!/^\d+$/.test(formData.noOfEmployees)) {
        errObj.noOfEmployees = "No.of Employees fields accepts only Number";
      }
    }

    if (!formData.pan === "") {
      errObj.panNumber = "This Field is Required";
    } else if (!/^[A-Z]{5}\d{4}[A-Z]$/.test(formData.pan)) {
      errObj.pan = "Enter Valid Pancard Number";
    }

    if (formData.gstin) {
      if (
        !/^[0-9]{2}([A-Z]{3}[P,C,H,A,B,G,J,L,F,T][A-Z][0-9]{4}[A-Z])[0-9][Z][0-9]$/.test(
          formData.gstin
        )
      ) {
        errObj.gstin = "Enter Valid GSTIN Number";
      }
    }

    if (formData.cin) {
      if (!/^[a-zA-Z0-9]{1,21}$/.test(formData.cin)) {
        errObj.cin = "Enter Valid CIN Number";
      }
    }

    setformDataErr((prev) => ({ ...prev, ...errObj }));
    return Object.values(errObj).every((x) => x === "");
  };

  const getCompanyData = async () => {
    const { data, error } = await getAllCompanies();
    if (data) {
      let tempData = data.data.map((val, index) => {
        return { id: val.companyId, label: val.companyName };
      });
      setAllCompaniesArray([...tempData]);
    } else if (error) {
      addToast(error?.response?.data?.message, { appearance: "error" });
    }
  };
  useEffect(() => {
    if (Object.keys(editData).length > 0) {
      setFormData({
        companyName: { id: editData?.companyId, label: editData?.companyName },
        gstin: editData?.gstin,
        cin: editData?.cin,
        noOfEmployees: editData?.noOfEmp,
        mobileNumber: editData?.companyMobileNumber,
        pan: editData?.pan,
        email: editData?.companyEmailId,
      });
    } else {
      setFormData({ ...initialState });
    }
  }, [editData]);

  useEffect(() => {
    getCompanyData();
  }, []);

  const [showInputComponent, setShowInputComponent] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    let err = validateFields();
    if (err) {
      const payload = {
        companyName: formData.companyName.label,
        pan: formData.pan,
        gstin: formData.gstin,
        cin: formData.cin,
        noOfEmp: formData.noOfEmployees,
        companyEmailId: formData.email,
        companyMobileNumber: formData.mobileNumber,
      };
      let { data, errRes } = await postBusinessData(
        formData.companyName.id,
        payload
      );
      if (data) {
        getData(data.data);
        addToast(data.message, { appearance: "success" });
        navigate("/pricing/companyregisteration", { state: "0" });
      } else {
        addToast(errRes.message, { appearance: "error" });
      }
    }
  };
  const handleClick = () => {
    navigate("/pricing");
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
                Business Register
              </Typography>
              <Grid container className="justify-content-between">
                <Grid className="mt-2" item xs={12} sm={5.5} md={5.5}>
                  {showInputComponent ? (
                    <Box>
                      <InputBoxComponent
                        type="text"
                        placeholder="Company name"
                        name="companyName"
                        value={formData.companyName.label}
                        variant="outlined"
                        fullWidth
                        textLabel="Company name"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            companyName: { id: 0, label: e.target.value },
                          });
                        }}
                        required
                        errorText={formDataErr.companyName}
                      />
                    </Box>
                  ) : (
                    <SimpleDropdownComponent
                      size="small"
                      options={allCompaniesArray}
                      placeholder="Select/Add Company"
                      showAddCompanies
                      value={formData.companyName}
                      showInputComponent={showInputComponent}
                      setShowInputComponent={setShowInputComponent}
                      addBtnClick={() => {
                        setShowInputComponent(true);
                      }}
                      onChange={(value) => {
                        setFormData({ ...formData, companyName: value });
                      }}
                      onInputChange={(value) => {
                        setFormData({
                          ...formData,
                          companyName: { id: 0, label: value },
                        });
                      }}
                      onBlur={() => {
                        if (
                          formData.companyName.label &&
                          formData.companyName.id === 0
                        ) {
                          setFormData({
                            ...formData,
                            companyName: { id: "", label: "" },
                          });
                        }
                      }}
                      textLabel="Company name"
                      required
                      errorText={formDataErr.companyName}
                    />
                  )}
                </Grid>
                <Grid className="mt-2" item xs={12} sm={5.5} md={5.5}>
                  <InputBoxComponent
                    placeholder="Enter GSTIN"
                    textLabel="GSTIN"
                    name="gstin"
                    value={formData.gstin}
                    onChange={handleInputChange}
                    errorText={formDataErr.gstin}
                  />
                </Grid>
                <Grid className="mt-2" item xs={12} sm={5.5} md={5.5}>
                  <InputBoxComponent
                    placeholder="Enter Pan Number"
                    textLabel="PAN"
                    required
                    name="pan"
                    value={formData.pan}
                    onChange={handleInputChange}
                    errorText={formDataErr.pan}
                  />
                </Grid>
                <Grid className="mt-2" item xs={12} sm={5.5} md={5.5}>
                  <InputBoxComponent
                    placeholder="Enter CIN"
                    textLabel="CIN"
                    name="cin"
                    value={formData.cin}
                    onChange={handleInputChange}
                    errorText={formDataErr.cin}
                  />
                </Grid>
                <Grid className="mt-2" item xs={12} sm={5.5} md={5.5}>
                  <InputBoxComponent
                    placeholder="Enter No.of Employees"
                    textLabel=" No.of Employees"
                    required
                    name="noOfEmployees"
                    value={formData.noOfEmployees}
                    onChange={handleInputChange}
                    errorText={formDataErr.noOfEmployees}
                  />
                </Grid>
                <Grid className="mt-2" item xs={12} sm={5.5} md={5.5}>
                  <InputBoxComponent
                    placeholder="Enter Company Email"
                    textLabel="Company Email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    errorText={formDataErr.email}
                  />
                </Grid>
                <Grid className="mt-2" item xs={12} sm={5.5} md={5.5}>
                  <InputBoxComponent
                    placeholder="Enter Company Mobile Number"
                    textLabel="Company Mobile Number"
                    required
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    errorText={formDataErr.mobileNumber}
                  />
                </Grid>
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
                  onBtnClick={handleSubmit}
                />
              </Grid>
            </CardContent>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default BussinessRegisteration;
