import React from 'react'
import './Btns.css'
import {Link} from "react-router-dom";
import {addSVG} from '../../assets'

const AddBtn = ({urlToCreate})=>{
    return(
        <Link to={urlToCreate} className='addBtn'><img src={addSVG} alt=""/>Добавить</Link>
    )
}
export default AddBtn