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


    adding=true,
    editing=true,
    deleting=true,
                      })=>{
    //const clickOnRecord=(id)=>history.push(`/${pageUrl}/view/${id}`)
    return(
        <>
            <Link className = 'page-content__open-site'>Открыть сайт</Link>
            <div className = 'page-content__profile'><span>Айдай Асанова</span> <img src={avatarPNG} alt=""/></div>
            <Switch>
                        <Route exact path={`/${pageUrl}`}>

                            <span className='page-content__title'>{pageTitle}</span>
                            <AddBtn
                                urlToCreate={`/${pageUrl}/${pageUrl}-creator`}
                            />
                            <SearchContainer
                                inputConfig={formInputsConfig}
                            />
                            <TableContainer
                                isLoading={isLoading}
                                getDataFunc={getDataFunc}
                                data={tableData}
                                columns={tableColumnsConfig}
                                urlToUpd={`/${pageUrl}/${pageUrl}-updater`}

                                //  handlerClick={clickOnRecord}
                                deleting={deleting}
                            />
                            <DeleteBtn />
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
                                //getByIdFunc={getByIdFunc}
                                //valueById={valueById}
                                urlToTable={`/${pageUrl}`}
                                initialVals={updaterInitialFormValues}
                                updReq={updateFunc}
                                formTitle={updaterTitle}
                                inputConfig={formInputsConfig}
                                optionsForSelector={optionsForSelectorData}
                                isLoading={isLoading}
                            />
                        </Route>
                        }
                        {/*<Route path={`/${pageUrl}/view/:id`}>*/}
                        {/*    <RecordViewerContainer*/}
                        {/*        titles={recordViewTitlesConfig}*/}
                        {/*        urlToUpd={`/${pageUrl}/${pageUrl}-updater`}*/}
                        {/*        urlToTable={`/${pageUrl}`}*/}

                        {/*        valueById={valueById}*/}
                        {/*        getByIdFunc={getByIdFunc}*/}
                        {/*        clearFunc={clearFunc}*/}
                        {/*        isLoading={isLoading}*/}

                        {/*        editing={editing}*/}
                        {/*    />*/}
                        {/*</Route>*/}
                    </Switch>

        </>
    )
}

// const mapStateToProps = state=>{
//     return{
//         isLoading : state.main.isFetchLoader
//     }
// }
export default
    //connect(mapStateToProps)(withRouter(
    PageRenderer
    //))