import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {CssBaseline} from "@mui/material";

function App() {
    return (
        <>
            <CssBaseline enableColorScheme/>
            <div className="wrapper">
                <Header/>
                <Navigation/>

                <Main/>
                {/*<Footer/>*/}
            </div>
        </>
    )
}

export default App;
