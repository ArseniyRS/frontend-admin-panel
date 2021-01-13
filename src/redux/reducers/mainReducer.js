import {
    WRITE_STATISTIC, WRITE_LAST_ACTIONS, WRITE_CITIES,  MAIN_TOGGLE_FETCH_LOADER,
} from './types'
import {
    lastActionsGetReq,
    statisticGetReq,citiesGetReq
} from "../../utils/Requests";
import {getTemplate} from "../../utils/templates/getTemplate";


const initialState={
    statistic: {},
    lastActions: [],
    cities: [],
    mainFetchLoader: false
}


export const mainReducer = (state=initialState,action)=>{
    switch (action.type) {
        case MAIN_TOGGLE_FETCH_LOADER:
            return{
                ...state,
                mainFetchLoader: action.payload
            }
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
export const mainToggleLoader = bool=>{
    return{
        type: 'MAIN_TOGGLE_FETCH_LOADER',
        payload: bool
    }
}

export const getCities = ()=> {
    return async dispatch => getTemplate(dispatch, citiesGetReq, WRITE_CITIES, mainToggleLoader)
}
export const getStatistic = ()=> {
    return async dispatch => getTemplate(dispatch, statisticGetReq, WRITE_STATISTIC, mainToggleLoader)
}

export const getActions = ()=> {
    return async dispatch => getTemplate(dispatch, lastActionsGetReq, WRITE_LAST_ACTIONS, mainToggleLoader)
}


