import {
    WRITE_RULE,
    WRITE_RULE_BY_ID,
    ADDED_RULE,
    DELETED_RULE,
    UPDATED_RULE,
} from './types'
import {
    ruleDelReq,
    ruleGetByIdReq,
    ruleGetReq,
    rulePostReq,
    ruleUpdReq,
} from "../../utils/Requests";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./authReducer";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";

const initialState={
    rules: [],
    ruleById: {},
}


export const ruleReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_RULE:
            return{
                ...state,
                rules: action.payload
            }

        case WRITE_RULE_BY_ID:
            return{
                ...state,
                ruleById: action.payload
            }
        case ADDED_RULE:
            return {
                ...state,
                rules: [
                    ...state.rules,
                    action.payload]
            }
        case DELETED_RULE:
            return{
                ...state,
                rules: updateItemInStore(state.rules,action.payload,'delete')
            }
        case UPDATED_RULE:
            return {
                ...state,
                rules: updateItemInStore(state.rules,action.payload,'update')
            }
        default:{
            return{
                ...state
            }
        }
    }
}


export const clearRule = ()=>{
    return{
        type: WRITE_RULE_BY_ID,
        action: undefined
    }
}

export const getRule = ()=> {
    return async dispatch => getTemplate(dispatch, ruleGetReq, WRITE_RULE, toggleLoader)
}
export const getRuleById = (id)=> {
    return async dispatch => getTemplate(dispatch, ruleGetByIdReq, WRITE_RULE_BY_ID, toggleLoader,id)
}
export const createRule = data=>{

    return async dispatch => createOrChangeTemplate(dispatch,rulePostReq,data,ADDED_RULE,toggleLoader)
}
export const deleteRule = id =>{
    return async dispatch =>  deleteTemplate(dispatch,ruleDelReq,id,toggleLoader,DELETED_RULE)
}
export const updateRule = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,ruleUpdReq,data,UPDATED_RULE,toggleLoader,id)
}

