import React from 'react'
import {connect} from "react-redux";
import {toggleModal} from "../../redux/reducers/modalReducer";



const EditBtn = ({toggleModal,confirmFunc,urlToTable='main'})=>{
    return(
        <div className='createOrEditBtn-submit'
                onClick={()=>
                    toggleModal(
                    {   isOpen:true,
                        title:'Вы действительно хотите сохранить изменения?',
                        confirmFunc: confirmFunc,
                        urlToTable: urlToTable
                    },
                    )}
        >
            Сохранить</div>
                )
}

export default
connect(null,{toggleModal})
(EditBtn)