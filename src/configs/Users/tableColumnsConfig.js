import React from "react";

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
            if(value==='admin'){
                return <span style={{color: '#FFFFFF',background: '#1E90FF',borderRadius: '5px',padding: '3px 6px'}}>Админ</span>
            }
            return '------'
        }
    },
    {
        title: "Дата создания",
        dataIndex: 'registered',
        key: 'registered',
    },
]