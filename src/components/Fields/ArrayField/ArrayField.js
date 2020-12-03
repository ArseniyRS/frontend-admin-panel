import React from 'react'
import {Field} from "formik";
import {removeItemSVG} from '../../../assets/'
import './ArrayField.css'




const ArrayField = ({arrayHelpers,placeholder})=>{
    return(
        <div className={'arrayField__container'}>
            {arrayHelpers.form.values &&
            arrayHelpers.form.values[arrayHelpers.name].length > 0 && (
                    arrayHelpers.form.values[arrayHelpers.name].map((friend, index) => (
                        <div key={index} className={'arrayField__item'}>
                            <Field name={`${arrayHelpers.name}.${index}`}/>
                            <div
                                className={'arrayField__removeItemBtn'}
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                            >
                                <img src={removeItemSVG} alt=""/>
                            </div>
                        </div>
                    ))

            )
            }
                <div className={'arrayField__addItemBtn'} onClick={() => arrayHelpers.push('')}>
                    {placeholder}
                </div>

        </div>
    )
}
export default ArrayField