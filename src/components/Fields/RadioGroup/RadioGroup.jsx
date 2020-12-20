import React from 'react'
import {Field} from "formik";




const RadioGroup = props=>{

    const elements = props.label.map((item,index)=>{
        return(
            <label key={index}>
                <Field type="radio" name={props.name} value={`${index}`} />
                {props.label[index]}
            </label>
        )
        })


    return(
        <div className={'radio_group_field'}>
            {elements}
            </div>
    )
}

export default RadioGroup