import {
    WRITE_INSTRUCTION,
    ADDED_INSTRUCTION,
} from './types'
import {
    instructionGetReq,
    instructionPostReq,
} from "../../utils/Requests";
import {getTemplate} from "../../utils/templates/getTemplate";
import {toggleLoader} from "./authReducer";
import {toClearImageArray} from "../../utils/toClearImageArray";

const initialState={
    instruction: [],
}


export const instructionReducer = (state=initialState,action)=>{
    switch (action.type) {
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




export const getInstruction = ()=> {
    return async dispatch => getTemplate(dispatch, instructionGetReq, WRITE_INSTRUCTION, toggleLoader)
}
export const createInstruction = data=>{

    let formData = new FormData()
    formData.append('file', toClearImageArray(data.file));
    for (let pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
    }
    return async dispatch => {
        dispatch(toggleLoader(true))
        await instructionPostReq(formData)
        dispatch(toggleLoader(false))
    }
}


