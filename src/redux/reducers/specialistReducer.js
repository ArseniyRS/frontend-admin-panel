import {
    WRITE_SPECIALISTS,
    WRITE_SPECIALIST_BY_ID,
    ADDED_SPECIALIST,
    DELETED_SPECIALIST,
    UPDATED_SPECIALIST, SPECIALIST_TOGGLE_FETCH_LOADER,
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
import {updateItemInStore} from "../../utils/templates/updateItemInStore";
import {toClearImageArray} from "../../utils/toClearImageArray";

const initialState={
    specialists: [],
    specialistById: {},
    specialistFetchLoader: false
}


export const specialistReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SPECIALIST_TOGGLE_FETCH_LOADER:
            return{
                ...state,
                specialistFetchLoader: action.payload
            }
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
export const specialistToggleLoader = bool=>{
    return{
        type: 'SPECIALIST_TOGGLE_FETCH_LOADER',
        payload: bool
    }
}
export const clearSpecialist = ()=>{
    return{
        type: WRITE_SPECIALIST_BY_ID,
        action: {}
    }
}

export const getSpecialists = ()=> {
    return async dispatch => getTemplate(dispatch, specialistGetReq, WRITE_SPECIALISTS, specialistToggleLoader)
}
export const getSpecialistById = (id)=> {
    return async dispatch => getTemplate(dispatch,specialistGetByIdReq, WRITE_SPECIALIST_BY_ID, specialistToggleLoader,id)
}
export const createSpecialist = data=>{
    let formData = new FormData()
    // toClearImageArray(data.photosForm).map(item=>{
    //     formData.append('photosForm', item);
    // })
    // formData.append('avatar', toClearImageArray(data.avatar));
   const newData = {
       subcategoryID: data.subcategory,
       type:data.type,
       viezd: data.viezd,
       name: data.name,
       description: data.description,
       street: data.street.street,
       addressComment: data.street.addressComment,
       cityID:  data.cityID,
       latitude: data.street.latitude,
       longitude: data.street.longitude,
       url: data.email,
       links: {
           phone: data.phone,
           webSite: data.webSite,
           whatsApp: data.whatsApp,
           facebook: data.facebook,
           telegram: data.telegram,
           instagram: data.instagram,
           email: data.email
       },
       services:data.services,
       ///modes: data.modes
   }
    return async dispatch => {
        dispatch(specialistToggleLoader(true))
        await specialistPostReq(newData).then(response=>{
            console.log(response)
        })
        dispatch(specialistToggleLoader(false))
    }

}
export const deleteSpecialist = id =>{
    return async dispatch =>  deleteTemplate(dispatch,specialistDelReq,id,specialistToggleLoader,DELETED_SPECIALIST)
}
export const updateSpecialist = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,specialistUpdReq,data,UPDATED_SPECIALIST,specialistToggleLoader,id)
}






