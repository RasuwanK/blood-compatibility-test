import React from "react";
import Titlebar from "./components/Titlebar";
import Select from "./components/Select";
import Result from "./components/Result";

// Css
import "./styles/App.css";

const App = () => {
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
          <Select items={["O+", "A+"]} />
          <Select items={["O+", "A+"]} />
        </div>
        <button className="btn">Check</button>
        <Result 
        title='Donation posible'
        description="Yes you can donate"
        />
      </div>
    </div>
  );
};

export default App;
