import React, {useEffect} from 'react'
import {connect} from "react-redux";

import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {
    createAbout,
    deleteAbout,
    getAbout,
    getAboutById,
    updateAbout
} from "../../redux/reducers/aboutReducer";
import {aboutColumns} from "../../configs/About/tableColumnsConfig";
import {aboutInputConfig} from "../../configs/About/formInputsConfig";






const AboutPage = ({about=[],aboutById,getAbout,getAboutById,createAbout,updateAbout,deleteAbout,clearAbout})=>{
    return(
        <PageRenderer
            pageUrl ={'about'}
            pageTitle ={'О компании'}

            tableData={about}
            tableColumnsConfig={aboutColumns}


            creatorTitle={'О компании'}
            updaterTitle={'О компании'}
            formInputsConfig={aboutInputConfig}
            creatorInitialFormValues={{
                header: '',
                text: ''}}
            updaterInitialFormValues={{
                header: aboutById?.header,
                text: aboutById?.text,
            }}
            getDataFunc={getAbout}
            valueById={aboutById}
            getByIdFunc={getAboutById}
            createFunc={createAbout}
            updateFunc={updateAbout}
            //  clearFunc={clearAbout}
            deleteFunc={deleteAbout}

        />
    )
}
const mapStateToProps = state=>{
    return{
        about: state.about.about,
        aboutById: state.about.aboutById
    }
}
export  default connect(mapStateToProps,
    {
        getAbout,
        getAboutById,
        createAbout,
        updateAbout,
        deleteAbout,
        //clearAbout
    }
)(AboutPage)
