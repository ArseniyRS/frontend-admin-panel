import React, {useEffect} from 'react'
import './ScheduleField.css'
import {Field} from "formik";


const ScheduleField = props=>{
    const daysArray = ['Понедельник',"Вторник","Среда","Четверг","Пятница", "Суббота", "Воскресенье"]
    console.log(props.arrayHelpers.form.values[props.name])
    useEffect(()=>{
        for (let i=0;i<7;i++){
            props.arrayHelpers.push({comSpecID: '',
                fromHour:'',
                fromMinute: '',
                toHour:'',
                toMinute:'',
                day:'',} )
        }
    },[])

    return(
        <div>
            {
                props.arrayHelpers.form.values[props.name].map((item, index) => {

                    return(
                        <div key={index} className={'schedule-item'}>
                            <Field type="checkbox" name={`${props.name}.${[index]}["day"]`} value={index} />
                            <span>{daysArray[index]}</span>
                            <div className={'timeFrom'}><Field name={`${props.name}.${[index]}["fromHour"]`} type="text"/>:<Field name={`${props.name}.${[index]}["fromMinute"]`} type="text"/> </div>
                            -
                            <div className={'timeTo'} ><Field name={`${props.name}.${[index]}["toHour"]`} type="text"/>:<Field name={`${props.name}.${[index]}["toMinute"]`}  type="text"/> </div>
                        </div>
                    )
                })
            }
        </div>

    )
}


export default ScheduleField