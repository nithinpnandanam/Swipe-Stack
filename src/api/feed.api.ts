import { endPoints } from "@/constants/endpoints";
import axiosClient from "@/services/axios";
export const userFeed = () => axiosClient.get(endPoints.FEED)