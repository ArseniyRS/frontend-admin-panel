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
                          {/*<Route path={'/orders'} component={OrdersPage}/>*/}
                          <Route path={'/users'} component={UsersPage}/>
                          <Route path={'/advertisements'} component={AdvertisementPage}/>
                          <Route path={'/categories'} component={CategoriesPage}/>
                          <Route path={'/test'} component={TestPage}/>
                          <Route path={'/main'} component={MainPage}/>

                          {/*<Route path={'/providers'} component={Users}/>*/}
                          {/*<Route path={'/profile'} exact component={ProfilePage}/>*/}

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
