
import React from "react";
import {searchSVG} from "../../assets";

const SearchInput = ({
                       name,

                       placeholder,
                       type='',
                       selectInputData=[],
                       selectorProperty,
                       options=[]
                   })=>{
    return(
        <div className="searchInput">
            <input type="text" placeholder={placeholder}/>
            <img src={searchSVG} alt=""/>
        </div>
    )
}

export default SearchInput