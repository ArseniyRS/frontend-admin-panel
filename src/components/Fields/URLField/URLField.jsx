import React from 'react'
import {Field} from "formik";
import {urlSVG} from "../../../assets";
import {Link} from "react-router-dom";
import './URLField.css'


const URLField = props=>{
    return(
        <div className={'urlField'}>
            <input name={props.name} placeholder={props.placeholder}/>
            <Link to={props.value} target="_blank">
                <img src={urlSVG} alt=""/>
            </Link>
        </div>
    )
}

export default URLField