export const updateItemInStore = (state,data,type)=>{
    let idx = -1;
    let newArrayData = [...state]
    switch (type) {
        case 'delete':
            data.map(mapItem=>{
                idx = newArrayData.findIndex((item)=>item.key === parseInt(mapItem))
                newArrayData = [...newArrayData.slice(0, idx), ...newArrayData.slice(idx + 1)]
            })
            return newArrayData
        case 'update':
            idx = state.findIndex(item=>item.id === parseInt(data.id))
            return [...newArrayData.slice(0, idx),data, ...newArrayData.slice(idx + 1)]
        default:{
            return
        }
    }
}