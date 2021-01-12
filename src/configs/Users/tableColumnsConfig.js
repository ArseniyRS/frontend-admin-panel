import React from "react";
import Moment from "react-moment";

export const UserColumns  =[
    {
        title:'ID',
        dataIndex: 'key',
        key:'key',
        render: (value)=><span style={{color: '#1E90FF'}}>{value}</span>
    },
    {
        title: "Имя",
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: "Фамилия",
        dataIndex: 'surname',
        key: 'surname',
    },
    {
        title: "Отчество",
        dataIndex: 'patronymic',
        key: 'patronymic',
    },
    {
        title: "Роль",
        dataIndex: 'role',
        key: 'role',
        render: (value)=>{
            if(value==='Superadmin'){
                return <span style={{color: '#FFFFFF',background: '#FFC822',borderRadius: '5px',padding: '3px 6px'}}>Суперадмин</span>
            }
            if(value==='User'){
                return <span style={{color: '#FFFFFF',background: '#1E90FF',borderRadius: '5px',padding: '3px 6px'}}>Пользователь</span>
            }
            if(value==='Admin'){
                return <span style={{color: '#FFFFFF',background: '#FF6C5F',borderRadius: '5px',padding: '3px 6px'}}>Админ</span>
            }
            return 'value'
        }
    },
    {
        title: "Дата создания",
        dataIndex: 'registered',
        key: 'registered',
        render: (value)=><Moment format="DD.MM.YYYY" >{value}</Moment>
    },
]