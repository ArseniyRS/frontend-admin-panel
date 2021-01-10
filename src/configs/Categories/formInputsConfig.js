export const categoryInputConfig = [{
    label: "Категория",
    placeholder: "Красивая категория",
    required: "Впишите название категории",
    key: 'name'

},
    {
        label: "Подкатегории",
        placeholder: "Добавить подкатегорию",
        type: 'array',
        dataType: 'array',
        objectTemplate: {name: ''},
        labelObject: {name: 'Введите название подкатегории'},
        objectTemplateStyles : {name: {width:'500px'}},
        key: 'subcategories'
    },

]