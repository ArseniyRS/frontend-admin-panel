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
    {
        label: "Популярная категория",
        type: 'check',
        fieldStyles: {display: 'flex', alignItems: 'center',flexDirection: 'row-reverse',width: '120px'},
        key: 'popular'
    },
    {
        placeholder: "Добавить иконку категории",
        type: 'image',
        styles: {height:'120px'},
        dataType: 'array',
        key: 'avatar'
    },

]