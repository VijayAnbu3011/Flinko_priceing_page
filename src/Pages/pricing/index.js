import { Box, CardContent, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPlan, postStatus } from "../../services/pricing";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ButtonComponent from "../../components/atoms/ButtonComponent";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";

function Pricing() {
  const [state, setState] = useState("Silver");
  const [plan, setPlan] = useState({});
  const [planDetails, setPlanDetails] = useState([]);
  const { addToast } = useToasts();
  const navigate = useNavigate();

  useEffect(() => {
    getPlanDetail();
    localStorage.clear();
  }, []);

  const handlePlanChange = (plan) => {
    setState(plan);
  };

  const getPlanDetail = async () => {
    let { data } = await getPlan();
    if (data) {
      let tempArr = {};
      data?.data?.map((item) => {
        tempArr = {
          ...tempArr,
          [item.planName]: {
            PlanName: item.planName,
            AmountPerEmployee: `₹ ${item.amountPerMonth} (Upto ${item.noOfEmp} Employees) `,
            ExtraAmount: `₹ ${item.additionalCostPerEmp} / Per Employee`,
            Department: `${item.departments.join(", ")}`,
            Duration: `${item.duration} months`,
          },
        };
      });
      setPlanDetails(data.data);
      setPlan(tempArr);
    }
  };
  const handleClick = async () => {
    const payload = {
      planName: state,
    };
    let { data, errRes } = await postStatus(payload);
    if (data) {
      addToast(data.message, { appearance: "success" });
      localStorage.setItem("planName", state);
      navigate("/bussinessregisteration");
    } else {
      addToast(errRes.message, { appearance: "error" });
    }
  };

  return (
    <Box className="my-3">
      <Box className="pricing-header  md-4 mb-3 mx-auto text-center">
        <Typography variant="h3" className="display-4 fw-normal">
          Pricing
        </Typography>
        <Typography className="fs-5 text-muted container1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>
      <Box className="px-1 px-sm-2 px-md-5">
        <Paper>
          <Box className="mx-1 mx-sm-2 mx-md-5">
            <CardContent>
              <Box borderBottom={"1px solid #D3D3D3"} className="p-2 row">
                <Typography className="col-12 col-sm-6">Plan Name </Typography>
                <Typography className="text-center col-12 col-sm-6">
                  {plan[state]?.PlanName}
                </Typography>
              </Box>
              <Box borderBottom={"1px solid #D3D3D3"} className="p-2 row">
                <Typography className="col-12 col-sm-6">
                  Amount Per Month
                </Typography>
                <Typography className="text-center col-12 col-sm-6">
                  {plan[state]?.AmountPerEmployee}
                </Typography>
              </Box>

              <Box borderBottom={"1px solid #D3D3D3"} className="p-2 row">
                <Typography className="col-12 col-sm-6">
                  Extra Amount Per Month
                </Typography>
                <Typography className="text-center col-12 col-sm-6">
                  {plan[state]?.ExtraAmount}
                </Typography>
              </Box>

              <Box borderBottom={"1px solid #D3D3D3"} className="p-2 row">
                <Typography className="col-12 col-sm-6">Duration</Typography>
                <Typography className="text-center col-12 col-sm-6">
                  {plan[state]?.Duration}
                </Typography>
              </Box>

              <Box borderBottom={"1px solid #D3D3D3"} className="p-2 row">
                <Typography className="col-12 col-sm-6">Department</Typography>
                <Typography className="text-center col-12 col-sm-6">
                  {plan[state]?.Department}
                </Typography>
              </Box>

              <Box className="row">
                {planDetails.map((item, ind) => (
                  <Box
                    className="py-3 col-12 col-sm-12 col-md-4 position-relative"
                    key={ind}
                  >
                    <Box
                      border={"1px solid black"}
                      className="cursor-pointer rounded-3"
                      sx={{
                        background:
                          state === item.planName ? "#f5f5f5" : "transparent",
                      }}
                      onClick={() => handlePlanChange(item.planName)}
                    >
                      <Typography variant="h5" className="px-2">
                        {item.planName}
                      </Typography>
                      <Typography variant="h6" className="px-2 py-1">
                        ₹{item.amountPerMonth}/month
                      </Typography>
                    </Box>
                    {state === item.planName && (
                      <Box
                        className="position-absolute bg-white rounded-5"
                        sx={{ top: 5, right: 5 }}
                      >
                        <CheckCircleIcon />
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
              <Box>
                <ButtonComponent
                  fullWidth
                  label={`Continue With ${state}`}
                  sx={{
                    backgroundColor: "#CCC !important",
                    color: "black",
                    textTransform: "uppercase !important",
                  }}
                  onBtnClick={handleClick}
                />
              </Box>
            </CardContent>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Pricing;
