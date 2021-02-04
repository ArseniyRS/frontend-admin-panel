import {
    WRITE_CATEGORIES,
    WRITE_CATEGORY_BY_ID,
    ADDED_CATEGORY,
    DELETED_CATEGORY,
    UPDATED_CATEGORY,
    WRITE_SUBCATEGORIES, USER_TOGGLE_FETCH_LOADER, CATEGORY_TOGGLE_FETCH_LOADER
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
import {updateItemInStore} from "../../utils/templates/updateItemInStore";
import {toClearImageArray} from "../../utils/toClearImageArray";

const initialState={
    categories: [],
    categoryById: {},
    subcategories: [],
    categoryFetchLoader: false
}


export const categoryReducer = (state=initialState,action)=>{
    switch (action.type) {
        case CATEGORY_TOGGLE_FETCH_LOADER:
            return{
                ...state,
                categoryFetchLoader: action.payload
            }
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
export const categoryToggleLoader = bool=>{
    return{
        type: 'CATEGORY_TOGGLE_FETCH_LOADER',
        payload: bool
    }
}

export const clearCategory = ()=>{
    return{
        type: WRITE_CATEGORY_BY_ID,
        action: {}
    }
}
export const getSubCategories = ()=>{
    return async dispatch =>getTemplate(dispatch,subcategoryGetReq,WRITE_SUBCATEGORIES,categoryToggleLoader)
}
export const getCategory = ()=> {
    return async dispatch => getTemplate(dispatch, categoryGetReq, WRITE_CATEGORIES, categoryToggleLoader)
}
export const getCategoryById = (id)=> {
    return async dispatch => getTemplate(dispatch, categoryGetByIdReq, WRITE_CATEGORY_BY_ID, categoryToggleLoader,id)
}
export const createCategory = data=>{
    const fd = new FormData()
    fd.append('avatar', toClearImageArray(data.avatar));
    fd.append('name', data.name);
    fd.append('popular', data.popular);
    data.subcategories.map(item=>fd.append('subcategories',item.name))
        return async dispatch => {
            dispatch(categoryToggleLoader(true))
            await categoryPostReq(fd).then(resp=>{
                const copyData =  resp.data
                copyData["key"] = copyData.id
                delete copyData.id
                dispatch({type:ADDED_CATEGORY,payload:copyData})
            })
            dispatch(categoryToggleLoader(false))
        }
}
export const deleteCategory = id =>{
    return async dispatch =>  deleteTemplate(dispatch,categoryDelReq,id,categoryToggleLoader,DELETED_CATEGORY)
}
export const updateCategory = (id,data) =>{
        const fd = new FormData()
        fd.append('avatar', toClearImageArray(data.avatar));
        fd.append('name', data.name);
        fd.append('popular', data.popular);
        data.subcategories.map(item => fd.append('subcategories', item.name))
        return async dispatch => {
            dispatch(categoryToggleLoader(true))
            await categoryUpdReq(fd, id).then(resp => {
                const copyData = resp.data
                copyData["key"] = copyData.id
                delete copyData.id
                dispatch({type: UPDATED_CATEGORY, payload: copyData})
            })
            dispatch(categoryToggleLoader(false))

    }}
