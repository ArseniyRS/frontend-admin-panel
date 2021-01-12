import {facebookSVG, instagramSVG, telegramSVG, whatsappSVG} from "../../assets";

export const advertisementInputConfig = [
    {
        additionally: "Хочу добавить услугу как:",
        // required: "Укажите пол пользователя",
        type: 'radio',
        radioLabel: ['Компания','Специалист'],
        key: 'type',

    },
    {
        placeholder: "Добавление фото",
        // required: "Впишите имя пользователя",
        //additionally: 'Личные данные'
        type: 'image',
        styles: {height:'120px'},
        dataType: 'array',
        key: 'avatar'
    },
    {
        label: "Имя",
        placeholder: "Введите имя",
       // required: "Впишите имя пользователя",
        key: 'name',
        fieldStyles: {width: '380px'}
    },
    {
        label: "Категории",
        placeholder: "Выберите категорию",
        //required: "Выберите категорию",
        type: 'selector',
        selectorProperty: 'category',
        dataType: 'array',
        parentBlock : 'open',
        key: 'category'
    },
    {
        label: "Подкатегория",
        placeholder: "Выберите подкатегорию",
        //required: "Выберите подкатегорию",
        type: 'selector',
        selectorProperty: 'subcategories',
        parentBlock : 'close',
        key: 'subcategory'
    },
    {
        label: "Город",
        placeholder: "Город пользователя",
        //required: "Укажите город",
        type: 'selector',
        selectorProperty: 'cityID',
        parentBlock : 'open',
        key: 'cityID'
    },
    {
      label: 'URL',
      placeholder: 'https://www.naidi.kg/....',
      type: 'url',
      parentBlock : 'close',
        key: 'url'
    },

    {
        label: "Оказываете ли вы услуги выездом?",
       // required: "Укажите пол пользователя",
        type: 'radio',
        radioLabel: ['С выездом','Без выезда'],
        key: 'viezd'
    },
    {
      label: 'Адрес работы',
      //required: 'Укажите адрес работы',
        type: 'map',
        dataType: 'obj',
        key: 'street',
    },
    {
        label: "Телефон",
        placeholder: "Телефон пользователя",
        type: 'array',
        dataType: 'array',
        key: 'phone',

    },
    {
        label: "Почта специалиста",
        placeholder: "Введите почту",
        key: 'email',
        parentBlock : 'open',
    },
    {
        label: "Веб-сайт специалиста",
        placeholder: "Введите веб-сайт",
        key: 'webSite',
        parentBlock : 'close',
    },
    {
        label: "Ссылка на соц. сети",
        placeholder: "Номер в WhatsApp",
        type:'withIcon',
        iconInput: whatsappSVG,
        parentBlock : 'open',
        key: 'whatsApp'
    },
    {
        placeholder: "Вставьте URL Instagram",
        type:'withIcon',
        iconInput: instagramSVG,
        parentBlock : 'close',
        fieldStyles:{marginTop: '28px'},
        key: 'instagram'
    },
    {
        placeholder: "URL Telegram",
        type:'withIcon',
        iconInput: telegramSVG,
        parentBlock : 'open',
        key: 'telegram'
    },
    {
        placeholder: "URL Facebook",
        type:'withIcon',
        iconInput: facebookSVG,
        parentBlock : 'close',
        key: 'facebook'
    },
    {
      additionally: "График работы",
      type: 'schedule',
        dataType: 'array',
        key: 'modes'
    },
    {
        placeholder: "Описание об опыте специалиста",
        additionally: 'Информация об опыте специалиста',
        type: 'textarea',
        fieldStyles: {width: '777px', height: '243'},
        key: 'description'
    },
    {
      placeholder: 'Исполнитель не добавлял фото',
        type: 'image',
       imageCount: 4,
        dataType: 'array',
        key: 'photosForm',
        fileTypes: ['jpg','png']
    },
    {
        placeholder: "Добавить еще услугу",
        additionally: 'Добавление услуг',
        dataType: 'array',
        type: 'array',
        labelObject: {name: 'Название услуги',cost: 'Цена услуги'},
        key: 'services',
        objectTemplate: {name: '',cost:0},
        objectTemplateStyles : {name: {width:'380px',marginRight:'10px'},cost: {width:'90px'}},
        fieldStyles: {width: '500px'}
    },

]
