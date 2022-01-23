import React from "react";
import { useState } from "react";
import Titlebar from "./components/Titlebar";
import Select from "./components/Select";
import Result from "./components/Result";

// Css
import "./styles/App.css";

const chart = {
  "O-":["O-"],
  "O+":["O-","O+"],
  "A-":["O-","A-"],
  "A+":["O−","O+","A−","A+"],
  "B-":["O-","B-"],
  "B+":["O-","O+","B-","B+"],
  "AB-":["O-","A-","B-","AB-"],
  "AB":["O-","O+","A-","A+","B-","B+","AB-","AB+"]
};


function canDonate(recipientBg , donorBg){
  // This function check dontablility

  if(chart[recipientBg].includes(donorBg)){
      return true;
  }else{
      return false;
  }

}

const App = () => {

  const [message, setMessage] = useState({
    title:'',
    description:''
  });


  return (
    <div className="main">
      <Titlebar title="Red blood tester" />
      <section className="banner">
        <p className="txt" style={{ fontSize: "25px", textAlign: "center" }}>
          Check your blood compatibility here
        </p>
      </section>
      <div className="tool">
        <div className="inputs">
          <p id="caption-1" className="txt" style={{ textAlign: "center" }}>
            Enter donor blood group
          </p>
          <p id="caption-2" className="txt" style={{ textAlign: "center" }}>
            Enter recipient blood group
          </p>
          <Select items={Object.keys(chart) } />
          <Select items={Object.keys(chart)} />
        </div>
        <button className="btn" onClick={() => {
        }}>Check</button>
        <Result 
        {...message}
        />
      </div>
    </div>
  );
};

export default App;
