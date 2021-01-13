export const userInputConfig = [
    {
        label: "Роль пользователя",
        required: "Укажите роль пользователя",
        type: 'radio',
        radioLabel: ['Пользователь','Админ','Суперадмин'],
        key:'type'
    },

    {
        placeholder: "Добавление фото",
       // required: "Впишите имя пользователя",
        //additionally: 'Личные данные'
        type: 'image',
        styles: {height:'120px'},
        key:'avatarPath',
        dataType: 'array',
    },
    {
    label: "Имя",
    placeholder: "Введите имя",
    //required: "Впишите имя пользователя",
    additionally: 'Личные данные',
        key:'name',
        nullable: true
    },
    {
        label: "Фамилия",
        placeholder: "Введите фамилию",
        //required: "Впишите фамилию пользователя",
        key:'surname',
        nullable: true
    },
    {
        label: "Отчество",
        placeholder: "Введите отчество",
        //required: "Впишите отчество пользователя",
        key:'patronymic',
        nullable: true
    },
    {
        label: "Дата рождения",
        placeholder: "Дата рождения пользователя",
        //required: "Впишите дату рождения пользователя",
        key:'birthDate',
        type: 'calendar',

    },
    {
        label: "Пол",
        required: "Укажите пол пользователя",
        type: 'radio',
        radioLabel: ['Женский','Мужской'],
        key:'gender'
    },
    {
        label: "Город",
        placeholder: "Город пользователя",
       // required: "Укажите город",
        type: 'selector',
        selectorProperty: 'cityID',
        key:'cityID'
    },

    {
        label: "Телефон",
        placeholder: "Телефон пользователя",
       // required: "Впишите номер телефона пользователя",
        additionally: 'Контакты',
        key:'phoneNumber',
        nullable: true
    },
    {
        label: "Ссылка на соц. сети",
        placeholder: "Вставьте URL Instagram",
        key:'instagram',
        nullable: true
    },
    {
        label: "Почта",
        placeholder: "Введите почту",
        required: "Впишите почту пользователя",
        key:'email',
        nullable: true
    },
    {
        label: "Пароль",
        placeholder: "Введите пароль",
        additionally: 'Пароль',
        styles: {marginTop:'150px'},
        key:'password'
    },
    {
        label: "Повтор пароля",
        placeholder: "Повторите пароль",
        key:'repeatPassword'
    },
]
