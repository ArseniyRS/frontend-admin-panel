import React, {useEffect} from 'react'
import {connect} from "react-redux";

import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {advertisementInputConfig} from "../../configs/Advertisements/formInputsConfig";
import {AdvertisementColumns} from "../../configs/Advertisements/tableColumnsConfig";
import {

   getSubCategories,

} from "../../redux/reducers/categoryReducer";
import {
    clearSpecialist,
    createSpecialist,
    deleteSpecialist, getSpecialistById,
    getSpecialists,
    updateSpecialist
} from "../../redux/reducers/specialistReducer";
import {getCities} from "../../redux/reducers/mainReducer";





const AdvertisementPage = ({specialistFetchLoader,subcategories,cities,clearSpecialist,getCities,getSubCategories,specialists,specialistById,getSpecialistById,getSpecialists,createSpecialist,updateSpecialist,deleteSpecialist})=>{

    return(
        <PageRenderer
            pageUrl ={'advertisements'}
            pageTitle ={'Существующие объявления'}

            tableData={specialists}
            tableColumnsConfig={AdvertisementColumns}


            creatorTitle={'Добавление объявления'}
            updaterTitle={'Изменение объявления'}
            formInputsConfig={advertisementInputConfig}
            optionsForSelectorData={{
                category: [],
                cityID: cities ? [...cities] : [],
                subcategories: subcategories ? [...subcategories] : []
            }}
            loadSelectorData={[getSubCategories,getCities]}
            creatorInitialFormValues={{
                type: 0,
                avatar: [],
                name: "",
                category: "",
                subcategory: 0,
                cityID: 0,
                url: "",
                viezd: 0,
                street:{},
                phone: [],
                email: "",
                webSite: "",
                whatsApp: "",
                instagram: "",
                telegram: "",
                facebook: '',
                modes: [],
                description: '',
                photosForm: [],
                services: [],

            }}
            updaterInitialFormValues={{
                type: specialistById?.type,
                avatarPath: specialistById?.avatarPath,
                name: specialistById?.name,
                category: [],
                subcategory: specialistById?.subcategoryID,
                url: specialistById?.url,
                cityID: specialistById?.cityID,
                viezd: '',
                street:specialistById?.street,
                addressComment: specialistById?.addressComment,
                phone: [],
                email: "",
                webSite: "",
                whatsApp: "",
                telegram: "",
                instagram: "",
                facebook: '',
               // modes: [],
                description: '',
                photos: [],
                services: specialistById?.services,

            }}
             getDataFunc={getSpecialists}
             valueById={specialistById}
             getByIdFunc={getSpecialistById}
             createFunc={createSpecialist}
             updateFunc={updateSpecialist}
             clearFunc={clearSpecialist}
             deleteFunc={deleteSpecialist}
            isLoading={specialistFetchLoader}

        />
    )
}
const mapStateToProps = state=>{
    return{
        specialists: state.specialist.specialists,
        specialistById: state.specialist.specialistById,
        subcategories: state.category.subcategories,
        cities: state.main.cities,
        specialistFetchLoader: state.specialist.specialistFetchLoader
    }
}


export  default connect(mapStateToProps,
    {
        getSpecialists,
        getSpecialistById,
        createSpecialist,
        updateSpecialist,
        deleteSpecialist,
        clearSpecialist,
        getSubCategories,
        getCities
    })
    (AdvertisementPage)
