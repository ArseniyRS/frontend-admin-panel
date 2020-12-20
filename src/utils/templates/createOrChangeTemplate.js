

export const createOrChangeTemplate = async (
    dispatch,
    func,
    data,
    actionType,
    toggleLoader,
    id=''

    )=>{
    dispatch(toggleLoader);
    await func(data,id).then(resp=>{
       const copyData =  resp.data
        copyData["key"] = copyData.id
        delete copyData.id
        dispatch({type:actionType,payload:copyData})
    }).catch(err=>console.log(err.response))
    dispatch(toggleLoader)
}