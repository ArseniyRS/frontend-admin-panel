import React, {useEffect, useState} from 'react'
import './FileInput.css'

const FileInput = props=>{
const [file,setFile] = useState(props.value ? props.value : [])
    const [typeError,setTypeError] = useState(false)
    const loadHandler = (f)=>{
    if(f[0].type === "application/pdf"){
      return  setFile(f)
    }
    return setTypeError(true)
    }
    useEffect(()=>{
       props.setFieldValue(props.name,file)
    },[file])
    return(
        <div >
            <label className="custom-file-upload" onClick={()=>setTypeError(false)}>
                {file[0]?.name ? file[0].name : props.placeholder}
                <input type="file" name={props.name}  onChange={(e)=>loadHandler(e.target.files)} />
                <div className={'custom-file-btn'}>Выбрать</div>
            </label>
            {typeError && <span className='formErrorMessage'>Можно загружать файлы только  в pdf формате</span>}
        </div>
    )
}

export default FileInput