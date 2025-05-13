import { endPoints } from "@/constants/endpoints"
import axiosClient from "@/services/axios"

export const userLogout = () =>{
    return axiosClient.post(endPoints.LOGOUT)
}