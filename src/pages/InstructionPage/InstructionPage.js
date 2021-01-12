import React, {useEffect} from 'react'
import {connect} from "react-redux";
import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {
    createInstruction,
    getInstruction,
} from "../../redux/reducers/instructionReducer";
import './InstructionPage.css'
import FormContainer from "../../components/FormGenerator/FormContainer";
import {instructionInputConfig} from "../../configs/Instruction/formInputsConfig";

const InstructionsPage = ({isLoading,instruction=[],getInstruction,createInstruction})=>{
    return(
        <>
        <PageRenderer
            pageTitle ={'Инструкция'}
            title={true}
            table={false}
            adding={false}
            editing={false}
            deleting={false}
        />
        <p className={'instructionPage-p'}>Здесь находится блок для добавления одной инструкции,
            которая будет скачиваться при нажатии на нее.
            Этот файл будет отображаться при регистрации компании или специалиста.</p>
    <FormContainer
        getByIdFunc={getInstruction}
        valueById={instruction}
        initialVals={{file:instruction}}
        createReq={createInstruction}
        inputConfig={instructionInputConfig}
        isLoading={isLoading}
    />
    </>
    )
}
const mapStateToProps = state=>{
    return{
        instruction: state.instruction.instruction,
        isLoading : state.auth.isFetchLoader,
    }
}
export  default connect(mapStateToProps,
    {
        getInstruction,
        createInstruction,
    }
)(InstructionsPage)
