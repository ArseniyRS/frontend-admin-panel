export const getTemplate = async (dispatch,getFunc, actionType,toggleLoader,id=null)=>{
    dispatch(toggleLoader(true));
    let response = await getFunc(id);
    let changedResponse =[]
    if(Array.isArray(response?.data) || Array.isArray(response)) {
        if (response?.data) {
            changedResponse = response.data.map(item => {
                item["key"] = item.id
                return item
            })
        } else {
            changedResponse = response.map(item => {
                item["key"] = item.id
                return item
            })
        }
    }else{
        changedResponse=response
        changedResponse['key']=response.id
    }
   // console.log(changedResponse)
    dispatch({type:actionType,payload: changedResponse})
    dispatch(toggleLoader(false))

}