import './requests_filter.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';

const Requests_filter = () => {

  const [data, setData] = useState([])
  const [StartDate, setStartDate] = React.useState()
  const [EndDate, setEndDate] = React.useState()

  const [listDate, setListDate] = React.useState([]) 


 

  const getData = async (startDate, endDate) => {
    console.log(startDate);
    console.log(endDate);
    const response = await axios.post('http://77.105.136.213:5000/keys/getbydate', {
      start_date: startDate,
      end_date: endDate
    })
    setData(response.data.message)
    console.log(data);
    
  }
  var uniqueDates = [...new Set(data.map((obj) => obj.date.substring(0, 10)))];
  uniqueDates.sort((a, b) => {
    if (a < b) {
      return 1
    } else {
      return 0
    }
  })
  


  const tableData = uniqueDates.map((obj) => {

  })





    return (
      <div>
        <DatePicker
        selected={StartDate}
        onChange={(val)=>{
          setStartDate(new Date(val.getTime()))
          console.log(StartDate);
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
              <th>Количество символов</th>
              <th>Количество символов (ответ)</th>
              <th>Ошибки</th>
            </tr>
          </thead>
          <tbody>
            {uniqueDates.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
                {/* <td>{item.queries}</td>
                <td>{item.responses}</td>
                <td>{item.characterCount}</td>
                <td>{item.responseCharacterCount}</td>
                <td>{item.errors}</td> */}
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
}

export default Requests_filter