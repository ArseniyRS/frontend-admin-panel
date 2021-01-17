import React, {useEffect, useState} from "react";
import './ImgUploader.css';
import ImageUploading from 'react-images-uploading';
import {addImageSVG, deleteImageSVG} from "../../../assets";
import {imageRouter} from "../../../utils/imageRouter";


const ImgUploader = ({setFieldValue,name,value,placeholder,imageCount=1,fileTypes=['jpg', 'gif', 'png','svg']})=>{





    const [file,setFile] = useState([])

    useEffect(()=>{
            setFieldValue(name, file)
    },[file])


    const onChange = (fileList) => {
        setFile(fileList);
    }
        return (

            <ImageUploading
                multiple
                value={file}
                onChange={onChange}
                maxNumber={imageCount}
                dataURLKey="data_url"
                acceptType={fileTypes}
            >
                {({
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                      errors
                  }) => (
                              imageCount===1 ?
                            <div className="upload__image-wrapper">
                                {file.length===0 && <div
                                    className={'upload__image-uploadBtn'}
                                    style={isDragging ? {borderColor: '#009B00'} : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    Добавить фото пользователя
                                </div>
                                }
                                {file.length!==0 &&
                                <div className={'upload__image-container'}>

                                    <div className="upload__image-item">
                                        <img src={file[0]?.data_url} alt=""/>
                                    </div>
                                    <span className="update__image-item" onClick={() => onImageUpdate(0)}>Изменить фото профиля</span>
                                        <span className="update__image-item" onClick={() => onImageRemove(0)}>Удалить фото профиля</span>
                                </div>
                                }
                                {errors &&
                                <>
                                    {errors.maxNumber && <span className='formErrorMessage'>{`Максимальное количество фото - ${imageCount}`}</span>}
                                    {errors.acceptType && <span className='formErrorMessage'>{`Этот тип файла не поддерживается. Загрузить можно (${fileTypes})`}</span>}
                                </>
                                }
                            </div>
                                  :

                    <div className="upload__imageArray-wrapper">

                            {file.length!==0 ? (
                                    <div className={'upload__imageArray-loaded-container'}>
                                <div className={'upload__imageArray-container'}>
                                {
                                    file.map((image, index) => (
                                        <div key={index} className="upload__imageArray-item">
                                            <img src={image['data_url'] ? image['data_url'] : image} alt=""  />
                                            <div className="image-itemArray__btn-wrapper">
                                                <span><img src={deleteImageSVG} onClick={() => onImageRemove(index)}/></span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                                        {file.length<imageCount &&
                                        (<div  className={'upload__imageArray-uploadBtn-loaded'} {...dragProps} onClick={onImageUpload}><img src={addImageSVG} alt=""/></div>)}
                                    </div>
                                ) :
                                ( <div
                                    className={'upload__imageArray-uploadBtn-container'}
                                    style={isDragging ? { borderColor: '#009B00' } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >Нажмите или перетащите файл, чтобы загрузить
                                <div  className={'upload__imageArray-uploadBtn'}>Добавить фото</div>
                                </div>)

                            }


                        {file.length!==0 && <div className={'upload__image-remove-allBtn'} onClick={onImageRemoveAll}>Удалить все файлы</div> }

                        {errors &&
                        <>
                            {errors.maxNumber && <span className='formErrorMessage'>{`Максимальное количество фото - ${imageCount}`}</span>}
                            {errors.acceptType && <span className='formErrorMessage'>{`Этот тип файла не поддерживается. Загрузить можно (${fileTypes})`}</span>}
                        </>
                        }
                    </div>
                )}
            </ImageUploading>
        )
}

export default ImgUploader