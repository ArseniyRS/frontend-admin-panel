import React, {useEffect} from 'react'
import {connect} from "react-redux";

import {CategoryColumns} from "../../configs/Categories/tableColumnsConfig";
import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {categoryInputConfig} from "../../configs/Categories/formInputsConfig";
import {
    createCategory,
    deleteCategory,
    getCategory,
    getCategoryById,
    updateCategory
} from "../../redux/reducers/categoryReducer";





const CategoriesPage = ({categories=[],categoryById,getCategory,getCategoryById,createCategory,updateCategory,deleteCategory,clearCategory})=>{
    console.log(categoryById)
    console.log(categories)
    return(
        <PageRenderer
            pageUrl ={'categories'}
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
           //  clearFunc={clearCategory}
            deleteFunc={deleteCategory}

        />
    )
}
const mapStateToProps = state=>{
    return{
        categories: state.category.categories,
        categoryById: state.category.categoryById
    }
}
export  default connect(mapStateToProps,
    {
        getCategory,
        getCategoryById,
        createCategory,
        updateCategory,
        deleteCategory,
        //clearCategory
    }
)(CategoriesPage)
