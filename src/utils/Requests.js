import * as axios from 'axios'
const tokenGetter = ()=>{ return { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} }}
console.log(tokenGetter())
const instance = axios.create({
    baseURL: 'http://46.101.99.48:8000',
    //headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`}
})
export const authReq = (data)=>instance.post('/User/SignIn',data)
//export const authRefreshReq = (data)=>instance.post('refresh',data).then(response=>response.data)

export const statisticGetReq = ()=>instance.get('/Admin/Statistics',tokenGetter()).then(response=>response.data)
export const lastActionsGetReq = ()=>instance.get('/Admin/Actions',tokenGetter()).then(response=>response.data)
export const citiesGetReq = ()=>instance.get('/Admin/Cities',tokenGetter()).then(response=>response.data)


export const categoryGetReq = ()=>instance.get('/Admin/Categories',tokenGetter()).then(response=>response.data)
export const subcategoryGetReq = ()=>instance.get('/Admin/Subcategories',tokenGetter()).then(response=>response.data)
export const categoryGetByIdReq = (id)=>instance.get(`/Admin/Categories/${id}`,tokenGetter()).then(response=>response.data)
export const categoryPostReq = (data)=>instance.post('/Admin/Category/Subcategory',data,tokenGetter())
export const categoryDelReq = (id)=>instance.delete(`/Admin/Category`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} ,data : id })
export const categoryUpdReq = (data,id)=>instance.put(`categories/${id}`,data,tokenGetter())
//tokenGetter(),id


export const specialistGetReq = ()=>instance.get('/Admin/Companies',tokenGetter()).then(response=>response.data)
export const specialistGetByIdReq = (id)=>instance.get(`/Admin/Companies/${id}`).then(response=>response.data)
export const specialistPostReq = (data)=>instance.post('/Admin/Companies/Subcategory',JSON.parse(data),tokenGetter())
export const specialistDelReq = (id)=>instance.delete(`/Admin/Companies`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} ,data : id })
export const specialistUpdReq = (data,id)=>instance.put(`/Admin/Companies/${id}`,data)

export const usersGetReq = ()=>instance.get('/Admin/Users',tokenGetter()).then(response=>response.data)
export const userGetByIdReq = (id)=>instance.get(`/Admin/Users/${id}`,tokenGetter()).then(response=>response.data)
//export const specialistPostReq = (data)=>instance.post('/Admin/Companies/Subcategory',JSON.parse(data),tokenGetter())
export const userDelByIdReq = (id)=>instance.delete(`/Admin/Users`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} ,data : id })
export const userUpdReq = (data,id)=>instance.put(`/Admin/Users/${id}`,data,tokenGetter())