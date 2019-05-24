import { getProfile } from "./actions.api";

export const onRouteEnter = {
  resource: "profile",
  url: /\/dashboard\//,
  action: () => getProfile()
};
