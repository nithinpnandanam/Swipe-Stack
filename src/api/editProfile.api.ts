import { endPoints } from "@/constants/endpoints";
import axiosClient from "@/services/axios";
import { Gender } from "@/types/common_types";
type editDataType = {
  photUrl?:string,
  gender?:Gender,
  about?:string,
  skills?:Array<string>,
};
export const editProfile = (editData: editDataType) => {
  return axiosClient.patch(endPoints.EDIT_PROFILE, editData);
};
