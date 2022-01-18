import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// Css
import '../styles/Titlebar.css';

const Titlebar = () => {
    const iconType = faBars;
    return (
        <div className='titlebar'>
            <FontAwesomeIcon icon={iconType} size="2x" style={{padding:0}} className="hamburger-btn" />
            <h1 className='title'>Red blood cell tester</h1>
        </div>
    )
}

export default Titlebar;