import React, {useEffect} from 'react'
import {connect} from "react-redux";

import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {
    createRule,
    deleteRule,
    getRule,
    getRuleById,
    updateRule
} from "../../redux/reducers/ruleReducer";
import {rulesInputConfig} from "../../configs/Rules/formInputsConfig";
import {ruleColumns} from "../../configs/Rules/tableColumnsConfig";





const RulesPage = ({ruleFetchLoader,rules=[],ruleById,getRule,getRuleById,createRule,updateRule,deleteRule})=>{
    return(
        <PageRenderer
            pageUrl ={'admin/rules'}
            pageTitle ={'Правила'}

            tableData={rules}
            tableColumnsConfig={ruleColumns}

            creatorTitle={'Добавление правила'}
            updaterTitle={'Изменение правила'}
            formInputsConfig={rulesInputConfig}
            creatorInitialFormValues={{
                header: '',
                text: ''}}
            updaterInitialFormValues={{
                header: ruleById?.header,
                text: ruleById?.text,
            }}
            getDataFunc={getRule}
            valueById={ruleById}
            getByIdFunc={getRuleById}
            createFunc={createRule}
            updateFunc={updateRule}
            deleteFunc={deleteRule}
            isLoading={ruleFetchLoader}
        />
    )
}
const mapStateToProps = state=>{
    return{
        rules: state.rules.rules,
        ruleById: state.rules.ruleById,
        ruleFetchLoader: state.rules.ruleFetchLoader
    }
}
export  default connect(mapStateToProps,
    {
        getRule,
        getRuleById,
        createRule,
        updateRule,
        deleteRule,
    }
)(RulesPage)
