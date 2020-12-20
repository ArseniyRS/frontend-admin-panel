import {
    WRITE_SPECIALISTS,
    WRITE_SPECIALIST_BY_ID,
    ADDED_SPECIALIST,
    DELETED_SPECIALIST,
    UPDATED_SPECIALIST,
} from './types'
import {
    specialistDelReq,
    specialistGetByIdReq,
    specialistGetReq,
    specialistPostReq,
    specialistUpdReq
} from "../../utils/Requests";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./authReducer";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";
//import {toClearImageArray} from "../../utils/templates/toClearImageArray";

const initialState={
    specialists: [],
    specialistById: {}
}


export const specialistReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_SPECIALISTS:
            return{
                ...state,
                specialists: action.payload
            }
        case WRITE_SPECIALIST_BY_ID:
            return{
                ...state,
                specialistById: action.payload
            }
        case ADDED_SPECIALIST:
            return {
                ...state,
                specialists: [
                    ...state.specialists,
                    action.payload]
            }
        case DELETED_SPECIALIST:
            return{
                ...state,
                specialists: updateItemInStore(state.specialists,action.payload,'delete')
            }
        case UPDATED_SPECIALIST:
            return {
                ...state,
                specialists: updateItemInStore(state.specialists,action.payload,'update')
            }
        default:{
            return{
                ...state
            }
        }
    }
}


export const clearSpecialist = ()=>{
    return{
        type: WRITE_SPECIALIST_BY_ID,
        action: undefined
    }
}
export const getSpecialists = ()=> {
    return async dispatch => getTemplate(dispatch, specialistGetReq, WRITE_SPECIALISTS, toggleLoader)
}
export const getSpecialistById = (id)=> {
    return async dispatch => getTemplate(dispatch,specialistGetByIdReq, WRITE_SPECIALIST_BY_ID, toggleLoader,id)
}
export const createSpecialist = data=>{

    return async dispatch => createOrChangeTemplate(dispatch,specialistPostReq,data,ADDED_SPECIALIST,toggleLoader)
}
export const deleteSpecialist = id =>{
    return async dispatch =>  deleteTemplate(dispatch,specialistDelReq,id,toggleLoader,DELETED_SPECIALIST)
}
export const updateSpecialist = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,specialistUpdReq,data,UPDATED_SPECIALIST,toggleLoader,id)
}

