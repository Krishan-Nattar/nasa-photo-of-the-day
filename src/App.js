import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './components/Header';
import axios from "axios";
import Main from './components/Main';
import Footer from './components/Footer';
// import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
// import styled from 'styled-components';

function App() {
  const [title, setTitle] = useState();

  const [url, setUrl] = useState();
  const [explanation, setExplanation] = useState();
  const [today, setToday] = useState(new Date());
  const [selectDate, setSelectDate] = useState(
    `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  );

  useEffect(() => {
    

    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=4dJPh8SSC1hefrR5bStIr4AOlzmS7sz4Vni4Zbbg&date=${selectDate}`)
      .then(function(response) {
        // handle success
        // console.log(response);

        setTitle(response.data.title);

        setUrl(response.data.url);
        setExplanation(response.data.explanation);

      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
    console.log(selectDate);

  }, [selectDate]);
  let dateArray = [];
  let dropdownOptions = [];
  function createDates() {
    let current = new Date();
    let dateString = `${current.getFullYear()}-${current.getMonth() +
      1}-${current.getDate()}`;
    let year = current.getFullYear();
    let month = current.getMonth() + 1;
    let day = current.getDate();

    dateArray.push(dateString);
    for (let i = 0; i < 25; i++) {
      for (let i = 0; i < 31; i++) {
        if (day > 1) {
          day--;
          dateString = `${year}-${month}-${day}`;
          dateArray.push(dateString);
        }
      }
      if (month > 0) {
        month--;
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

      if (day == 1 && month == 0) {
        day = 32;
        month = 12;
        year--;
      }
    }
    
    dateArray.forEach((item, index, array)=>{
      let object = {
        key:index,
        value:item,
        text:item
      }
      dropdownOptions.push(object);
    });
    return dropdownOptions;
  }

  createDates();

  function handleSelectDate() {
    let d = document.querySelector("#select_id .text");
    setSelectDate(d.innerText);
  }
  return (
    <div className="App">
      <Header handleSelectDate={handleSelectDate} dateArray={dropdownOptions} />
      <Main title={title} explanation={explanation} url={url} />
      <Footer />
    </div>
  );
}

export default App;
