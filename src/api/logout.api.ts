import { endPoints } from "@/constants/enpoints"
import axiosClient from "@/services/axios"

export const userLogout = () =>{
    return axiosClient.post(endPoints.LOGOUT)
}