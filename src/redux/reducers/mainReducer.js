import {
    WRITE_STATISTIC, WRITE_LAST_ACTIONS, WRITE_CITIES,
} from './types'
import {
    lastActionsGetReq,
    statisticGetReq,citiesGetReq
} from "../../utils/Requests";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./authReducer";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";

const initialState={
    statistic: {},
    lastActions: [],
    cities: []
}


export const mainReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_CITIES:
            return{
                ...state,
                cities: action.payload
            }
        case WRITE_STATISTIC:
            return{
                ...state,
                statistic: action.payload
            }

        case WRITE_LAST_ACTIONS:
            return {
                ...state,
                lastActions: [
                    ...state.lastActions,
                    action.payload]
            }

        default:{
            return{
                ...state
            }
        }
    }
}


export const getCities = ()=> {
    return async dispatch => getTemplate(dispatch, citiesGetReq, WRITE_CITIES, toggleLoader)
}
export const getStatistic = ()=> {
    return async dispatch => getTemplate(dispatch, statisticGetReq, WRITE_STATISTIC, toggleLoader)
}

export const getActions = ()=> {
    return async dispatch => getTemplate(dispatch, lastActionsGetReq, WRITE_LAST_ACTIONS, toggleLoader)
}


