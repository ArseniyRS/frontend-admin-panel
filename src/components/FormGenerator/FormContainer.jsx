import React, {useEffect, useState} from 'react'
import {withRouter} from "react-router-dom";
import Former from "./Former";
import './Form.css'
import Preloader from "../Preloader/Preloader";
const FormContainer = ({
                           createReq,
                           updReq,
                           match,
                           isLoading,
                           ...props})=>{
    useEffect(()=>{
        if(props.loadSelectorData) {
            for(let i=0;i<props.loadSelectorData.length;i++){
                props.loadSelectorData[i]()
            }
        }
        if(match.params?.id )  {
            props.getByIdFunc(match.params.id)
        }
        return ()=>props.clearFunc()
    },[])

    const handleSubmit = async values=>{
        if(match.params?.id){
            await updReq(match.params.id,values)
        }else {
            console.log(values)
            await  createReq(values)
        }
    }



    return(
       !isLoading
           ?
            <Former handleSubmit={handleSubmit}  {...props}/>
           : <Preloader />

    )
}

export default withRouter(FormContainer)