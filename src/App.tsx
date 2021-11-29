import React from 'react';
import './App.css';
import {Accordeon} from "./components/accordeon/Accordeon";
import { Rating } from './components/rating/Rating';

function App() {
    console.log('App will be render')
    return (
        <div className="App">
            <AppTitle title={'Hello'}/>
            <AppTitle title={'or hi'}/>
            <Accordeon title={'Menu'} collapsed={true}/>
            <Accordeon title={'Users'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    )
}
type AppTitlePropsType = {
    title:string
}
function AppTitle(props:AppTitlePropsType){
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
