import serviceUtil from "../utils";

const getPlan = () => {
  return serviceUtil
    .get(`plan`)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response && err.response.data;
      return { errRes };
    });
};

const getAllCompanies = async () => {
  return serviceUtil
    .get("companies")
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response && err.response.data;
      return { errRes };
    });
};

const postBusinessData = async (id, payload) => {
  return serviceUtil
    .post(`bussiness-plan/${id}`, payload)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response && err.response.data;
      return { errRes };
    });
};
const BusinessData = async () => {
  return serviceUtil
    .get(`bussiness-plan`)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response && err.response.data;
      return { errRes };
    });
};

const postCompanyData = async (payload) => {
  return serviceUtil
    .post(`employee/registration-otp`, payload)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response && err.response.data;
      return { errRes };
    });
};

const postStatus = async (payload) => {
  return serviceUtil
    .post(`plan-details`, payload)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response && err.response.data;
      return { errRes };
    });
};
const verifyOtp = async (payload) => {
  return serviceUtil
    .post(`employee/verify`, payload)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response && err.response.data;
      return { errRes };
    });
};
const resendOtpForRegister = async (payload) => {
  return serviceUtil
    .post(`employee/registration-resend-otp`, payload)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response && err.response.data;
      return { errRes };
    });
};

const completeTheRegistration = async (payload) => {
  return serviceUtil
    .post(`employee/registration`, payload)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response && err.response.data;
      return { errRes };
    });
};

const postCheckout = async (payload) => {
  return serviceUtil
    .post(`payment`, payload)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response && err.response.data;
      return { errRes };
    });
};

const createOrder = (payload) => {
  return serviceUtil
    .post(`payment/order`, payload)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response && err.response.data;
      return { errRes };
    });
};

const paymentVerification = (payload) => {
  return serviceUtil
    .post(`payment/verify`, payload)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response && err.response.data;
      return { errRes };
    });
};

export {
  getPlan,
  getAllCompanies,
  postBusinessData,
  postCompanyData,
  BusinessData,
  postStatus,
  verifyOtp,
  resendOtpForRegister,
  completeTheRegistration,
  postCheckout,
  createOrder,
  paymentVerification,
};
