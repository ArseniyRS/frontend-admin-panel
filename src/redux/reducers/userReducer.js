import {
    DELETED_USER,
    UPDATED_USER,
    WRITE_USER_BY_ID,
    WRITE_USERS,
    ADDED_USER,
    DELETED_CATEGORY,
    UPDATED_CATEGORY, ADDED_CATEGORY
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
    userById: {}
}


export const userReducer = (state=initialState,action)=>{
    switch (action.type) {
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
export const clearUser = ()=>{
    return{
        type: WRITE_USER_BY_ID,
        action: undefined
    }
}
export const getUsers = ()=> {
    return async dispatch => getTemplate(dispatch, usersGetReq, WRITE_USERS, toggleLoader)
}
export const getUserById = (id)=> {
    return async dispatch => getTemplate(dispatch, userGetByIdReq, WRITE_USER_BY_ID, toggleLoader,id)
}
export const deleteUser = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,userDelByIdReq,id[i],toggleLoader,DELETED_USER)
        }
    }
}
export const createUser = (data)=>{
    const requestArray = [userPostReq,adminPostReq,superadminPostReq]
    const img = toClearImageArray(data.avatarPath)
    console.log(img)
    // let formData = new FormData()
    // //formData.append('Avatar',img[0]);
    // formData.append('name', data.name)
    // formData.append('surname', data.surname)
    // formData.append('patronymic', data.patronymic)
    // formData.append('birthDate', '0001-01-01T00:00:00')
    // formData.append('gender', data.gender)
    // formData.append('cityID',data.cityID)
    // formData.append('phoneNumber', data.phoneNumber)
    // formData.append('instagram',data.instagram)
    // formData.append('email ', data.email)
    // formData.append('password', data.password)

    const fd = new FormData();
    fd.append('avatar',img[0]);
    fd.append('name', data.name);
    fd.append('surname', data.surname);
    fd.append('email', data.email);
    fd.append('gender', data.gender)
    fd.append('cityID',data.cityID)
    fd.append('phoneNumber', data.phoneNumber)
    fd.append('instagram',data.instagram)
    fd.append('patronymic', data.patronymic);
    fd.append('birthDate', '0001-01-01T00:00:00');
    fd.append('password', data.password);
    for (let pair of fd.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
    }
    return async dispatch => {
        dispatch(toggleLoader(true))
        await requestArray[parseInt(data.type)](fd)
        dispatch(toggleLoader(false))
    }
}
export const updateUser = (id,data)=>{
    return async dispatch =>createOrChangeTemplate(dispatch,userUpdReq,data,UPDATED_USER,toggleLoader,id)
}


