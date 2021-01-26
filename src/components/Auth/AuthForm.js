import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import PasswordInput from "../Fields/PasswordInput/PasswordInput";
import {connect} from "react-redux";
import {writeAuthMessage} from "../../redux/reducers/authReducer";



const AuthForm = (props)=>{
    return(
        <Formik
            initialValues={{
                email:'',
                password: ''
            }}
            validationSchema={Yup.object({
                email: Yup.string().required('Это поле обязательно для заполнения').email('Введите email'),
                password: Yup.string().required('Это поле обязательно для заполнения'),
            })}
            onSubmit={(values)=>props.submitHandler(values)}
        >
                {() =>{
                    return(
                        <Form
                            onClick={()=>props.writeAuthMessage('')}>
                        <Field name="email" placeholder="Адрес электронной почты"/>
                            <span  className='formErrorMessage-relative'><ErrorMessage name={'email'}/></span>
                    <Field name="password" >
                        {({field:{name},form: { setFieldValue}})=> <PasswordInput setFieldValue={setFieldValue} name={name} placeholder="Пароль"/>}
                    </Field>
                            <span  className='formErrorMessage-relative'><ErrorMessage name={'password'}/></span>
                    <button className={"auth__btn"} type={'submit'}>Войти</button>
                    {props.authErrorMessage && <span className='formErrorMessage-relative'>{props.authErrorMessage}</span>}
                        </Form>
                    )}}

        </Formik>
    )
}
const mapStateToProps = state=>{
    return{
        authErrorMessage: state.auth.authErrorMessage
    }
}
export default
connect(mapStateToProps,{writeAuthMessage})
(AuthForm)