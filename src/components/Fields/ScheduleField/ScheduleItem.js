import React, {useEffect, useState} from 'react'
import {Field} from "formik";



const ScheduleItem = ({id,dayName,changeDataHandler})=>{
    const [checked,setChecked] = useState(false)
    const [fromHour,setFromHour] = useState('')
    const [fromMinute,setFromMinute] = useState('')
    const [toHour,setToHour] = useState('')
    const [toMinute,setToMinute] = useState('')
    useEffect(()=>{

            changeDataHandler(id, {
                fromHour: fromHour,
                fromMinute: fromMinute,
                toHour: toHour,
                toMinute: toMinute,
                day: id,
                checked: checked
            })

    },[checked,fromHour,fromMinute,toHour,toMinute])
    return(
        <div  className={'schedule-item'}>
            <input className={'schedule-item__day-checkbox'} type="checkbox"  value={checked} onChange={()=>setChecked(!checked)}/>
            <div className={'schedule-item__day'}>{dayName}</div>
            <div className={'timeFrom'}>
                <input  type="text" value={fromHour} onChange={(e)=>setFromHour(e.target.value)}/>
            <span>:</span>
                <input  type="text" value={fromMinute} onChange={(e)=>setFromMinute(e.target.value)}/> </div>
            <span className={'schedule-item__divider'}>-</span>
            <div className={'timeTo'} >
                <input  type="text" value={toHour} onChange={(e)=>setToHour(e.target.value)}/>
                <span>:</span>
                <input  type="text" value={toMinute}  onChange={(e)=>setToMinute(e.target.value)}/> </div>
        </div>
    )
}
export default ScheduleItem