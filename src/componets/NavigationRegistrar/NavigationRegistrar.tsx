import { setNavigator } from "@/utils/navigationHelper"
import { useEffect } from "react"
import { useNavigate } from "react-router"

const NavigationRegistrar = () =>{
    const navigate = useNavigate()
    useEffect(()=>{
        setNavigator(navigate)
    },[navigate])
    
    return null
}

export default NavigationRegistrar