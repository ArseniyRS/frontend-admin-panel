import React, {useEffect, useState} from 'react'
import Calendar from 'react-calendar';
import moment from 'moment'
import 'react-calendar/dist/Calendar.css';
import './CalendarInput.css'

const CalendarInput = props=>{
    const [isOpen,setIsOpen] = useState(false)
    const [date,setDate] = useState(props.value )
    console.log(moment(props.value).valueOf())
    console.log(props.value)
    useEffect(()=>{
       props.setFieldValue(props.name,moment(date).format())
    },[date])
    return(
<>

        <input type="text" value={moment(props.value).add(365, 'day').format('LL')} name={props.name} readOnly onClick={()=>setIsOpen(true)}/>
    {isOpen &&
        <>
    <div className="calendar-wrapper" value={moment(props.value).valueOf()} onClick={()=>setIsOpen(false)}></div>
    <div style={{zIndex: 1001}}>
        <Calendar value={date} onChange={setDate}/>

    </div>
            </>
            }
        </>


    )
}

export default CalendarInput