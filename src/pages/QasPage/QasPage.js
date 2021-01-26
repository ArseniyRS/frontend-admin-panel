import React, {useEffect} from 'react'
import {connect} from "react-redux";

import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {
    clearQas,
    createQas,
    deleteQas,
    getQas,
    getQasById,
    updateQas
} from "../../redux/reducers/qasReducer";
import {qasInputConfig} from "../../configs/Qas/formInputsConfig";
import {QasColumns} from "../../configs/Qas/tableColumnsConfig";





const QasPage = ({qasFetchLoader,qas=[],qasById,getQas,getQasById,createQas,updateQas,deleteQas,clearQas})=>{
    return(
        <PageRenderer
            pageUrl ={'admin/qas'}
            pageTitle ={'Вопрос-ответ'}

            tableData={qas}
            tableColumnsConfig={QasColumns}


            creatorTitle={'Добавление вопрос-ответа'}
            updaterTitle={'Изменение вопрос-ответа'}
            formInputsConfig={qasInputConfig}
            creatorInitialFormValues={{
                question: '',
                answer: ''}}
            updaterInitialFormValues={{
                question: qasById?.question,
                answer: qasById?.answer,
            }}
            getDataFunc={getQas}
            valueById={qasById}
            getByIdFunc={getQasById}
            createFunc={createQas}
            updateFunc={updateQas}
            clearFunc={clearQas}
            deleteFunc={deleteQas}
            isLoading={qasFetchLoader}

        />
    )
}
const mapStateToProps = state=>{
    return{
        qas: state.qas.qas,
        qasById: state.qas.qasById,
        qasFetchLoader: state.qas.qasFetchLoader
    }
}
export  default connect(mapStateToProps,
    {
        getQas,
        getQasById,
        createQas,
        updateQas,
        deleteQas,
        clearQas
    }
)(QasPage)
