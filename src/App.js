import React, {useEffect} from 'react'
import './App.css';
import {Route, Switch} from 'react-router-dom';

import SidebarList from "./components/Sidebar/SidebarList";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import {connect} from "react-redux";
import Modal from "./components/Modals/Modal";
import UsersPage from "./pages/Users/Users";
import AdvertisementPage from "./pages/AdvertisementPage/AdvertisementPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import {tokensChecker} from "./components/Auth/tokensChecker";
import {toggleAuth, writeProfile} from "./redux/reducers/authReducer";
import MainPage from "./pages/MainPage/MainPage";
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
    },[props.isAuthorized])
  return (
          props.isAuthorized ?
              <>
                  {props.modal.isOpen && <Modal/>}

                  <SidebarList/>
                  <div className="page-content">
                      <Switch>
                          <Route path={'/admin/users'} component={UsersPage}/>
                          <Route path={'/admin/advertisements'} component={AdvertisementPage}/>
                          <Route path={'/admin/categories'} component={CategoriesPage}/>
                          <Route path={'/admin/main'} component={MainPage}/>
                          <Route path={'/admin/qas'} component={QasPage}/>
                          <Route path={'/admin/rules'} component={RulesPage}/>
                          <Route path={'/admin/about'} component={AboutPage}/>
                          <Route path={'/admin/instruction'} component={InstructionsPage}/>
                      </Switch>
                  </div>
              </>
              :
              <Switch>
              <Route path={'/admin'} component={AuthPage}/>
              </Switch>
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
