import { createQueryFromObject } from "../../utils/query";

import { ApiResponse, requester, withToken } from "../../api";

const examsEndpoint = `/exams`;

export interface ExamServerData {
  id: string;
  address: string;
  city: string;
  date: string;
  duration: number;
  examinationCenterName: string;
  occupaationalStandardTitle: string;
  qualificationLevel: string;
  qualificationTitle: string;
  status: string;
  statusChangeTime: string;
}

export interface ExamsServerData {
  currentPage: number;
  pageSize: number;
  total: number;
  exams: ExamServerData[];
}

export interface ExamsRequestParams {
  from: string;
  to: string;
  page: number;
  pageSize: number;
  sortOrder: "asc" | "desc";
  sortField: string;
}

export const getExams = async (
  token: string,
  params: ExamsRequestParams
): Promise<ApiResponse<ExamsServerData, string>> => {
  try {
    const result = await requester.get<ExamsServerData>(
      examsEndpoint + createQueryFromObject(params),
      withToken(token)
    );
    return { success: true, data: result.data };
  } catch (e) {
    return { success: false, error: e.response.statusText };
  }
};

export const defaultGetExamsParams: ExamsRequestParams = {
  from: "2019-03-25",
  to: "2029-03-25",
  page: 0,
  pageSize: 10,
  sortOrder: "asc",
  sortField: "id"
};
