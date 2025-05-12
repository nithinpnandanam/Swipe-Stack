import { endPoints } from "@/constants/enpoints";
import axiosClient from "@/services/axios";
export const userFeed = () => axiosClient.get(endPoints.FEED)