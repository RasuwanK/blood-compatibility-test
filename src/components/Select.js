import React from "react";
import "../styles/Select.css";

const Select = (props) => {

  return (
    <select
      style={{ fontSize: "17px" }}
      placeholder={props.placeholder}
      className="sel txt"
    >
      {props.items.map((item, index) => {
        return (
          <option value={item} key={index} className="opt">
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
