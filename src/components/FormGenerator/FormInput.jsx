import React, {useEffect} from 'react'
import {ErrorMessage, Field, FieldArray, Form} from "formik";
import ArrayField from "../Fields/ArrayField/ArrayField";



const FormInput = ({
                name,
                label,
                placeholder,
                type='',
               selectInputData=[],
               selectorProperty,
               options=[]
                   })=>{
    return(
        <div className="createOrEditField">
            <label htmlFor={name}>{label}</label>



            {type==='selector' ?
                            <Field name={name} as={'select'} placeholder={placeholder}>
                                <option value={''} className="select__placeholder" hidden>
                                    {placeholder}
                                </option>
                                <option value={''} className="select__placeholder">
                                    {'Без родителя'}
                                </option>
                                {options[selectorProperty].map(item=> {
                                    return (
                                        <option key={item.id} value={item.id}>{item?.name ? item.name : item.fullName}</option>
                                    )})
                                }
                            </Field>
                            :
                type === 'array' ?
                    <FieldArray
                    name={name}>
                        { (arrayHelpers) => <ArrayField
                            placeholder={placeholder}
                            arrayHelpers={arrayHelpers}
                        />}
                    </FieldArray>

            :
                <Field name={name} placeholder={placeholder}/>

            }


            <span  className='authError'><ErrorMessage name={name}/></span>
        </div>
    )
}

export default FormInput