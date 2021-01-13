import {
    WRITE_ABOUT,
    WRITE_ABOUT_BY_ID,
    ADDED_ABOUT,
    DELETED_ABOUT,
    UPDATED_ABOUT, AUTH_TOGGLE_FETCH_LOADER, ABOUT_TOGGLE_FETCH_LOADER,
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
    aboutFetchLoader: false,
}


export const aboutReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ABOUT_TOGGLE_FETCH_LOADER:
            return{
                ...state,
                aboutFetchLoader: action.payload
            }
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

export const aboutToggleLoader = bool=>{
    return{
        type: 'ABOUT_TOGGLE_FETCH_LOADER',
        payload: bool
    }
}

export const clearAbout = ()=>{
    return{
        type: WRITE_ABOUT_BY_ID,
        action: {}
    }
}

export const getAbout = ()=> {
    return async dispatch => getTemplate(dispatch, aboutGetReq, WRITE_ABOUT, aboutToggleLoader)
}
export const getAboutById = (id)=> {
    return async dispatch => getTemplate(dispatch, aboutGetByIdReq, WRITE_ABOUT_BY_ID, aboutToggleLoader,id)
}
export const createAbout = data=>{

    return async dispatch => createOrChangeTemplate(dispatch,aboutPostReq,data,ADDED_ABOUT,aboutToggleLoader)
}
export const deleteAbout = id =>{
    return async dispatch =>  deleteTemplate(dispatch,aboutDelReq,id,aboutToggleLoader,DELETED_ABOUT)
}
export const updateAbout = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,aboutUpdReq,data,UPDATED_ABOUT,aboutToggleLoader,id)
}

