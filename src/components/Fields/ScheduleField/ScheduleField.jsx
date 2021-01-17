import React, {useEffect, useState} from 'react'
import './ScheduleField.css'
import {Field} from "formik";
import ScheduleItem from "./ScheduleItem";


const ScheduleField = props=>{
    const daysArray = ['Понедельник',"Вторник","Среда","Четверг","Пятница", "Суббота", "Воскресенье"]
    const createInitialData = ()=>{
        let resultData=[]
        for (let i = 0; i < 7; i++) {
            resultData.push({
                fromHour: 0,
                fromMinute: 0,
                toHour: 0,
                toMinute: 0,
                day: i,
                checked: false
            })
        }
        return resultData
    }
    const [data,setData] = useState(props.value?.length ? props.value : createInitialData())
    useEffect(()=>{
        props.setFieldValue(props.name,data)
    },[data])
    const changeDataHandler = (id,changedData)=>{
        let newData=[]
        const index = data.findIndex((el) => el.day === id);
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
    const elements= data.map((item,index)=><ScheduleItem key={index}
                                      id={index}
                                      data={item}
                                      dayName={daysArray[item.day]}
                                      changeDataHandler={changeDataHandler}
            />)
    return(
        <div>
            {elements}
        </div>

    )
}


export default ScheduleField