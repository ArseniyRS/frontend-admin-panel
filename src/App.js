import React, {useEffect} from 'react'
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';

import SidebarList from "./components/Sidebar/SidebarList";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import {connect} from "react-redux";
import Modal from "./components/Modals/Modal";
import UsersPage from "./pages/Users/Users";
import AdvertisementPage from "./pages/AdvertisementPage/AdvertisementPage";
import TestPage from "./pages/TestPage/TestPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import {tokensChecker} from "./components/Auth/tokensChecker";
import {toggleAuth, writeProfile} from "./redux/reducers/authReducer";
import MainPage from "./pages/MainPage/MainPage";
import {getUserById} from "./redux/reducers/userReducer";
import QasPage from "./pages/QasPage/QasPage";
import RulesPage from "./pages/RulesPage/RulesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import InstructionsPage from "./pages/InstructionPage/InstructionPage";

function App(props) {
    useEffect(()=>{
        if(tokensChecker()){
            props.toggleAuth(true)
            props.writeProfile(localStorage.getItem('id'))
        }
        else{
            props.toggleAuth(false)
        }
    },[])
  return (

          props.isAuthorized ?
              <>
                  {props.modal.isOpen && <Modal/>}

                  <SidebarList/>
                  <div className="page-content">
                      <Switch>
                          <Route path={'/users'} component={UsersPage}/>
                          <Route path={'/advertisements'} component={AdvertisementPage}/>
                          <Route path={'/categories'} component={CategoriesPage}/>
                          <Route path={'/test'} component={TestPage}/>
                          <Route path={'/main'} component={MainPage}/>
                          <Route path={'/qas'} component={QasPage}/>
                          <Route path={'/rules'} component={RulesPage}/>
                          <Route path={'/about'} component={AboutPage}/>
                          <Route path={'/instruction'} component={InstructionsPage}/>

                      </Switch>
                  </div>
              </>
              :
              <Route path={'/'} component={AuthPage}/>

  );
}
const mapStateToProps = state=>{
    return{
        isAuthorized: state.auth.isAuthorized,
        modal : state.modal.isOpenModal
    }
}
export default
connect(mapStateToProps,{toggleAuth,writeProfile})
(App);
