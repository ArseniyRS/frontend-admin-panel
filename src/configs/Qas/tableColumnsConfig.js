import Moment from "react-moment";
import React from "react";

export const QasColumns  =[
    {
      title:'ID',
      dataIndex: 'key',
      key:'key',
        render: (value)=><span style={{color: '#1E90FF'}}>{value}</span>
    },
    {
        title: "Вопрос",
        dataIndex: 'question',
        key: 'question',
    },
    {
        title: 'Дата создания',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (value)=> <Moment format="DD.MM.YYYY" >{value}</Moment>

    }
]