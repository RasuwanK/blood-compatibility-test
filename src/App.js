import React from 'react';
import Titlebar from './components/Titlebar';
import InputField from './components/InputField';

// Css
import './styles/App.css';

const App = () => {
    return (
        <div className='main'>
            <Titlebar title="Red blood tester" />
            <InputField />           
        </div>
    );
}

export default App;