import './requests_filter.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';

const Requests_filter = () => {

  const [data, setData] = useState([])
  const [errors, setErrors] = useState([])

  const [StartDate, setStartDate] = React.useState()
  const [EndDate, setEndDate] = React.useState()

  const [onlySubscribed, setOnlySubscribed] = React.useState(false)
  const [subscribed, setSubscribed] = React.useState([])




  const getData = async (startDate, endDate) => {
    console.log(startDate);
    console.log(endDate);
    const response = await axios.post('http://77.105.136.213:5000/keys/getbydate', {
      start_date: startDate,
      end_date: endDate
    })

    const responseErrors = await axios.post('http://77.105.136.213:5000/keys/getbydate_errors', {
      start_date: startDate,
      end_date: endDate
    })
    setData(response.data.message)
    console.log(responseErrors.data);
    data.map((obj)=>{
      if (!obj.is_subscribed) {
        setSubscribed([...subscribed, obj])
      }
    })

    setErrors(responseErrors.data.message)


  }
  let uniqueDates = [...new Set(data.map((obj) => obj.date.substring(0, 10)
  ))]
  uniqueDates.sort((a, b) => {
    if (a < b) {
      return 0
    } else {
      return 1
    }
  })


  const tableData = uniqueDates.map((date) => {
    if (!onlySubscribed) {
      const filteredObjects = data.filter((obj) => obj.date.substring(0, 10) === date);
      const queries = filteredObjects.map((obj) => obj.data)
      const responses = filteredObjects.map((obj) => obj.response);
      const totalChars = filteredObjects.reduce((acc, obj) => acc + obj?.data?.length, 0);
      const totalResponseChars = filteredObjects.reduce((acc, obj) => acc + obj?.response?.length, 0);
      const errs = errors.filter((err) => err.date.substring(0, 10) == date)
      return {
        date,
        queries,
        responses,
        totalChars,
        totalResponseChars,
        errs
      };

    } else {
      const filteredObjects = subscribed.filter((obj) => obj.date.substring(0, 10) === date);
      const queries = filteredObjects.map((obj) => obj.data)
      const responses = filteredObjects.map((obj) => obj.response);
      const totalChars = filteredObjects.reduce((acc, obj) => acc + obj?.data?.length, 0);
      const totalResponseChars = filteredObjects.reduce((acc, obj) => acc + obj?.response?.length, 0);
      const errs = errors.filter((err) => err.date.substring(0, 10) == date)
      return {
        date,
        queries,
        responses,
        totalChars,
        totalResponseChars,
        errs
      };
    }

  })



    return (
      <div>
        <DatePicker
        selected={StartDate}
        onChange={(val)=>{
          setStartDate(new Date(val.getTime()))
        }}

        placeholderText={'Выберите начальную дату'}
      />
      <h3>До</h3>
        <DatePicker
        selected={EndDate}
        onChange={(val) => {
          setEndDate(new Date(val.getTime()))
        }}
        placeholderText={'Выберите конечную дату'}
      />

      <div style={{display: 'flex'}}>
        <input type="checkbox" placeholder='Только платные' checked={onlySubscribed} onChange={()=>setOnlySubscribed(!onlySubscribed)} />
        <h4>Только платные</h4>
      </div>

      <br />
      <br />
      <br />
      <button onClick={(e) => getData(StartDate, EndDate)}>Применить фильтр</button>
          <table>
          <thead>
            <tr>
              <th>Дата</th>
              <th>Запросы</th>
              <th>Ответы</th>
              <th>Количество символов (запрос)</th>
              <th>Количество символов (ответ)</th>
              <th>Ошибки</th>
              <th>Среднее время ответа</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{(item.queries.length)}</td>
                <td>{(item.responses.length)}</td>
                <td>{(((item.totalChars)/item.queries.length))=='NaN'? (item.totalChars)/item.queries.length : item.totalResponseChars/item.responses.length*0.07 }</td>
                <td>{(item.totalResponseChars)/item.responses.length}</td>
                <td>{item.errs.length}</td>
                <td>{item.time/item.time?.length}</td>
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
}

export default Requests_filter