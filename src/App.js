import React from 'react';
import Titlebar from './components/Titlebar';

// Css
import './styles/App.css';

const App = () => {
    return (
        <div className='main'>
            <Titlebar title="Red blood tester" />
            <section className='banner'>
                <p 
                className='txt' 
                style={{fontSize:'25px',textAlign:'center'}}
                >Check your blood compatibility here
                </p>
            </section>
            <div className='tool'>
                <div className='inputs'>
                    
                </div>
                <button className='btn'>Check</button>
            </div>
        </div>
    );
}

export default App;