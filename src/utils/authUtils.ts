export const getAccessToken = () =>{
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken){
        return accessToken
    }else {
        return null
    }
}

export const isAccessToken = () => !!getAccessToken();

export const removeAccessToken = () => {
    localStorage.removeItem('accessToken');
};