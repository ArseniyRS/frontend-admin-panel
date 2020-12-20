import React, {useState} from 'react'
import {Field} from "formik";
import {plusSVG, removeItemSVG} from '../../../assets/'
import './ArrayField.css'




const ArrayField = ({arrayHelpers,placeholder,name,labelObject})=>{
    const [obj,setObj] = useState(arrayHelpers.form.values[name] ? arrayHelpers.form.values[name][0]: [])
    return(
        <div className={'arrayField__container'}>
            {arrayHelpers.form.values[name] &&
            arrayHelpers.form.values[name].length > 0 && (
                arrayHelpers.form.values[name].map((item, index) => {
                    let result =[]
                    if(typeof item ==='object'){
                        for (let k in item) {
                            for (let labelKey in labelObject) {
                                if(labelKey===k) {
                                    result.push(
                                        <div key={`${name}.${index}.${k}`} className={'arrayField__item'}>
                                            <label htmlFor={`${name}.${[index]}.${[k]}`}>{labelObject[labelKey]}</label>
                                            <Field name={`${name}.${[index]}.${[k]}`}/>
                                            {index === (arrayHelpers.form.values[name].length - 1) && (
                                                <>
                                                <div
                                                className={'arrayField__removeItemBtn'}
                                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                            >
                                                <img src={removeItemSVG} alt=""/>
                                            </div>
                                                <div
                                                className={'arrayField__plusItemBtn'}
                                                onClick={() => arrayHelpers.insert(index+1,obj)} // remove a friend from the list
                                                >
                                                <img src={plusSVG} alt=""/>
                                                </div>
                                                </>
                                            )
                                            }
                                        </div>)
                                }}
                            console.log((arrayHelpers.form.values[name].length))
                        }
                        return result
                    }
                    return(

                        <div key={`${name}.${index}`} className={'arrayField__item'}>
                            <Field name={`${name}.${index}`}/>
                            <div
                                className={'arrayField__removeItemBtn'}
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                            >
                                <img src={removeItemSVG} alt=""/>
                            </div>
                            <div
                                className={'arrayField__plusItemBtn'}
                                onClick={() => arrayHelpers.insert(index+1,obj)} // remove a friend from the list
                            >
                                <img src={plusSVG} alt=""/>
                            </div>
                        </div>
                    )})
            )
            }
            {(arrayHelpers.form.values[name]?.length=== 0) &&
            <div className={'arrayField__addItemBtn'} onClick={() => arrayHelpers.push(obj)}>
                {placeholder}
            </div>
            }
        </div>
    )
}
export default ArrayField

