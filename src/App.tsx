import React from 'react';
import './App.css';
import {Rating} from "./components/rating/Rating";
import {Accordeon} from "./components/accordeon/Accordeon";

function App() {
    return (
        <div className="wrapper">
            <Rating value={3}/>
            <Rating value={4}/>
            <Accordeon title={'Hey'} collapsed={true}/>
            <Accordeon title={'Hi'} collapsed={false}/>
        </div>
    )
}

export default App;
