import {
    WRITE_QAS,
    WRITE_QAS_BY_ID,
    ADDED_QAS,
    DELETED_QAS,
    UPDATED_QAS,
} from './types'
import {
    qasDelReq,
    qasGetByIdReq,
    qasGetReq,
    qasPostReq,
    qasUpdReq,
} from "../../utils/Requests";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./authReducer";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";

const initialState={
    qas: [],
    qasById: {},
}


export const qasReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_QAS:
            return{
                ...state,
                qas: action.payload
            }

        case WRITE_QAS_BY_ID:
            return{
                ...state,
                qasById: action.payload
            }
        case ADDED_QAS:
            return {
                ...state,
                qas: [
                    ...state.qas,
                    action.payload]
            }
        case DELETED_QAS:
            return{
                ...state,
                qas: updateItemInStore(state.qas,action.payload,'delete')
            }
        case UPDATED_QAS:
            return {
                ...state,
                qas: updateItemInStore(state.qas,action.payload,'update')
            }
        default:{
            return{
                ...state
            }
        }
    }
}


export const clearQas = ()=>{
    return{
        type: WRITE_QAS_BY_ID,
        action: undefined
    }
}

export const getQas = ()=> {
    return async dispatch => getTemplate(dispatch, qasGetReq, WRITE_QAS, toggleLoader)
}
export const getQasById = (id)=> {
    return async dispatch => getTemplate(dispatch, qasGetByIdReq, WRITE_QAS_BY_ID, toggleLoader,id)
}
export const createQas = data=>{

    return async dispatch => createOrChangeTemplate(dispatch,qasPostReq,data,ADDED_QAS,toggleLoader)
}
export const deleteQas = id =>{
    return async dispatch =>  deleteTemplate(dispatch,qasDelReq,id,toggleLoader,DELETED_QAS)
}
export const updateQas = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,qasUpdReq,data,UPDATED_QAS,toggleLoader,id)
}

