import React, { useState, useEffect } from "react";
import "../App.css";
import { Select, Button, Icon, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function Header(props) {

  return (
    <div>
      <Segment className="header">
        <h1>NASA Photo Of The Day</h1>
        <p>Select Date:</p>
      <Select placeholder='Select Date' onChange={props.handleSelectDate} options={props.dateArray} id="select_id" />
      </Segment>
      
      {/* <Select placeholder='Select your country' options={countryOptions} /> */}
      
      {/* <select onChange={props.handleSelectDate} id="select_id">
        {props.dateArray.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select> */}
    </div>
  );
}

export default Header;
