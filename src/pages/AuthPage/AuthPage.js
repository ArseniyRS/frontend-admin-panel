import React from 'react'
import FormContainer from "../../components/FormGenerator/FormContainer";
import AuthContainer from "../../components/Auth/AuthContainer";
import './AuthPage.css'
import bgIMG from '../../assets/img/authBg.jpg'
import {logoSVG} from '../../assets/index'
const AuthPage = ()=>{


    return(
        <div className='auth__container' style={{backgroundImage: `url(${bgIMG})`}}>
            <div className="auth__logo"><img src={logoSVG} alt=""/></div>
            <div className="auth__block">
                <div className="auth__title">Войти</div>
                <AuthContainer />
            </div>
        </div>

    )
}

export  default  AuthPage