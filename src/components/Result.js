import React from 'react';

import '../styles/Result.css';

const Result = (props) => {

    return (
        <div className='result'>
            <p className='txt result-title'>{props.title}</p>
            <p className='txt result-description'>{props.description}</p>
        </div>
    )
}

export default Result;