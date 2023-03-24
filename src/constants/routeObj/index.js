import BussinessRegisteration from "../../Pages/form/BussinessRegisteration";
import CompanyRegisteration from "../../Pages/form/CompanyRegisteration";
import OptPage from "../../Pages/form/OptPage";
import SetPassword from "../../Pages/form/SetPassword";
import Pricing from "../../Pages/pricing";

const websiteRouteObject = [
  {
    element: <Pricing />,
    path: "/pricing",
  },
  {
    element: <BussinessRegisteration />,
    path: "/bussinessregisteration",
  },
  {
    element: <CompanyRegisteration />,
    path: "/companyregisteration",
  },
  {
    element: <OptPage />,
    path: "/otppage",
  },
  {
    element: <SetPassword />,
    path: "/setpassword",
  },
];

export { websiteRouteObject };
