import { getProfile } from "./actionsApi";

export const onRouteEnter = {
  resource: "profile",
  url: "/dashboard/profile",
  action: () => getProfile()
};
