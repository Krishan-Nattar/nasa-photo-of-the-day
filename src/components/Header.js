import React, {useState} from "react";
import "../App.css";
import { Select, Segment} from "semantic-ui-react";
import { makeStyles } from '@material-ui/core/styles';
import "semantic-ui-css/semantic.min.css";
import {StyledH1} from './Styled';
import Fab from '@material-ui/core/Fab';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const todayDate = new Date();

const handleChange=(date)=> {
//  console.log(date)
 let dateString = `${date.getFullYear()}-${date.getMonth() +
  1}-${date.getDate()}`;
  console.log(dateString);
}

function Header(props) {
  const classes= useStyles();

  return (
    <div>
      <Segment className="header">
        <StyledH1>Nasa Photo Of The Day</StyledH1>
      {/* <Select placeholder='Select Date' options={props.dateArray} id="select_id" />
      <br />
    <Fab variant="extended" aria-label="delete" className={classes.fab} onClick={props.handleSelectDate}>
        Show Me!
      </Fab><br /><br /> */}
      {props.children}
      {/* <DatePicker
        selected={todayDate}
        onChange={handleChange}
      /> */}
      </Segment>
     
    </div>
  );
}

export default Header;
