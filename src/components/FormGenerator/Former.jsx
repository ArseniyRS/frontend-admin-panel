import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import {validationGenerator} from "./validationGenerator";
import EditBtn from "../Btns/EditBtn";
import CancelBtn from "../Btns/CancelBtn";




const Former = (props)=>{
    const inputs = Object.keys(props.initialVals).map((item,index)=>{
        return(
            <FormInput
                key={item}
                name={item}
                placeholder={props.inputConfig[index]?.placeholder}
                label={props.inputConfig[index]?.label}
                labelObject={props.inputConfig[index]?.labelObject}
                radioLabel={props.inputConfig[index]?.radioLabel}
                type={props.inputConfig[index]?.type}
                imageCount={props.inputConfig[index]?.imageCount}
                additionally={ props.inputConfig[index]?.additionally}
                iconInput={ props.inputConfig[index]?.iconInput}
                required={props.inputConfig[index]?.required}
                selectInputData={props.inputConfig[index]?.selectInputData}
                options={props.optionsForSelector}
                selectorProperty={props.inputConfig[index]?.selectorProperty}
                styles={props.inputConfig[index]?.styles}

            />
        )
    })
    const array= Object.keys(props.initialVals)
    const schema = validationGenerator(array,props.inputConfig)
    return(
        <>
        <div className={'createOrEditContainer__title'}>
            <h2>{props.formTitle}</h2>
        </div>
        <div className='createOrEditContainer'>

            <Formik
                initialValues={props.initialVals}
                validationSchema={Yup.object(schema)}
                onSubmit={ async (values,e)=>{
                    await props.handleSubmit(values)
                }}
            >
                {({handleSubmit,errors,values}) =>{
                    return (
                        <Form>
                            <div className={"createOrEditContainer__fields"}>
                                {inputs}
                            </div>

                            <div className={"createOrEditContainer__btns"}>
                                <EditBtn
                                    values = {values}
                                    urlToTable={props.urlToTable}
                                    confirmFunc={handleSubmit}
                                    disabled={Object.keys(errors).length !== 0 && true}
                                />

                                <CancelBtn
                                    urlToTable={props.urlToTable}
                                />
                            </div>
                        </Form>
                    )}}

            </Formik>
        </div>
            </>
    )
}
export default Former
