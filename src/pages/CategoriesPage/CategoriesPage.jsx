import React, {useEffect} from 'react'
import {connect} from "react-redux";

import {CategoryColumns} from "../../configs/Categories/tableColumnsConfig";
import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {categoryInputConfig} from "../../configs/Categories/formInputsConfig";





const CategoriesPage = ({categories,categoryById,getCategory,getCategoryById,createCategory,updateCategory,deleteCategory,clearCategory})=>{
    return(
        <PageRenderer
            pageUrl ={'categories'}
            pageTitle ={'Категории'}

            //tableData={categories}
            tableColumnsConfig={CategoryColumns}

           // recordViewTitlesConfig={recordViewCategoryConfig}

            creatorTitle={'Добавление категории'}
            updaterTitle={'Изменение категории'}
           formInputsConfig={categoryInputConfig}
            optionsForSelectorData={{
                category: categories ? [...categories] : []
            }}
            creatorInitialFormValues={{
                name: '',
                parentCategoryId: []}}
            updaterInitialFormValues={{
                name: '',
                parentCategoryId: [],
            }}
           //  getDataFunc={getCategory}
           //  valueById={categoryById}
           //  getByIdFunc={getCategoryById}
           //  createFunc={createCategory}
           //  updateFunc={updateCategory}
           //  clearFunc={clearCategory}
           //  deleteFunc={deleteCategory}

        />
    )
}


export  default  CategoriesPage
