import React from 'react'
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import PasswordInput from "../Fields/PasswordInput/PasswordInput";
import {connect} from "react-redux";
import ErrorMsg from "../Modals/ErrorMessage";
import {writeAuthMessage} from "../../redux/reducers/authReducer";



const AuthForm = (props)=>{
    return(
        <Formik
            initialValues={{
                email:'',
                password: ''
            }}
            validationSchema={Yup.object({
                email: Yup.string().required().email(),
                password: Yup.string().required(),
            })}
            onSubmit={(values)=>props.submitHandler(values)}
        >
            <Form
              //  onClick={()=>props.writeAuthMessage('')}
            >
                <Field name="email" placeholder="Адрес электронной почты"/>


                <Field name="password" >
                    {({field:{name},form: { setFieldValue}})=> <PasswordInput setFieldValue={setFieldValue} name={name} placeholder="Пароль"/>}
                </Field>
                <button className={"auth__btn"} type={'submit'}>Войти</button>
                {/*{props.authErrorMessage && <ErrorMsg text={props.authErrorMessage}/>}*/}
            </Form>
        </Formik>
    )
}
// const mapStateToProps = state=>{
//     return{
//         authErrorMessage: state.main.authErrorMessage
//     }
// }
export default
//connect(mapStateToProps,{writeAuthMessage})
(AuthForm)