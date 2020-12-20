import React from 'react'
import AuthForm from "./AuthForm";
import {connect} from "react-redux";
import {authSignIn} from "../../redux/reducers/authReducer";



const AuthContainer = ({authSignIn,togglePageLoader})=>{
    const submitHandler = (values)=>{
        console.log(values)

        authSignIn(values)
    }
    return(
        <AuthForm submitHandler={submitHandler}/>
    )
}

export default connect(null,{authSignIn})(AuthContainer)