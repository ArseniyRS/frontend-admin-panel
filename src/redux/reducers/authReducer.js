import {
    AUTH_TOGGLE_FETCH_LOADER,
    TOGGLE_AUTH,
    TOGGLE_FETCH_LOADER,
    TOGGLE_PAGE_LOADER,
    WRITE_AUTH_MESSAGE,
    WRITE_USERNAME
} from './types'
import {authReq, userGetByIdReq} from "../../utils/Requests";
import {getUserById} from "./userReducer";


const initialState={
    authFetchLoader: false,
    isAuthorized: false,
    isPageLoader: false,
    authErrorMessage: undefined,
    username: {}
}


export const authReducer = (state=initialState,action)=>{
    switch (action.type) {
        case TOGGLE_AUTH:
            return {
                ...state,
                isAuthorized: action.payload
            }
        case AUTH_TOGGLE_FETCH_LOADER:
            return{
                ...state,
                authFetchLoader: action.payload
            }
        case TOGGLE_PAGE_LOADER:
            return{
                ...state,
                isPageLoader: action.payload

            }
        case WRITE_AUTH_MESSAGE:
            return {
                ...state,
                authErrorMessage: action.payload
            }
        case WRITE_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}
const writeUsername = value=>{
    return{
        type: 'WRITE_USERNAME',
        payload: value
    }
}
export const writeAuthMessage = str =>{
    return{
        type: 'WRITE_AUTH_MESSAGE',
        payload: str
    }
}
export const togglePageLoader = bool =>{
    return{
        type: 'TOGGLE_PAGE_LOADER',
        payload: bool
    }
}
export const toggleAuth = value =>{
    return{
        type: 'TOGGLE_AUTH',
        payload: value
    }
}
export const authToggleLoader = bool=>{
    return{
        type: 'AUTH_TOGGLE_FETCH_LOADER',
        payload: bool
    }
}

export const writeProfile = id=>{
    return async dispatch =>{
        dispatch(authToggleLoader(true))
       await userGetByIdReq(id).then((resp)=>{
           dispatch(writeUsername(resp))
        })
        dispatch(authToggleLoader(false))
    }
}
// export const authRefresh = data=> {
//     return async dispatch => {
//         dispatch(toggleLoader(true))
//         await authRefreshReq(data).then(async response => {
//             localStorage.setItem("accessToken", response.result.body.accessToken)
//             localStorage.setItem("tokenExpirationTime", response.result.body.tokenExpirationTime)
//             localStorage.setItem("refreshExpirationTime", response.result.body.refreshExpirationTime)
//             localStorage.setItem("id", response.result.body.id)
//             localStorage.setItem("refreshToken", response.result.body.refreshToken)
//             await userGetByIdReq(response.result.body.id).then(response=>{
//                 console.log(response)
//                 dispatch(writeUsername(response.result.phoneNumber))
//             })
//             console.log(response)
//             dispatch(toggleAuth(true))
//         }).catch(err => console.log(err))
//         dispatch(toggleLoader(false))
//     }
// }
export const authSignIn = data =>{
    return async dispatch =>{
        dispatch(authToggleLoader(true))
        await authReq(data).then(response=>{
            //if(response.status.ok){
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("id", response.data.id)
                dispatch(authToggleLoader(true))
           // }else {
            //    dispatch(writeAuthMessage('Неверно введены данные.'))
           // }
            //     await userGetByIdReq(response.result.body.id).then(response=>{
            //         console.log(response)
            //         dispatch(writeUsername(response.result.phoneNumber))
            //     })
            //
            //     setTimeout(()=>dispatch(togglePageLoader(false)),4000)
           // }
                //
        })
        dispatch(authToggleLoader(false))
    }
}


