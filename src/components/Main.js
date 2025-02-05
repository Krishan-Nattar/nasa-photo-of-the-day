import React from "react";
import "../App.css";
import { Image, Segment } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

function Main(props){
    return(
        <div>
            <Segment className="main">
                <h1>{props.title}</h1>
                <Image src={props.url} />
                <p>{props.explanation}</p>
            </Segment>
        </div>
    );
}

export default Main;