import React, {useEffect, useState} from 'react'
import { Table, Switch, Radio, Form, Space } from 'antd';
//import 'antd/dist/antd.css';
import './Table.css'
import {withRouter} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {writeElementsToDelete, writeTableMessage} from "../../redux/reducers/tableReducer";

const TableContainer = ({editing=true,...props})=>{
    useEffect(()=>{
        if(props.getDataFunc) {
            props.getDataFunc()
        }
        return () => writeElementsToDelete([])
    },[])


    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => props.writeElementsToDelete(selectedRowKeys),
    };
    // const [clickedRow,setClickedRow] = useState(undefined)
    // console.log(clickedRow)
    //
    // useEffect(()=>{
    //
    // },[clickedRow])
    return(
        <Table
            onRow={ (record, rowIndex) => {
                return {
                onClick: event =>editing && props.history.push(`${props.urlToUpd}/${record.key}`), // click row
                onDoubleClick: event => {}, // double click row
                onContextMenu: event => {}, // right button click row
                onMouseEnter: event => {}, // mouse enter row
                onMouseLeave: event => {}, // mouse leave row
            }
            }}
            rowSelection={props.deleting ? { ...rowSelection } : undefined}
            tableLayout={'fixed'}
            pagination={{ position:'BottomCenter' }}
            columns={props.columns}
            dataSource={  props.data  }
        />
    )
}
const mapStateToProps = state=>{
    return{
        elementsToDelete : state.table.elementsToDelete
    }
}

export default connect(mapStateToProps,{writeElementsToDelete,writeTableMessage})(withRouter(TableContainer))








