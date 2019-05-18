import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";

import { loginEndpoint, LoginServerData } from "../modules/authentication/api";
import { examsEndpoint, ExamServerData } from "../modules/exams/api";
import { ProfileServerData, profileEndpoint } from "../modules/profile/api";

const createProfileData = (): ProfileServerData => {
  return {
    id: "1",
    firstName: "Jon",
    lastName: "Snow",
    sex: "male",
    birthDate: "1-1-1",
    email: "user@mail.com",
    emailConfirmed: true,
    phone: "1234567890"
  };
};

const createLoginData = (): LoginServerData => {
  return {
    profile: createProfileData(),
    token: "token"
  };
};

const createExamData = (): ExamServerData => {
  return {
    id: "1",
    address: "address",
    city: "Moscow",
    date: "" + new Date(),
    qualificationLevel: "2",
    qualificationTitle: "high",
    status: "isApplying",
    duration: 100,
    examinationCenterName: "123123",
    occupaationalStandardTitle: "chelik",
    statusChangeTime: "" + Date.now()
  };
};

export const mockRequester = (axios: AxiosInstance) => {
  const mock = new MockAdapter(axios);

  mock.onPost(loginEndpoint).reply(config => {
    return Promise.resolve([200, createLoginData()]);
  });

  mock.onGet(profileEndpoint).reply(config => {
    return Promise.resolve([200, createProfileData()]);
  });

  mock.onGet(examsEndpoint).reply(config => {
    return Promise.resolve([
      200,
      {
        currentPage: 0,
        pageSize: 3,
        total: 3,
        exams: [createExamData(), createExamData(), createExamData()]
      }
    ]);
  });

  return mock;
};
