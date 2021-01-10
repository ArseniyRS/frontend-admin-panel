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
export const categoryUpdReq = (data,id)=>instance.put(`/Admin/Category/Subcategory/${id}`,data,tokenGetter())

export const qasGetReq = ()=>instance.get('/Admin/qas',tokenGetter()).then(response=>response.data)
export const qasGetByIdReq = (id)=>instance.get(`/Admin/qas/${id}`,tokenGetter()).then(response=>response.data)
export const qasPostReq = (data)=>instance.post('/Admin/qas',data,tokenGetter())
export const qasDelReq = (id)=>instance.delete(`/Admin/qas`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} ,data : id })
export const qasUpdReq = (data,id)=>instance.put(`/Admin/qas/${id}`,data,tokenGetter())

export const ruleGetReq = ()=>instance.get('/Admin/Rules',tokenGetter()).then(response=>response.data)
export const ruleGetByIdReq = (id)=>instance.get(`/Admin/Rules/${id}`,tokenGetter()).then(response=>response.data)
export const rulePostReq = (data)=>instance.post('/Admin/Rules',data,tokenGetter())
export const ruleDelReq = (id)=>instance.delete(`/Admin/Rules`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} ,data : id })
export const ruleUpdReq = (data,id)=>instance.put(`/Admin/Rules/${id}`,data,tokenGetter())


export const aboutGetReq = ()=>instance.get('/Admin/AboutApps',tokenGetter()).then(response=>response.data)
export const aboutGetByIdReq = (id)=>instance.get(`/Admin/AboutApps/${id}`,tokenGetter()).then(response=>response.data)
export const aboutPostReq = (data)=>instance.post('/Admin/AboutApps',data,tokenGetter())
export const aboutDelReq = (id)=>instance.delete(`/Admin/AboutApps`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} ,data : id })
export const aboutUpdReq = (data,id)=>instance.put(`/Admin/AboutApps/${id}`,data,tokenGetter())

export const specialistGetReq = ()=>instance.get('/Admin/Companies',tokenGetter()).then(response=>response.data)
export const specialistGetByIdReq = (id)=>instance.get(`/Admin/Companies/${id}`).then(response=>response.data)
export const specialistPostReq = (data)=>{
    console.log('req called')
    console.log(data)
    return instance.post('/Personalpage/Companies',
        data,
      {headers: { "Authorization" : `Bearer ${localStorage.getItem('token')}`,'content-type': 'multipart/form-data' }})
        .then( resp=>{
        console.log(resp)
    }).catch(err=>console.log(err.response))
}
export const specialistDelReq = (id)=>instance.delete(`/Admin/Companies`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} ,data : id })
export const specialistUpdReq = (data,id)=>instance.put(`/Admin/Companies/${id}`,data)

export const usersGetReq = ()=>instance.get('/Admin/Users',tokenGetter()).then(response=>response.data)
export const userGetByIdReq = (id)=>instance.get(`/Admin/Users/${id}`,tokenGetter()).then(response=>response.data)
export const superadminPostReq = (data)=>instance.post('/Admin/Createsuperadmin',data,
    {headers: { "Authorization" : `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data' }}).then( resp=>{
    console.log(resp)
}).catch(err=>console.log(err.response))
export const adminPostReq = (data)=>instance.post('/Admin/Createadmin',
    data,
    {headers: {   "Authorization" : `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'multipart/form-data' }})
    .then( resp=>{
    console.log(resp)
}).catch(err=>console.log(err.response))
export const userPostReq = (data)=>instance.post('/User/Register',data,
    {headers:  {'Content-Type': 'multipart/form-data' }})
    .then( resp=>{
    console.log(resp)
}).catch(err=>console.log(err.response))
export const userDelByIdReq = (id)=>instance.delete(`/Admin/Users`,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} ,data : id })
export const userUpdReq = (data,id)=>instance.put(`/Admin/Users/${id}`,data,tokenGetter())