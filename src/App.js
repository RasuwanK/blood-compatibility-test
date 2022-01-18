import React from 'react';
import Titlebar from './components/Titlebar';
import Results from './components/Results';

// Css
import './styles/App.css';

const App = () => {
    return (
        <div className='main'>
            <Titlebar />
            <Results />           
        </div>
    );
}

export default App;