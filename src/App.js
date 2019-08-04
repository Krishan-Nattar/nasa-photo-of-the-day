import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// useEffect(() => {
//   console.log("out here!");
// });

function App() {
  const [title, setTitle] = useState();
  const [hdurl, setHdurl] = useState();
  const [url, setUrl] = useState();
  const [explanation, setExplanation] = useState();
  const [today, setToday] = useState(new Date());
  const [selectDate, setSelectDate] = useState(
    `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  );

  // const axios = require('axios');

  useEffect(() => {
    console.log(selectDate);

    // axios
    //   .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${selectDate}`)
    //   .then(function(response) {
    //     // handle success
    //     console.log(response);
    //     // setData(response)
    //     setTitle(response.data.title);
    //     setHdurl(response.data.hdurl);
    //     setUrl(response.data.url);
    //     setExplanation(response.data.explanation);

    //   })
    //   .catch(function(error) {
    //     // handle error
    //     console.log(error);
    //   });
  }, [selectDate]);
  let dateArray = [];
  function createDates() {
    let current = new Date();
    let dateString = `${current.getFullYear()}-${current.getMonth() +
      1}-${current.getDate()}`;
    // console.log(dateString);
    let year = current.getFullYear();
    let month = current.getMonth() + 1;
    let day = current.getDate();

    dateArray.push(dateString);
    for (let i = 0; i < 12; i++) {
      // console.log(i);
      for (let i = 0; i < 31; i++) {
        if (day > 1) {
          day--;
          // console.log(day);
          dateString = `${year}-${month}-${day}`;
          dateArray.push(dateString);
        }
      }
      if (month > 0) {
        month--;
        // dateString = `${year}-${month}-${day}`;
        // dateArray.push(dateString);
      }
      if (day == 1 && month != 1) {
        switch (month) {
          case 12:
            break;

          case 11:
            day = 31;
            break;

          case 10:
            day = 32;
            break;

          case 9:
            day = 31;
            break;

          case 8:
            day = 32;
            break;

          case 7:
            day = 32;
            break;

          case 6:
            day = 31;
            break;

          case 5:
            day = 32;
            break;

          case 4:
            day = 31;
            break;

          case 3:
            day = 32;
            break;

          case 2:
            if (year % 4 == 0) {
              if (year % 100 == 0 && year % 400 != 0) {
                day = 29;
                break;
              }
              day = 30;
              break;
            } else {
              day = 29;
            }
            break;

          case 1:
            day = 32;

            break;
        }
      }
      // console.log(day,month, year);

      if (day == 1 && month == 0) {
        day = 32;
        month = 12;
        year--;
      }
      // console.log(day,month, year);
    }
    // console.log(dateArray);

    // console.log(year, month, day);

    // console.log(today.getFullYear()); //Year YYYY
    // console.log(today.getMonth()+1); //Month MM
    // console.log(today.getDate()); //day of the month DD

    return dateArray;

    // for(let i=0; i<dateArray.length; i++){
    //   return <option value={dateArray[i]}>{dateArray[i]}</option>
    // }
  }

  createDates();

  function handleSelectDate() {
    let d = document.getElementById("select_id");
    // console.log(d.value);
    setSelectDate(d.value);
    // console.log('here');
  }

  return (
    <div className="App">
      <select onChange={handleSelectDate} id="select_id">
        {/* <option value="1">one</option>
        <option value="2">two</option>
        <option value="3">three</option>
        <option value="4">four</option> */}
        {dateArray.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
      <h1>{title}</h1>
      <p>
        {console.log("rendered")}

        {/* <img src={hdurl}/> */}
        <img className="image" src={url} />
        {explanation}
      </p>
    </div>
  );
}

export default App;
