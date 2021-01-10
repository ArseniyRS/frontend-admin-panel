import React, {useEffect, useState} from 'react'
import './ScheduleField.css'
import {Field} from "formik";
import ScheduleItem from "./ScheduleItem";


const ScheduleField = props=>{
    const daysArray = ['Понедельник',"Вторник","Среда","Четверг","Пятница", "Суббота", "Воскресенье"]
    const [data,setData] = useState([])
    useEffect(()=>{
        props.setFieldValue(props.name,data)
    },[data])
    const changeDataHandler = (id,changedData)=>{
        let newData=[]
        const index = data.findIndex((el) => el.day === id);
        console.log(data)
        if(changedData.checked) {
            if(index!==-1) {
                newData = [...data.slice(0, index), changedData, ...data.slice(index + 1)];
            }else{
                newData = [...data, changedData];
            }
        }else{
            newData = [
                ...data.slice(0, index),
                ...data.slice(index + 1)
            ];
        }
        return setData(newData)
    }
    const elements=()=> {
        let result = []
        for (let i = 0; i < 7; i++) {
            result.push(<ScheduleItem key={i}
                                      id={i}
                                      dayName={daysArray[i]}
                                      changeDataHandler={changeDataHandler}

            />)
        }
        return result
    }
    return(
        <div>
            {elements()}
        </div>

    )
}


export default ScheduleField