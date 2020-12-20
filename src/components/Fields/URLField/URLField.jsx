import React from 'react'
import {Field} from "formik";
import {urlSVG} from "../../../assets";


const URLField = props=>{
    return(
        <div className={'urlField'}><Field name={props.name} placeholder={props.placeholder}/><img src={urlSVG} alt=""/></div>
    )
}

export default URLField