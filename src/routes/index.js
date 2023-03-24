import { useRoutes } from "react-router-dom";
import { websiteRouteObject } from "../constants/routeObj";

const RouterComponent = () => {
  const routes = useRoutes([...websiteRouteObject]);
  return routes;
};

export { RouterComponent };
