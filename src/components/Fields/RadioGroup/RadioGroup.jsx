import React from 'react'
import {Field} from "formik";




const RadioGroup = props=>{

    const elements = props.label.map((item,index)=>{
        return(
            <div className={'radio_group_field'}>
                <input type="radio" name={props.name} value={index} checked={props.value === index} onChange={()=>props.setFieldValue(props.name,index)} />
            <label key={index} htmlFor={props.name}> {props.label[index]}</label>
            </div>
        )
        })


    return(
        <div className={'radio_group_field-container'}>
            {elements}
            </div>
    )
}

export default RadioGroup