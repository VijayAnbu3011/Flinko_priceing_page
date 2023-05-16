import { Box, CardContent, Paper, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import ButtonComponent from "../../components/atoms/ButtonComponent";
import {
  createOrder,
  paymentVerification,
  postCheckout,
} from "../../services/pricing";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const { addToast } = useToasts();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    updateData();
  }, []);

  const updateData = async () => {
    let payload = {
      companyId: localStorage.getItem("companyId"),
      planName: localStorage.getItem("planName"),
    };
    let { data, errRes } = await postCheckout(payload);
    if (data) {
      setFormData({
        PlanName: data?.data.planName,
        AmountPerEmployee: `${data?.data?.currencySymbol} ${data?.data.amountPerMonth} (Upto ${data?.data.noOfEmp} Employees) `,
        ExtraAmount: `${data?.data?.currencySymbol} ${data?.data.additionalCostPerEmp} / Per Employee`,
        Department: `${data?.data.departments.join(", ")}`,
        Duration: `${data?.data.duration} months`,
        totalAmount: `${data?.data?.currencySymbol} ${data?.data.minTotalAmount}`,
        currencyCode: data?.data?.currencyCode,
        amount: data?.data?.maxTotalAmount,
        companyId: data?.data?.companyId,
        employeeInfoId: data?.data?.employeeInfoId,
      });
    } else {
      setFormData({});
      addToast(errRes.message, { appearance: "error" });
    }
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const displayRazorpay = async () => {
    if (formData?.amount) {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (res) {
        const payload = {
          amount: parseInt(formData.amount, 10),
          currency: formData.currencyCode,
        };
        const { data, errRes } = await createOrder(payload);
        if (data) {
          const orderId = data?.data;
          const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY_ID,
            amount: formData.amount.toString(),
            currency: formData.currencyCode,
            name: "FLINKO",
            description: "Subscription",
            order_id: orderId,
            handler: async function (response) {
              const verifyPayload = {
                orderId,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
                companyId: formData.companyId,
                planName: formData.PlanName,
                employeeInfoId: formData.employeeInfoId,
                totalAmount: formData.amount.toString(),
              };

              const { data, errRes } = await paymentVerification(verifyPayload);
              if (data) {
                addToast(data.message, { appearance: "success" });
                navigate("/");
              } else {
                addToast(errRes.message || "ERROR", { appearance: "error" });
              }
            },
            theme: {
              color: "#1181b2",
            },
          };

          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
        } else {
          addToast(errRes?.message || "ERROR", {
            appearance: "error",
          });
        }
      } else {
        addToast("Razorpay SDK failed to load. Are you online?", {
          appearance: "error",
        });
      }
    }
  };

  return (
    <>
      <Box className="px-1 px-sm-2 px-md-5 m-3">
        <Paper>
          <Box className="mx-1 mx-sm-2 mx-md-5">
            <CardContent>
              <Box className="p-2 row">
                <Typography className="col-12 col-sm-6">Plan Name</Typography>
                <Typography className="text-center col-12 col-sm-6">
                  {formData?.PlanName}
                </Typography>
              </Box>
              <Box borderBottom={"1px solid #D3D3D3"} className="p-2 row">
                <Typography className="col-12 col-sm-6">Department</Typography>
                <Typography className="text-center col-12 col-sm-6">
                  {formData?.Department}
                </Typography>
              </Box>

              <Box className="p-2 row">
                <Typography className="col-12 col-sm-6">
                  Amount Per Month
                </Typography>
                <Typography className="text-center col-12 col-sm-6">
                  {formData?.ExtraAmount}
                </Typography>
              </Box>
              <Box className="p-2 row ">
                <Typography className="col-12 col-sm-6">
                  Extra Amount Per Month
                </Typography>
                <Typography className="text-center col-12 col-sm-6">
                  {formData?.AmountPerEmployee}
                </Typography>
              </Box>
              <Box borderBottom={"1px solid #D3D3D3"} className="p-2 row">
                <Typography className="col-12 col-sm-6">Duration</Typography>
                <Typography className="text-center col-12 col-sm-6">
                  {formData?.Duration}
                </Typography>
              </Box>
              <Box borderBottom={"1px solid #D3D3D3"} className="p-2 row">
                <Typography className="col-12 col-sm-6 fw-600">
                  Total
                </Typography>
                <Typography className="text-center col-12 col-sm-6 fw-600">
                  {formData?.totalAmount}
                </Typography>
              </Box>
              <Box className="py-3">
                <ButtonComponent
                  label="Place order"
                  fullWidth
                  sx={{
                    backgroundColor: "#CCC !important",
                    color: "black",
                    textTransform: "uppercase !important",
                  }}
                  onBtnClick={displayRazorpay}
                />
              </Box>
            </CardContent>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default CheckoutPage;
