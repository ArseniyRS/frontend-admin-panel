export const toBeautifyValue =value=>{
    switch (value) {
        case 'Password':
            return 'Пароль'
        case 'Category':
            return 'Категория'
        case 'Subcategory':
            return 'Подкатегория'
        case 'Company':
            return 'Компания'
        case 'Edit':
            return 'Редактирование'
        case 'Delete':
            return 'Удаление'
        case 'Create':
            return 'Добавление'
        case 'Comment':
            return 'Комментарий'
        case 'City':
            return 'Город'
        case 'Account':
            return 'Аккаунт'
        case 'Update':
            return 'Обновление'
        case 'Put':
            return 'Редактирование'
        case 'Subcategories':
            return 'Подкатегории'
        default:
            return value
    }
}