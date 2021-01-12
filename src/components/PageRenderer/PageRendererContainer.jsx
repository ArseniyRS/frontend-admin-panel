import React, {useEffect, useRef, useState} from 'react'

import {Link, Route, Switch, withRouter} from "react-router-dom";


import FormContainer from "../FormGenerator/FormContainer";
import {connect} from "react-redux";
import TableContainer from "../Table/TableContainer";
import AddBtn from "../Btns/AddBtn";
import {avatarPNG} from "../../assets";
import DeleteBtn from "../Btns/DeleteBtn";
import SearchContainer from "../SearchGenerator/SearchContainer";




const PageRenderer = ({
    history,
    pageUrl,
    pageTitle,

    tableData,
    tableColumnsConfig,

    recordViewTitlesConfig,

    creatorTitle,
    updaterTitle,
    formInputsConfig,
    searchInputsConfig,
    loadSelectorData,
    optionsForSelectorData,
    creatorInitialFormValues,
    updaterInitialFormValues,
    fileUploadKeys,

    getDataFunc,
    valueById,
    getByIdFunc,
    createFunc,
    updateFunc,
    clearFunc,
    deleteFunc,

    isLoading,

    table=true,
    adding=true,
    editing=true,
    deleting=true,

    title=false,

    username
                      })=>{
    //const clickOnRecord=(id)=>history.push(`/${pageUrl}/view/${id}`)
    return(
        <>
            <a href="http://46.101.99.48/"  target={'_blank'} className = 'page-content__open-site'>Открыть сайт</a>
            <div className = 'page-content__profile'><span>{username.name}</span> <img  alt=""/></div>
            {title &&<span className='page-content__title'>{pageTitle}</span>}
            <Switch>
                        <Route exact path={`/${pageUrl}`}>
                            <span className='page-content__title'>{pageTitle}</span>
                            <AddBtn
                                urlToCreate={`/${pageUrl}/${pageUrl}-creator`}
                            />
                            {searchInputsConfig &&
                            <SearchContainer
                                searchInputsConfig={searchInputsConfig}
                            />
                            }
                            {table &&
                            <TableContainer
                                isLoading={isLoading}
                                getDataFunc={getDataFunc}
                                data={tableData}
                                columns={tableColumnsConfig}
                                urlToUpd={`/${pageUrl}/${pageUrl}-updater`}

                                //  handlerClick={clickOnRecord}
                                deleting={deleting}
                            />
                            }
                            {deleting &&
                            <DeleteBtn
                                deleteFunc = {deleteFunc}
                            />}
                        </Route>
                        {adding &&
                        <Route exact path={`/${pageUrl}/${pageUrl}-creator`}>
                            <FormContainer
                                loadSelectorData={loadSelectorData}
                                urlToTable={`/${pageUrl}`}
                                createReq={createFunc}
                                formTitle={creatorTitle}
                                inputConfig={formInputsConfig}
                                optionsForSelector={optionsForSelectorData}
                                initialVals={creatorInitialFormValues}
                                fileUploadKeys={fileUploadKeys}
                                isLoading={isLoading}
                            />
                        </Route>
                        }
                        {editing &&
                        <Route exact path={`/${pageUrl}/${pageUrl}-updater/:id`}>
                            <FormContainer
                                loadSelectorData={loadSelectorData}
                                getByIdFunc={getByIdFunc}
                                valueById={valueById}
                                urlToTable={`/${pageUrl}`}
                                initialVals={updaterInitialFormValues}
                                updReq={updateFunc}
                                formTitle={updaterTitle}
                                inputConfig={formInputsConfig}
                                optionsForSelector={optionsForSelectorData}
                                isLoading={isLoading}
                                clearFunc = {clearFunc}
                            />
                        </Route>
                        }
                    </Switch>

        </>
    )
}

const mapStateToProps = state=>{
    return{
        isLoading : state.auth.isFetchLoader,
        username: state.auth.username
    }
}
export default
    connect(mapStateToProps)(withRouter(
    PageRenderer
    ))