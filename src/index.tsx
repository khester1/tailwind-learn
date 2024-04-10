import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './App.css';



let data: any;

if (window.location.hostname === "localhost") {
  data = {
    text: "Initial String",
    date: new Date()
  };
} else {
  //following code parses url of dialog to extract required data including "data" parameter
  const queryString = window.location.search.substring(1);
  let params: any = {};
  const queryStringParts = queryString.split("&");
  for (let i = 0; i < queryStringParts.length; i++) {
    const pieces = queryStringParts[i].split("=");
    params[pieces[0].toLowerCase()] = pieces.length === 1 ? null : decodeURIComponent(pieces[1]);
  }

  //deserializing of the data parameter
  if (params.data) {
    data = JSON.parse(params.data);
  } else {
    data = {
      text: "Initial String",
      date: new Date()
    };
  }
}

//rendering of application and passing parameters inside
ReactDOM.render(
  <App text={data.text} date={new Date(data.date)} />,
  document.getElementById('root')
);