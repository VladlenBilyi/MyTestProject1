import { Fetchable, createFetchableInitialState } from "../../utils/fetchState";
import { WithError } from "../../utils/errorState";
import { Omit } from "../../utils/types";

import { ExamServerData, ExamsServerData } from "./api";

type ExamModel = Omit<ExamServerData, "qualificationLevel"> & {
  qualificationLevel: number;
};

type ExamsById = Record<string, ExamModel>;

export interface ExamsModel {
  byId: ExamsById;
  list: string[];
}

export interface ExamsState extends ExamsModel, Fetchable, WithError<string> {}

export const initialState: ExamsState = createFetchableInitialState({
  byId: {},
  list: [],
  error: ""
});

export function prepareServerData(data: ExamsServerData): ExamsModel {
  return {
    list: data.exams.map(({ id }) => id),
    byId: data.exams.reduce<ExamsById>((acc, curr) => {
      const exam: ExamModel = {
        ...curr,
        qualificationLevel: +curr.qualificationLevel
      };
      acc[curr.id] = exam;
      return acc;
    }, {})
  };
}
