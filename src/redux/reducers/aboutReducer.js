import {
    WRITE_ABOUT,
    WRITE_ABOUT_BY_ID,
    ADDED_ABOUT,
    DELETED_ABOUT,
    UPDATED_ABOUT,
} from './types'
import {
    aboutDelReq,aboutGetByIdReq,
    aboutGetReq,
    aboutPostReq,
    aboutUpdReq,
} from "../../utils/Requests";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./authReducer";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";

const initialState={
    about: [],
    aboutById: {},
}


export const aboutReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_ABOUT:
            return{
                ...state,
                about: action.payload
            }

        case WRITE_ABOUT_BY_ID:
            return{
                ...state,
                aboutById: action.payload
            }
        case ADDED_ABOUT:
            return {
                ...state,
                about: [
                    ...state.about,
                    action.payload]
            }
        case DELETED_ABOUT:
            return{
                ...state,
                about: updateItemInStore(state.about,action.payload,'delete')
            }
        case UPDATED_ABOUT:
            return {
                ...state,
                about: updateItemInStore(state.about,action.payload,'update')
            }
        default:{
            return{
                ...state
            }
        }
    }
}


export const clearAbout = ()=>{
    return{
        type: WRITE_ABOUT_BY_ID,
        action: undefined
    }
}

export const getAbout = ()=> {
    return async dispatch => getTemplate(dispatch, aboutGetReq, WRITE_ABOUT, toggleLoader)
}
export const getAboutById = (id)=> {
    return async dispatch => getTemplate(dispatch, aboutGetByIdReq, WRITE_ABOUT_BY_ID, toggleLoader,id)
}
export const createAbout = data=>{

    return async dispatch => createOrChangeTemplate(dispatch,aboutPostReq,data,ADDED_ABOUT,toggleLoader)
}
export const deleteAbout = id =>{
    return async dispatch =>  deleteTemplate(dispatch,aboutDelReq,id,toggleLoader,DELETED_ABOUT)
}
export const updateAbout = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,aboutUpdReq,data,UPDATED_ABOUT,toggleLoader,id)
}

