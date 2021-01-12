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
import {toClearImageArray} from "../../utils/toClearImageArray";
import {base64Image} from "../../utils/templates/toClearImageArray";
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



export const getSpecialists = ()=> {
    return async dispatch => getTemplate(dispatch, specialistGetReq, WRITE_SPECIALISTS, toggleLoader)
}
export const getSpecialistById = (id)=> {
    return async dispatch => getTemplate(dispatch,specialistGetByIdReq, WRITE_SPECIALIST_BY_ID, toggleLoader,id)
}
export const createSpecialist = data=>{
    let formData = new FormData()
    formData.append('name', data.name)
    formData.append('subcategoryID', data.subcategory)
    toClearImageArray(data.photosForm).map(item=>{
        formData.append('photosForm', item);
    })
    formData.append('avatar', toClearImageArray(data.avatar));
    formData.append('description', data.description)
    formData.append('street', data.street.street)
    formData.append('addressComment', data.street.addressComment)
    formData.append('cityID', data.cityID)
    formData.append('latitude', data.street.latitude)
    formData.append('longitude', data.street.longitude)
    formData.append('url', data.url)
    formData.append('modes', data.modes)
    formData.append('type', data.type)
    formData.append('viezd', data.viezd)
    formData.append('links.webSite', data.webSite)
    formData.append('links.whatsApp', data.whatsApp)
    formData.append('links.telegram', data.telegram)
    formData.append('links.instagram', data.instagram)
    formData.append('links.facebook', data.facebook)
    formData.append('links.email', data.email)
    formData.append('modes', JSON.stringify(data.modes))
    formData.append('services', JSON.stringify(data.services))
    for (let pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
    }
    return async dispatch => {
        dispatch(toggleLoader(true))
        await specialistPostReq(formData)
        dispatch(toggleLoader(false))
    }

}
export const deleteSpecialist = id =>{
    return async dispatch =>  deleteTemplate(dispatch,specialistDelReq,id,toggleLoader,DELETED_SPECIALIST)
}
export const updateSpecialist = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,specialistUpdReq,data,UPDATED_SPECIALIST,toggleLoader,id)
}






