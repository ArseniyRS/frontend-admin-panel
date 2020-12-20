import Moment from "react-moment";
import React from "react";

export const AdvertisementColumns  =[

    {
        title:'ID',
        dataIndex: 'key',
        key:'key',
        render: (value)=><span style={{color: '#1E90FF'}}>{value}</span>

    },
    {
        title: "Название",
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: "Подкатегория",
        dataIndex: 'subcategoryName',
        key: 'subcategoryName',

    },
    {
        title: "Дата создания",
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (value)=><Moment format="DD.MM.YYYY" >{value}</Moment>
    },
]