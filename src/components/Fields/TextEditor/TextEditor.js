import React from 'react'
import ReactQuill from 'react-quill';
import './TextEditor.css'
import 'react-quill/dist/quill.snow.css'

const TextEditor = props=>{

    const handleChange =text=>props.setFieldValue(props.name,text)
    return(
        <div className={'textEditor'}>
        <ReactQuill
            theme={'snow'}
            value={props.value}
            placeholder={props.placeholder}
            modules={{
                toolbar: [
                    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                    [{size: []}],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'},
                        {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'image', 'video'],
                    ['clean']
                ],
                clipboard: {
                    // toggle to add extra line breaks when pasting HTML:
                    matchVisual: false,
                }}}
            formats={[
                'header', 'font', 'size',
                'bold', 'italic', 'underline', 'strike', 'blockquote',
                'list', 'bullet', 'indent',
                'link', 'image', 'video'
            ]}
            onChange={handleChange} />
        </div>
    )
}

export default TextEditor


