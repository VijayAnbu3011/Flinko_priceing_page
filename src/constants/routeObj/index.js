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
    path: "/pricing/bussinessregisteration",
  },
  {
    element: <CompanyRegisteration />,
    path: "/pricing/companyregisteration",
  },
  {
    element: <OptPage />,
    path: "/pricing/otppage",
  },
  {
    element: <SetPassword />,
    path: "/pricing/setpassword",
  },
  {
    element: <CheckoutPage />,
    path: "/pricing/checkout",
  },
];

export { websiteRouteObject };
