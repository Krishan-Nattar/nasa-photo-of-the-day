import React, { useState, useEffect } from "react";
import "../App.css";

function Header(props){
    return(
        <div className="header">
            <h1>NASA Photo Of The Day</h1>
        Select Date: 
        <select onChange={props.handleSelectDate} id="select_id">
        {props.dateArray.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
        </div>
    );
}

export default Header;