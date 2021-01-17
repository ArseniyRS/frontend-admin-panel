import React from 'react'
import './FieldWithIcon.css'


const FieldWithIcon = props=>{
    return(
        <span className={'fieldWithIcon'}>
            <img src={props.iconInput} alt=""/>
            <input type="text" name={props.name} placeholder={props.placeholder} value={props.value} onChange={(e)=>props.setFieldValue(props.name,e.target.value)}/>
        </span>
    )
}

export default FieldWithIcon