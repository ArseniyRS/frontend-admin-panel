export const userInputConfig = [
    {
        placeholder: "Добавление фото",
       // required: "Впишите имя пользователя",
        //additionally: 'Личные данные'
        type: 'image',
        styles: {height:'120px'}
    },
    {
    label: "Имя",
    placeholder: "Введите имя",
    required: "Впишите имя пользователя",
    additionally: 'Личные данные'
    },
    {
        label: "Фамилия",
        placeholder: "Введите фамилию",
        required: "Впишите фамилию пользователя",
    },
    {
        label: "Отчество",
        placeholder: "Введите отчество",
        required: "Впишите отчество пользователя",
    },
    {
        label: "Дата рождения",
        placeholder: "Дата рождения пользователя",
        required: "Впишите дату рождения пользователя",
    },
    {
        label: "Пол",
        required: "Укажите пол пользователя",
        type: 'radio',
        radioLabel: ['Женский','Мужской']
    },
    {
        label: "Город",
        placeholder: "Город пользователя",
        required: "Укажите город",
        type: 'selector',
        selectorProperty: 'cityID'
    },

    {
        label: "Телефон",
        placeholder: "Телефон пользователя",
        required: "Впишите номер телефона пользователя",
        additionally: 'Контакты'
    },
    {
        label: "Ссылка на соц. сети",
        placeholder: "Вставьте URL Instagram",
    },
    {
        label: "Почта",
        placeholder: "Введите почту",
        required: "Впишите почту пользователя",
    },
    {
        label: "Пароль",
        placeholder: "Введите пароль",
        additionally: 'Пароль',
        styles: {marginTop:'150px'}
    },
    {
        label: "Повтор пароля",
        placeholder: "Повторите пароль",
    },
    {
        additionally: 'Роль',
        placeholder: "Повторите пароль",
    },
]
