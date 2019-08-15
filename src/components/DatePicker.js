import React, {useState} from "react";
import "../App.css";
import { Select, Segment} from "semantic-ui-react";
import { makeStyles } from '@material-ui/core/styles';
import "semantic-ui-css/semantic.min.css";
import {StyledH1} from './Styled';
import Fab from '@material-ui/core/Fab';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

// const useStyles = makeStyles(theme => ({
//   fab: {
//     margin: theme.spacing(1),
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
// }));

const todayDate = new Date();


function DatePickerComponent(props) {
//   const classes= useStyles();

  return (
    <div>
      {/* <Segment className="datepicker"> */}

      <DatePicker
        selected={props.selectedDate}
        onChange={props.handleDateChange}
      />
      {/* </Segment> */}
     
    </div>
  );
}

export default DatePickerComponent;
