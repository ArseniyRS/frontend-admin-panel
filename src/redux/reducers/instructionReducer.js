import {
    WRITE_INSTRUCTION,
    ADDED_INSTRUCTION, AUTH_TOGGLE_FETCH_LOADER, INSTRUCTION_TOGGLE_FETCH_LOADER, WRITE_CATEGORY_BY_ID,
} from './types'
import {
    instructionGetReq,
    instructionPostReq,
} from "../../utils/Requests";
import {getTemplate} from "../../utils/templates/getTemplate";
import {toClearImageArray} from "../../utils/toClearImageArray";

const initialState={
    instruction: [],
    instructionFetchLoader: false,
}


export const instructionReducer = (state=initialState,action)=>{
    switch (action.type) {
        case INSTRUCTION_TOGGLE_FETCH_LOADER:
            return{
                ...state,
                instructionFetchLoader: action.payload
            }
        case WRITE_INSTRUCTION:
            return{
                ...state,
                instruction: action.payload
            }

        default:{
            return{
                ...state
            }
        }
    }
}

export const instructionToggleLoader = bool=>{
    return{
        type: 'INSTRUCTION_TOGGLE_FETCH_LOADER',
        payload: bool
    }
}

export const clearInstruction = ()=>{
    return{
        type: WRITE_INSTRUCTION,
        action: []
    }
}

export const getInstruction = ()=> {
    return async dispatch => getTemplate(dispatch, instructionGetReq, WRITE_INSTRUCTION, instructionToggleLoader)
}
export const createInstruction = data=>{

    let formData = new FormData()
    formData.append('file', toClearImageArray(data.file));
    for (let pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
    }
    return async dispatch => {
        dispatch(instructionToggleLoader(true))
        await instructionPostReq(formData)
        dispatch(instructionToggleLoader(false))
    }
}


