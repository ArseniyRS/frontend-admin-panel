import React from 'react'
import {connect} from "react-redux";
import {toggleModal} from "../../redux/reducers/modalReducer";



const EditBtn = ({toggleModal,confirmFunc,urlToTable='main',disabled=false})=>{
    return(
        <div className='createOrEditBtn-submit'
             onClick={async ()=>{
                 if(!disabled){
                     return toggleModal(
                         {   isOpen:true,
                             title:'Вы действительно хотите сохранить изменения?',
                             confirmFunc: confirmFunc,
                             urlToTable: urlToTable
                         },
                     )
                 }
                 return confirmFunc()
             }}
        >
            Сохранить</div>
                )
}

export default
connect(null,{toggleModal})
(EditBtn)