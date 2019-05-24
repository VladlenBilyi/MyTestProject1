import { getExams } from "./actions.api";
import { defaultGetExamsParams } from "./api";

export const onRouteEnter = {
  resource: "exams",
  url: "/dashboard/exams",
  action: () => getExams(defaultGetExamsParams)
};
