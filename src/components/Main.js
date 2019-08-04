import React, { useState, useEffect } from "react";
import "../App.css";

function Main(props){
    return(
        <div className="main">
            <h1>{props.title}</h1>
            <img className="image" src={props.url} />
            <p>{props.explanation}</p>
        </div>
    );
}

export default Main;