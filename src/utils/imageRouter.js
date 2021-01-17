export const imageRouter =(link,index=0)=>{
    return link ? `http://46.101.99.48:8000${link.replace('Files','images')}` : undefined
}