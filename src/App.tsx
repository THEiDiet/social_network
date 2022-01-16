import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Error404 from "./components/NotFound/NotFound";
import MessagesContainer from "./components/Dialogs/MessagesContainer";
import {AppStateType} from "./components/state/reduxStore";
import UsersContainer from "./components/Users/UsersContainer";
import MainContainer from "./components/Main/MainContainer";
import HeaderContainer from "./components/Header/Header";
import Login from "./components/Login/Login";



const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Routes>
                    <Route path='/' element={<HeaderContainer/>}>
                        <Route index element={<Navigate to={'/15849'}/>}/>
                        <Route path="/dialogs" element={<MessagesContainer/>}/>
                        <Route path="/:userId" element={<MainContainer/>}/>
                        <Route path="*" element={<Error404/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
