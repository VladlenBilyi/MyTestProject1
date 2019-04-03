import { ExamsModel } from "./model";

export enum TypeKeys {
  GET_EXAMS_STARTED = "Exams.GET_EXAMS_STARTED",
  GET_EXAMS_SUCCESS = "Exams.GET_EXAMS_SUCCESS",
  GET_EXAMS_FAILED = "Exams.GET_EXAMS_FAILED",
  
  RESET_EXAMS_STATE = "Exams.RESET_EXAMS_STATE"
}

export type ActionTypes =
  | GetExamsStartedAction
  | GetExamsSuccessAction
  | GetExamsFailedAction
  | ResetExamsStateAction;

export const getExamsStarted = () => ({
  type: TypeKeys.GET_EXAMS_STARTED as TypeKeys.GET_EXAMS_STARTED
});

export const getExamsSuccess = (exams: ExamsModel) => ({
  type: TypeKeys.GET_EXAMS_SUCCESS as TypeKeys.GET_EXAMS_SUCCESS,
  payload: {
    exams
  }
});

export const getExamsFailed = (error: string) => ({
  type: TypeKeys.GET_EXAMS_FAILED as TypeKeys.GET_EXAMS_FAILED,
  error
});

export const resetExamsState = () => ({
  type: TypeKeys.RESET_EXAMS_STATE as TypeKeys.RESET_EXAMS_STATE
});

export type GetExamsStartedAction = ReturnType<typeof getExamsStarted>;
export type GetExamsSuccessAction = ReturnType<typeof getExamsSuccess>;
export type GetExamsFailedAction = ReturnType<typeof getExamsFailed>;
export type ResetExamsStateAction = ReturnType<typeof resetExamsState>;
