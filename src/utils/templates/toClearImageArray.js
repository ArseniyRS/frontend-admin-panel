export const toClearImageArray = data =>  data.map(item=>item?.file ? item.file: item)

export const base64Image = data=>data.map(item=>item.data_url)