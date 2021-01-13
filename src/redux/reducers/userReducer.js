import {
    DELETED_USER,
    UPDATED_USER,
    WRITE_USER_BY_ID,
    WRITE_USERS,
    ADDED_USER, AUTH_TOGGLE_FETCH_LOADER, USER_TOGGLE_FETCH_LOADER,
} from './types'
import {
    adminPostReq, specialistPostReq,
    superadminPostReq,
    userDelByIdReq,
    userGetByIdReq, userPostReq, usersGetReq, userUpdReq,
} from "../../utils/Requests";
import {getTemplate} from "../../utils/templates/getTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./authReducer";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {toClearImageArray} from "../../utils/toClearImageArray";

const initialState={
    users: [],
    userById: {},
    userFetchLoader: false
}


export const userReducer = (state=initialState,action)=>{
    switch (action.type) {
        case USER_TOGGLE_FETCH_LOADER:
            return{
                ...state,
                userFetchLoader: action.payload
            }
        case WRITE_USERS:
            return{
                ...state,
                users: action.payload
            }
        case WRITE_USER_BY_ID:
            return{
                ...state,
                userById: action.payload
            }
        case DELETED_USER:
            return{
                ...state,
                users: updateItemInStore(state.users,action.payload,'delete')
            }
        case ADDED_USER:
            return {
                ...state,
                users: [
                    ...state.users,
                    action.payload]
            }
        case UPDATED_USER:
            return {
                ...state,
                users: updateItemInStore(state.users,action.payload,'update')
            }
        default:{
            return{
                ...state
            }
        }
    }
}
export const userToggleLoader = bool=>{
    return{
        type: 'USER_TOGGLE_FETCH_LOADER',
        payload: bool
    }
}

export const clearUser = ()=>{
    return{
        type: WRITE_USER_BY_ID,
        action: {}
    }
}
export const getUsers = ()=> {
    return async dispatch => getTemplate(dispatch, usersGetReq, WRITE_USERS, userToggleLoader)
}
export const getUserById = (id)=> {
    return async dispatch => getTemplate(dispatch, userGetByIdReq, WRITE_USER_BY_ID, userToggleLoader,id)
}
export const deleteUser = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,userDelByIdReq,id[i],userToggleLoader,DELETED_USER)
        }
    }
}
export const createUser = (data)=> {
    const requestArray = [userPostReq, adminPostReq, superadminPostReq]
    const fd = new FormData();
    fd.append('avatar', toClearImageArray(data.avatarPath));
    fd.append('name', data.name);
    fd.append('surname', data.surname);
    fd.append('email', data.email);
    fd.append('gender', data.gender)
    fd.append('cityID', data.cityID)
    fd.append('phoneNumber', data.phoneNumber)
    fd.append('instagram', data.instagram)
    fd.append('patronymic', data.patronymic);
    fd.append('birthDate', '0001-01-01T00:00:00');
    fd.append('password', data.password);
    return async dispatch => {
        dispatch(userToggleLoader(true))
        await requestArray[parseInt(data.type)](fd).then(resp => {
            const copyData = resp.data
            copyData["key"] = copyData.id
            dispatch({type: ADDED_USER, payload: copyData})
            dispatch(userToggleLoader(false))
        })
    }
}
export const updateUser = (id,data)=>{
    const fd = new FormData();
    fd.append('avatar', toClearImageArray(data.avatarPath));
    fd.append('name', data.name);
    fd.append('surname', data.surname);
    fd.append('email', data.email);
    fd.append('gender', data.gender)
    fd.append('cityID', data.cityID)
    fd.append('phoneNumber', data.phoneNumber)
    fd.append('instagram', data.instagram)
    fd.append('patronymic', data.patronymic);
    fd.append('birthDate', '0001-01-01T00:00:00');
    return async dispatch =>
    {
        dispatch(userToggleLoader(true))
        await userUpdReq(fd,id).then(resp=>{
            const copyData =  resp.data
            copyData["key"] = copyData.id
            dispatch({type:UPDATED_USER,payload:copyData})
    })
        dispatch(userToggleLoader(false))
    }

}


