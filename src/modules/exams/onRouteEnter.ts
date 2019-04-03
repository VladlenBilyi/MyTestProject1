import { getExams } from "./actionsApi";
import { defaultGetExamsParams } from "./api";

export const onRouteEnter = {
  resource: "exams",
  url: "/dashboard/exams",
  action: () => getExams(defaultGetExamsParams)
};
