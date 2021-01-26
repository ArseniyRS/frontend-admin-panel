import React, {useEffect, useState} from 'react'
import './Sidebar.css'
import SidebarItem from "./SidebarItem";
import {sideBarConfig} from "./sideBarConfig";
import {Link, withRouter} from "react-router-dom";
import {logoSVG} from "../../assets";

const SidebarList  = (props)=>{

    const elements = sideBarConfig.map((item,index)=>{
        return(
            <SidebarItem
                key={index}
                id={index}
                to={item.to}
                name={item.name}
            />
        )
    })
    return(
        <div className='sidebar__container'>
            <div className="sidebar__logo-container">
            <Link to={'/admin/main'}><img  className='sidebar__logo' src={logoSVG} alt=""/></Link>
            </div>
            <ul className='sidebar'>
                {elements}
            </ul>
        </div>
    )
}

export default withRouter(SidebarList)