import { getExams } from "./actionsApi";

export const onRouteEnter = {
  resource: 'exams',
  url: "/dashboard/exams",
  action: () =>
    getExams({
      from: "2019-03-25",
      to: "2029-03-25",
      page: 0,
      pageSize: 10,
      sortOrder: "asc",
      sortField: "id"
    })
};
