import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Board from './components/Board';

function App() {

    return(
        <div className="container">
            <Navbar />
            <Board />
        </div>
    );
}

function Navbar() {
    return(
        <h1 className="navbar">ProjectName</h1>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
