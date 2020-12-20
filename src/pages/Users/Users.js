import React, {useEffect} from 'react'
import {connect} from "react-redux";

import {CategoryColumns} from "../../configs/Categories/tableColumnsConfig";
import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {categoryInputConfig} from "../../configs/Categories/formInputsConfig";
import {userInputConfig} from "../../configs/Users/formInputsConfig";
import {UserColumns} from "../../configs/Users/tableColumnsConfig";
import {userSearchInputConfig} from "../../configs/Users/searchInputsConfig";
import {deleteUser, getUserById, getUsers, updateUser} from "../../redux/reducers/userReducer";
import {getCities} from "../../redux/reducers/mainReducer";





const UsersPage = ({users,cities,userById,getCities,getUsers,getUserById,updateUser,deleteUser})=>{
    console.log(userById)
    return(
        <PageRenderer
            pageUrl ={'users'}
            pageTitle ={'Пользователи'}

            tableData={users}
            tableColumnsConfig={UserColumns}


            creatorTitle={'Добавление пользователя'}
            updaterTitle={'Изменение пользователя'}
            formInputsConfig={userInputConfig}
            optionsForSelectorData={{
                cityID: cities ? [...cities] : []
            }}
            loadSelectorData={[getCities]}
            creatorInitialFormValues={{
                avatarPath: '',
                name: "",
                surname: "",
                patronymic: "",
                birthDate: "",
                gender: 0,
                cityID: '',
                phoneNumber: "",
                instagram: "",
                email: "",
                password: '',
                repeatPassword: ''

            }}
            updaterInitialFormValues={{
                avatarPath: userById?.avatarPath,
                name: userById?.name,
                surname: userById?.surname,
                patronymic: userById?.patronymic,
                birthDate: userById?.birthDate,
                gender: userById?.gender,
                cityID: userById?.cityID,
                phoneNumber: userById?.phoneNumber,
                instagram: userById?.instagram,
                email: userById?.email,
                password: '',
                repeatPassword: '',
                role: userById?.role
            }}
            //searchInputsConfig = {userSearchInputConfig}
             getDataFunc={getUsers}
             valueById={userById}
             getByIdFunc={getUserById}
             updateFunc={updateUser}
             deleteFunc={deleteUser}

        />
    )
}
const mapStateToProps = state=>{
    return{
        users: state.user.users,
        userById: state.user.userById,
        cities: state.main.cities
    }
}

export  default  connect(mapStateToProps,{getUsers,getCities,getUserById,deleteUser,updateUser})(UsersPage)
