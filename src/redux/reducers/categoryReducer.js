import {
    WRITE_CATEGORIES,
    WRITE_CATEGORY_BY_ID,
    ADDED_CATEGORY,
    DELETED_CATEGORY,
    UPDATED_CATEGORY,
    WRITE_SUBCATEGORIES
} from './types'
import {
    categoryDelReq,
   categoryGetByIdReq,
    categoryGetReq,
    categoryPostReq,
    categoryUpdReq,
    subcategoryGetReq
} from "../../utils/Requests";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./authReducer";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";
//import {toClearImageArray} from "../../utils/templates/toClearImageArray";

const initialState={
    categories: [],
    categoryById: {},
    subcategories: []
}


export const categoryReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_CATEGORIES:
            return{
                ...state,
                categories: action.payload
            }
        case WRITE_SUBCATEGORIES:
            return {
                ...state,
                subcategories: action.payload
            }
        case WRITE_CATEGORY_BY_ID:
            return{
                ...state,
                categoryById: action.payload
            }
        case ADDED_CATEGORY:
            return {
                ...state,
                categories: [
                    ...state.categories,
                    action.payload]
            }
        case DELETED_CATEGORY:
            return{
                ...state,
                categories: updateItemInStore(state.categories,action.payload,'delete')
            }
        case UPDATED_CATEGORY:
            return {
                ...state,
                categories: updateItemInStore(state.categories,action.payload,'update')
            }
        default:{
            return{
                ...state
            }
        }
    }
}


export const clearCategory = ()=>{
    return{
        type: WRITE_CATEGORY_BY_ID,
        action: undefined
    }
}
export const getSubCategories = ()=>{
    return async dispatch =>getTemplate(dispatch,subcategoryGetReq,WRITE_SUBCATEGORIES,toggleLoader)
}
export const getCategory = ()=> {
    return async dispatch => getTemplate(dispatch, categoryGetReq, WRITE_CATEGORIES, toggleLoader)
}
export const getCategoryById = (id)=> {
    return async dispatch => getTemplate(dispatch, categoryGetByIdReq, WRITE_CATEGORY_BY_ID, toggleLoader,id)
}
export const createCategory = data=>{

        return async dispatch => createOrChangeTemplate(dispatch,categoryPostReq,data,ADDED_CATEGORY,toggleLoader)
}
export const deleteCategory = id =>{
    return async dispatch =>  deleteTemplate(dispatch,categoryDelReq,id,toggleLoader,DELETED_CATEGORY)
}
export const updateCategory = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,categoryUpdReq,data,UPDATED_CATEGORY,toggleLoader,id)
}

