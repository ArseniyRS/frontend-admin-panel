export const tokensChecker = ()=>{
    if(localStorage.getItem('token')){
        return true
    }
    return false
}