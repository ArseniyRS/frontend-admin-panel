import React, {useEffect} from 'react'
import {connect} from "react-redux";
import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {userInputConfig} from "../../configs/Users/formInputsConfig";
import {UserColumns} from "../../configs/Users/tableColumnsConfig";
import {clearUser, createUser, deleteUser, getUserById, getUsers, updateUser} from "../../redux/reducers/userReducer";
import {getCities} from "../../redux/reducers/mainReducer";





const UsersPage = ({userFetchLoader,users,cities,userById,createUser,getCities,clearUser,getUsers,getUserById,updateUser,deleteUser})=>{
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
                type: '',
                avatarPath: '',
                name: "",
                surname: "",
                patronymic: "",
                birthDate: "",
                gender: 0,
                cityID: 0,
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
                patronymic:userById?.patronymic,
                birthDate: userById?.birthDate,
                gender: userById?.gender,
                cityID: userById?.cityID,
                phoneNumber: userById?.phoneNumber,
                instagram: userById?.instagram,
                email: userById?.email,
            }}
            //searchInputsConfig = {userSearchInputConfig}
             getDataFunc={getUsers}
             valueById={userById}
             getByIdFunc={getUserById}
             createFunc={createUser}
             updateFunc={updateUser}
             deleteFunc={deleteUser}
            clearFunc={clearUser}
            isLoading={userFetchLoader}

        />
    )
}
const mapStateToProps = state=>{
    return{
        users: state.user.users,
        userById: state.user.userById,
        cities: state.main.cities,
        userFetchLoader: state.user.userFetchLoader
    }
}

export  default  connect(mapStateToProps,{clearUser,createUser,getUsers,getCities,getUserById,deleteUser,updateUser})(UsersPage)
