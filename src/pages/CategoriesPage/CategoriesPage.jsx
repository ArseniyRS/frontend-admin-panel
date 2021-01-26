import React, {useEffect} from 'react'
import {connect} from "react-redux";

import {CategoryColumns} from "../../configs/Categories/tableColumnsConfig";
import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {categoryInputConfig} from "../../configs/Categories/formInputsConfig";
import {
    clearCategory,
    createCategory,
    deleteCategory,
    getCategory,
    getCategoryById,
    updateCategory
} from "../../redux/reducers/categoryReducer";




const CategoriesPage = ({categoryFetchLoader,categories=[],categoryById,getCategory,getCategoryById,createCategory,updateCategory,deleteCategory,clearCategory})=>{
    return(
        <PageRenderer
            pageUrl ={'admin/categories'}
            pageTitle ={'Категории'}

            tableData={categories}
            tableColumnsConfig={CategoryColumns}

           // recordViewTitlesConfig={recordViewCategoryConfig}

            creatorTitle={'Добавление категории'}
            updaterTitle={'Изменение категории'}
           formInputsConfig={categoryInputConfig}
            creatorInitialFormValues={{
                name: '',
                subcategories: []}}
            updaterInitialFormValues={{
                name: categoryById?.name,
                subcategories: categoryById?.subcategories,
            }}
            getDataFunc={getCategory}
            valueById={categoryById}
            getByIdFunc={getCategoryById}
            createFunc={createCategory}
            updateFunc={updateCategory}
            clearFunc={clearCategory}
            deleteFunc={deleteCategory}
            isLoading={categoryFetchLoader}

        />
    )
}
const mapStateToProps = state=>{
    return{
        categories: state.category.categories,
        categoryById: state.category.categoryById,
        categoryFetchLoader : state.category.categoryFetchLoader
    }
}
export  default connect(mapStateToProps,
    {
        getCategory,
        getCategoryById,
        createCategory,
        updateCategory,
        deleteCategory,
        clearCategory
    }
)(CategoriesPage)
