import React from 'react'
import SearchInput from "./SearchInputs";



const SearchForm = (props)=>{
    const elements = props.inputConfig.map(item=>{
        return(
            <SearchInput
                placeholder={item?.label}
                type={item?.type}
                selectInputData={item?.selectInputData}
                options={props.optionsForSelector}
                selectorProperty={item?.selectorProperty}
            />
        )
    })
    return(
        <div className={'searchInput-list'}>
            {elements}
        </div>
    )
}

export default SearchForm