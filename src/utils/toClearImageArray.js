export const toClearImageArray = data => {
   if(data.length && data.length!==1){
       return data.map(item=>item?.file ? item.file: item)
   }
   if(data.length===1){
       const file = data.map(item=>item?.file ? item.file : item)
       return file[0]
   }
   else{return null}
}