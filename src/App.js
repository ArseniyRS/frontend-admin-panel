import React from 'react'
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';

import SidebarList from "./components/Sidebar/SidebarList";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import {connect} from "react-redux";
import Modal from "./components/Modals/Modal";

function App(props) {
  return (
      <>
          {props.modal.isOpen && <Modal/>}
          <SidebarList/>
          <div className="page-content">
            <Switch>
              {/*<Route path={'/orders'} component={OrdersPage}/>*/}
              {/*<Route path={'/users'} component={UsersPage}/>*/}
              {/*<Route path={'/products'} component={ProductsPage}/>*/}
              <Route path={'/categories'} component={CategoriesPage}/>
              {/*<Route path={'/providers'} component={ProvidersPage}/>*/}
              {/*<Route path={'/profile'} exact component={ProfilePage}/>*/}
            </Switch>
          </div>
      </>
  );
}
const mapStateToProps = state=>{
    return{
        modal : state.modal.isOpenModal
    }
}
export default
connect(mapStateToProps)
(App);
