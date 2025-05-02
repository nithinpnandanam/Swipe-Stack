import { endPoints } from "@/constants/enpoints";
import axiosClient from "@/services/axios";

type loginDataTypes = {
  emailId: string;
  password: string;
};

export const userLogin = (loginData: loginDataTypes) => {
  return axiosClient.post(endPoints.LOGIN, loginData);
};
