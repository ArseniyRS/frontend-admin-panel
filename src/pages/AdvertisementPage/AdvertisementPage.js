import React, {useEffect} from 'react'
import {connect} from "react-redux";

import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {advertisementInputConfig} from "../../configs/Advertisements/formInputsConfig";
import {AdvertisementColumns} from "../../configs/Advertisements/tableColumnsConfig";
import {
    createCategory,
    deleteCategory,
    getCategory,
    getCategoryById, getSubCategories,
    updateCategory
} from "../../redux/reducers/categoryReducer";
import {
    createSpecialist,
    deleteSpecialist, getSpecialistById,
    getSpecialists,
    updateSpecialist
} from "../../redux/reducers/specialistReducer";
import {getCities} from "../../redux/reducers/mainReducer";





const AdvertisementPage = ({subcategories,cities,getCities,getSubCategories,specialists,specialistById,getSpecialistById,getSpecialists,createSpecialist,updateSpecialist,deleteSpecialist})=>{

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
                avatarPath: "",
                name: "",
                category: "",
                subcategory: "",
                url: "",
                cityID: "",
                equipage: '',
                street:"",
                addressComment: "",
                phone: [],
                email: "",
                webSite: "",
                whatsApp: "",
                telegram: "",
                instagram: "",
                facebook: '',
                modes: [],
                description: '',
                photos: [],
                services: [],

            }}
            updaterInitialFormValues={{
                avatarPath: specialistById?.avatarPath,
                name: specialistById?.name,
                category: [],
                subcategory: specialistById?.subcategoryID,
                url: specialistById?.url,
                cityID: specialistById?.cityID,
                equipage: '',
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
             //clearFunc={clearCategory}
             deleteFunc={deleteSpecialist}

        />
    )
}
const mapStateToProps = state=>{
    return{
        specialists: state.specialist.specialists,
        specialistById: state.specialist.specialistById,
        subcategories: state.category.subcategories,
        cities: state.main.cities
    }
}


export  default connect(mapStateToProps,
    {
        getSpecialists,
        getSpecialistById,
        createSpecialist,
        updateSpecialist,
        deleteSpecialist,
        //clearCategory,
        getSubCategories,
        getCities
    })
    (AdvertisementPage)
