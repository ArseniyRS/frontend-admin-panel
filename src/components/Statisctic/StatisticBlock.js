import React, {useEffect} from 'react'
import {refreshSVG} from '../../assets/'
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {connect} from "react-redux";
import {getStatistic} from "../../redux/reducers/mainReducer";
import './StatisticBlock.css'



const StatisticBlock = props =>{
useEffect(()=>{
    props.getStatistic()
},[])
    return(
        <div className={'statContainer'}>
            <div className={'statistic'}>
                <img src={props.img} alt=""/>
                <div className="statisticBlock">
                    <h2>{props.title}</h2>
                    <span>{props.data}</span>
                </div>
            </div>
            <div className={'refreshBtn'} onClick={()=>props.getStatistic()}><img src={refreshSVG} alt=""/>Обновить</div>
        </div>
    )
}

export default connect(null,{getStatistic})(StatisticBlock)