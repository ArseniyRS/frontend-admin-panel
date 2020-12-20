import Moment from "react-moment";
import React from "react";
import {toBeautifyValue} from "../../utils/toBeautifyValue";

export const LastActionsColumns  =[


    {
        title: "Тип",
        dataIndex: 'displayInfo',
        key: 'displayInfo',
        render: (value)=>{
            const arr = value.split(' ')
            const newValue = arr[2].split(/(?=[A-Z])/)
            return  toBeautifyValue(newValue[1]? newValue[1] : newValue[0])
        }
    },
    {
        title: 'Время действия',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (value)=> <Moment format="hh:mm | DD.MM.YYYY" >{value}</Moment>

    },
    {
        title: 'Действие',
        dataIndex: 'methodName',
        key: 'methodName',
       render: (value)=> {
           const newValue = value.split(/(?=[A-Z])/)
           return toBeautifyValue(newValue[0])
       }

    }
]