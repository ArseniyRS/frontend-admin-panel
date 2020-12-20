import {facebookSVG, instagramSVG, telegramSVG, whatsappSVG} from "../../assets";

export const advertisementInputConfig = [
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
    },
    {
        label: "Категории",
        placeholder: "Выберите категорию",
        required: "Выберите категорию",
        type: 'selector',
        selectorProperty: 'category',
        dataType: 'array'
    },
    {
        label: "Подкатегория",
        placeholder: "Выберите подкатегорию",
        required: "Выберите подкатегорию",
        type: 'selector',
        selectorProperty: 'subcategories',
    },
    {
      label: 'URL',
      placeholder: 'https://www.naidi.kg/....',
      type: 'url',

    },
    {
        label: "Город",
        placeholder: "Город пользователя",
        required: "Укажите город",
        type: 'selector',
        selectorProperty: 'cityID'
    },
    {
        label: "Оказываете ли вы услуги выездом?",
        required: "Укажите пол пользователя",
        type: 'radio',
        radioLabel: ['С выездом','Без выезда']
    },
    {
      label: 'Адрес работы',
      required: 'Укажите адрес работы',
        type: 'map'
    },
    {
        label: "Комментарии к адресу",
        placeholder: "Введите уточнение",

    },

    {
        label: "Телефон",
        placeholder: "Телефон пользователя",
        type: 'array',
    },
    {
        label: "Почта специалиста",
        placeholder: "Введите почту",
    },
    {
        label: "Веб-сайт специалиста",
        placeholder: "Введите веб-сайт",
    },
    {
        label: "Ссылка на соц. сети",
        placeholder: "Номер в WhatsApp",
        type:'withIcon',
        iconInput: whatsappSVG
    },
    {
        placeholder: "URL Telegram",
        type:'withIcon',
        iconInput: telegramSVG
    },
    {
        placeholder: "Вставьте URL Instagram",
        type:'withIcon',
        iconInput: instagramSVG
    },

    {
        placeholder: "URL Facebook",
       type:'withIcon',
        iconInput: facebookSVG
    },
    // {
    //   type: 'schedule'
    // },
    {
        placeholder: "Описание об опыте специалиста",
        additionally: 'Информация об опыте специалиста'
    },
    {
      placeholder: 'Исполнитель не добавлял фото',
        type: 'image',
       imageCount: 4,
        dataType: 'array'
    },
    {
        placeholder: "Добавить еще услугу",
        additionally: 'Добавление услуг',
        type: 'array',
        labelObject: {name: 'Название услуги',cost: 'Цена услуги'}
    },

]
