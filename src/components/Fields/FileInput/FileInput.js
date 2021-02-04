import React, {useEffect, useState} from 'react'
import './FileInput.css'

const FileInput = props=>{
const [file,setFile] = useState( [])
    const [typeError,setTypeError] = useState(false)
    console.log(props.value)
    const loadHandler = (f)=>{
    if(f[0].type === "application/pdf"){
      return  setFile(f[0])
    }
    return setTypeError(true)
    }
    useEffect(()=>{
        setFile(props.value)
    },[])
    useEffect(()=>{
       props.setFieldValue(props.name,[file])
    },[file])
    return(
        <div >
            <label className="custom-file-upload" onClick={()=>setTypeError(false)}>
                {file?.name ? file.name : props.placeholder}
                <input type="file" name={props.name}  onChange={(e)=>loadHandler(e.target.files)} />
                <div className={'custom-file-btn'}>Выбрать</div>
            </label>
            {typeError && <span className='formErrorMessage'>Можно загружать файлы только  в pdf формате</span>}
        </div>
    )
}

export default FileInput