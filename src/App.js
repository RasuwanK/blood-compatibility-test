import React from 'react';
import Titlebar from './components/Titlebar';
import Select from './components/Select';

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
                    <Select
                    items={['apple','orange']}
                     />
                    <Select 
                    items={['red','green']} 
                    />
                </div>
                <button className='btn'>Check</button>
            </div>
        </div>
    );
}

export default App;