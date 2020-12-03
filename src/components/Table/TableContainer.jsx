import React, {useEffect, useState} from 'react'
import { Table, Switch, Radio, Form, Space } from 'antd';
//import 'antd/dist/antd.css';
import './Table.css'
import {withRouter} from "react-router-dom";

const TableContainer = (props)=>{

    const data = [];
    for (let i = 1; i <= 10; i++) {
        data.push({
            key: i,
            name: 'John Brown',
            parentCategory: `${i}2`,
            description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        });
    }
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
    };

    // const [clickedRow,setClickedRow] = useState(undefined)
    // console.log(clickedRow)
    //
    // useEffect(()=>{
    //
    // },[clickedRow])
    return(
        <Table
            onRow={(record, rowIndex) => {
                return {
                onClick: event =>props.history.push(`${props.urlToUpd}/${record.key}`), // click row
                onDoubleClick: event => {}, // double click row
                onContextMenu: event => {}, // right button click row
                onMouseEnter: event => {}, // mouse enter row
                onMouseLeave: event => {}, // mouse leave row
            }
            }}
            rowSelection={rowSelection}
            tableLayout={'fixed'}
           pagination={{ position:'bottomRight' }}
            columns={props.columns}
            dataSource={data }
        />
    )
}


export default withRouter(TableContainer)








