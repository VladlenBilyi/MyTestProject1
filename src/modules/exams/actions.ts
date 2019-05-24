import { ExamsModel } from "./model";
import { TypeKeys } from "./actions.constants";

export const getExamsStarted = () =>
  ({
    type: TypeKeys.GET_EXAMS_STARTED
  } as const);

export const getExamsSuccess = (exams: ExamsModel) =>
  ({
    type: TypeKeys.GET_EXAMS_SUCCESS,
    payload: {
      exams
    }
  } as const);

export const getExamsFailed = (error: string) =>
  ({
    type: TypeKeys.GET_EXAMS_FAILED,
    error
  } as const);

export const resetExamsState = () =>
  ({
    type: TypeKeys.RESET_EXAMS_STATE
  } as const);
