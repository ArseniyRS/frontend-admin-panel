import React, {useEffect} from 'react'
import {ErrorMessage, Field, FieldArray, Form} from "formik";
import ArrayField from "../Fields/ArrayField/ArrayField";
import RadioGroup from "../Fields/RadioGroup/RadioGroup";
import ImgUploader from "../Fields/ImgUploader/ImgUploader";
import URLField from "../Fields/URLField/URLField";
import FieldWithIcon from "../Fields/FieldWithIcon/FieldWithIcon";
import MapBlock from "../Fields/MapBlock/MapBlock";
import ScheduleField from "../Fields/ScheduleField/ScheduleField";
import TextEditor from "../Fields/TextEditor/TextEditor";



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
                options=[],
                objectTemplate,
                objectTemplateStyles
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
                            objectTemplate={objectTemplate}
                            objectTemplateStyles={objectTemplateStyles}
                        />}
                    </FieldArray>

            : type === 'radio' ?
                    <RadioGroup name={name} label={radioLabel}/>
                    : type==='textarea' ?
                        <Field name={name} as={'textarea'} placeholder={placeholder} />
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
                                    <Field name={name} >
                                        {({field:{name,value},form: { setFieldValue}}) => <URLField value= {value}
                                                                                                    name={name}
                                                                                                    placeholder={placeholder}
                                                                                                    setFieldValue={setFieldValue}
                                        />}
                                    </Field>
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
                <Field
                    name={name}>
                    {({field:{name,value},form: { setFieldValue}}) =>
                        <ScheduleField
                            placeholder={placeholder}
                            name={name}
                            value={value}
                            setFieldValue={setFieldValue}
                        />
                    }
                </Field>
                :type==='textEditor' ?
                    <Field
                        name={name}>
                        {({field: {name, value}, form: {setFieldValue}}) =>
                            <TextEditor
                                placeholder={placeholder}
                                name={name}
                                value={value}
                                setFieldValue={setFieldValue}
                            />
                        }
                    </Field>
                 :
                <Field name={name} placeholder={placeholder}/>

            }
            <span  className='formErrorMessage'><ErrorMessage name={name}/></span>
        </div>
    )
}

export default FormInput
