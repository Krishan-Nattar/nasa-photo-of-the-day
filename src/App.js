import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
// useEffect(() => {
//   console.log("out here!");
// });

function App() {
  const [title, setTitle] = useState();
  const [hdurl, setHdurl] = useState();
  const [url, setUrl] = useState();
  const [explanation, setExplanation] = useState();
  const [selectDate, setSelectDate] = useState();

  // const axios = require('axios');

  useEffect(() => {
    console.log("Hello from the effect hook!");
    let today = new Date;
    
    console.log(today.getFullYear()); //Year YYYY
    console.log(today.getMonth()+1); //Month MM
    console.log(today.getDate()); //day of the month DD
    
    // axios
    //   .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
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

  function handleSelectDate(){
    let d = document.getElementById("select_id");
    // console.log(d.value);
    setSelectDate(d.value);
    // console.log('here');
  }

  return (
    <div className="App">
      <select onChange={handleSelectDate} id="select_id">
        <option value="1">one</option>
        <option value="2">two</option>
        <option value="3">three</option>
        <option value="4">four</option>
      </select>
      <h1>{title}</h1>
      <p>{console.log('rendered')}
        
        {/* <img src={hdurl}/> */}
        <img className="image" src={url} />
        {explanation}
      </p>
    </div>
  );
}

export default App;
