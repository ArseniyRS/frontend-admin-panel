import React, {useEffect} from 'react'
import {ErrorMessage, Field, FieldArray, Form} from "formik";
import ArrayField from "../Fields/ArrayField/ArrayField";
import RadioGroup from "../Fields/RadioGroup/RadioGroup";
import ImgUploader from "../Fields/ImgUploader/ImgUploader";
import URLField from "../Fields/URLField/URLField";
import FieldWithIcon from "../Fields/FieldWithIcon/FieldWithIcon";
import MapBlock from "../Fields/MapBlock/MapBlock";
import ScheduleField from "../Fields/ScheduleField/ScheduleField";



const FormInput = ({
                name,
                label,
                labelObject,
                placeholder,
                type='',
                imageCount,
                styles,
               selectInputData=[],
               selectorProperty='',
               additionally,
                iconInput,
               radioLabel,
               required,
               options=[]
                   })=>{
    return(
        <div className="createOrEditField" style={styles ? styles : undefined} >
            {additionally &&   <span className={'formTitle'}>{additionally}</span>}
            <label htmlFor={name}>{label} {required && <span className={'required_field'}>*</span>}</label>




            { type === 'array' ?
                    <FieldArray
                    name={name}>
                        { (arrayHelpers) => <ArrayField
                            placeholder={placeholder}
                            name={name}
                            arrayHelpers={arrayHelpers}
                            labelObject={labelObject}
                        />}
                    </FieldArray>

            : type === 'radio' ?
                    <RadioGroup name={name} label={radioLabel}/>

                : type==='selector' ?
                <Field name={name} as={'select'} placeholder={placeholder} >

                {options[selectorProperty].map(item=> {
                    return (
                        <option key={item.id} value={item.id}>{item?.name ? item.name : item.fullName}</option>
                    )})
                }
                </Field>
                : type==='image' ?
                <Field name={name} >
                {({field:{name,value},form: { setFieldValue}}) =><ImgUploader setFieldValue={setFieldValue}
                                                                              placeholder={placeholder}
                                                                              imageCount={imageCount}
                                                                              value={value}
                                                                              name={name}/>}
                </Field>
                : type==='url' ?
                                <URLField name={name} placeholder={placeholder}/>
                : type ==='withIcon' ?
                <Field name={name}>
                    {({field:{name},form: { setFieldValue}}) =><FieldWithIcon setFieldValue={setFieldValue}
                                                                              iconInput={iconInput}
                                                                                  name={name}/>}
                </Field>
                :type==='map'?
                <Field name={name}>
                    {({field:{name},form: { setFieldValue}}) => <MapBlock setFieldValue={setFieldValue}
                                                                          placeholder={placeholder}
                                                                          name={name}
                                                                            />}
                </Field>
                :type==='schedule'?
                <FieldArray
                    name={name}>
                    {(arrayHelpers) =>
                        <ScheduleField
                            placeholder={placeholder}
                            name={name}
                            arrayHelpers={arrayHelpers}
                        />
                    }
                </FieldArray>
                 :
                <Field name={name} placeholder={placeholder}/>

            }
            <span  className='formErrorMessage'><ErrorMessage name={name}/></span>
        </div>
    )
}

export default FormInput
