import {
    WRITE_RULE,
    WRITE_RULE_BY_ID,
    ADDED_RULE,
    DELETED_RULE,
    UPDATED_RULE, WRITE_QAS_BY_ID, QAS_TOGGLE_FETCH_LOADER, RULE_TOGGLE_FETCH_LOADER,
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
    ruleFetchLoader: false
}


export const ruleReducer = (state=initialState,action)=>{
    switch (action.type) {
        case RULE_TOGGLE_FETCH_LOADER:
            return{
                ...state,
                ruleFetchLoader: action.payload
            }
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

export const ruleToggleLoader = bool=>{
    return{
        type: 'RULE_TOGGLE_FETCH_LOADER',
        payload: bool
    }
}


export const clearRule = ()=>{
    return{
        type: WRITE_RULE_BY_ID,
        action: {}
    }
}

export const getRule = ()=> {
    return async dispatch => getTemplate(dispatch, ruleGetReq, WRITE_RULE, ruleToggleLoader)
}
export const getRuleById = (id)=> {
    return async dispatch => getTemplate(dispatch, ruleGetByIdReq, WRITE_RULE_BY_ID, ruleToggleLoader,id)
}
export const createRule = data=>{

    return async dispatch => createOrChangeTemplate(dispatch,rulePostReq,data,ADDED_RULE,ruleToggleLoader)
}
export const deleteRule = id =>{
    return async dispatch =>  deleteTemplate(dispatch,ruleDelReq,id,ruleToggleLoader,DELETED_RULE)
}
export const updateRule = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,ruleUpdReq,data,UPDATED_RULE,ruleToggleLoader,id)
}

