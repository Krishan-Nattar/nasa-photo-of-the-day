import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Segment} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import DatePicker from './components/DatePicker';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


function App() {
  const [title, setTitle] = useState();

  const [url, setUrl] = useState();
  const [explanation, setExplanation] = useState();
  const [today, setToday] = useState(new Date());
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectDate, setSelectDate] = useState(
  


    `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  );
  const [datePicker, setDatePicker] = useState(new Date());

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });
  
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.nasa.gov/planetary/apod?api_key=4dJPh8SSC1hefrR5bStIr4AOlzmS7sz4Vni4Zbbg&date=${selectDate}`
  //     )
  //     .then(function(response) {

  //       setTitle(response.data.title);
  //       setUrl(response.data.url);
  //       setExplanation(response.data.explanation);
  //     })
  //     .catch(function(error) {
  //       // handle error
  //       console.log(error);
  //     });
  // //  console.log(selectDate);
  // }, [selectDate]);

  useEffect(() => {
    const dateString2 = `${datePicker.getFullYear()}-${datePicker.getMonth() + 1}-${datePicker.getDate()}`;
    console.log(dateString2);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=4dJPh8SSC1hefrR5bStIr4AOlzmS7sz4Vni4Zbbg&date=${dateString2}`
      )
      .then(function(response) {

        setTitle(response.data.title);
        setUrl(response.data.url);
        setExplanation(response.data.explanation);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }, [datePicker]);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }


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

    dateArray.forEach((item, index, array) => {
      let object = {
        key: index,
        value: item,
        text: item
      };
      dropdownOptions.push(object);
    });
    return dropdownOptions;
  }
  const handleDateChange=(date)=> {
    setDatePicker(date);
    }
    

  createDates();

  function handleSelectDate() {
    let d = document.querySelector("#select_id .text");
    setSelectDate(d.innerText);
  }
  const classes = useStyles();
  return (
    <div className="App">
      {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}

<AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" className="appbar">
            Nasa Photo Of The Day
            <DatePicker selectedDate={datePicker} handleDateChange={handleDateChange} />
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="toprow">
      {/* <Header handleSelectDate={handleSelectDate} dateArray={dropdownOptions}> */}
      
      {/* </Header> */}
      
      </div>
      <Main title={title} explanation={explanation} url={url} />
      <Footer />
    </div>
  );
}

export default App;
