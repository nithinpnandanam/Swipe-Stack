export const getAccessToken = () =>{
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken){
        return accessToken
    }else {
        return null
    }
}