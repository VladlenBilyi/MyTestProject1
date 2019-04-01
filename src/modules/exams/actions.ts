import { ExamsModel } from "./model";

export enum TypeKeys {
  GET_EXAMS_STARTED = "Profile.GET_EXAMS_STARTED",
  GET_EXAMS_SUCCESS = "Profile.GET_EXAMS_SUCCESS",
  GET_EXAMS_FAILED = "Profile.GET_EXAMS_FAILED"
}

export type ActionTypes =
  | GetExamsStartedAction
  | GetExamsSuccessAction
  | GetExamsFailedAction;

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

export type GetExamsStartedAction = ReturnType<typeof getExamsStarted>;
export type GetExamsSuccessAction = ReturnType<typeof getExamsSuccess>;
export type GetExamsFailedAction = ReturnType<typeof getExamsFailed>;
