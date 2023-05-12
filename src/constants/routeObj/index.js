import BussinessRegisteration from "../../Pages/form/BussinessRegisteration";
import CheckoutPage from "../../Pages/form/Checkout";
import CompanyRegisteration from "../../Pages/form/CompanyRegisteration";
import OptPage from "../../Pages/form/OptPage";
import SetPassword from "../../Pages/form/SetPassword";
import Pricing from "../../Pages/pricing";
import WeOffer from "../../Pages/weOffer";

const websiteRouteObject = [
  {
    element: <Pricing />,
    path: "/pricing",
  },
  {
    element: <WeOffer />,
    path: "/weOffer",
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
  {
    element: <CheckoutPage />,
    path: "/checkout",
  },
];

export { websiteRouteObject };
