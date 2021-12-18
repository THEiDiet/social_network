import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import {BrowserRouter , Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main";
import Messages from "./components/Dialogs/Messages";
import {StateType} from "./components/state/state";
import Error404 from "./components/NotFound/NotFound";

type AppPropsType = {
    state: StateType,
    dispatch: (action: any) => void
}

const App:React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navigation/>
                <div className='content'>
                    <Routes>
                        <Route path="/dialogs" element={<Messages dialogs={props.state.dialogsPage.dialogs}
                                                                  users={props.state.dialogsPage.users}
                                                                  dispatch={props.dispatch}
                                                                  text={props.state.dialogsPage.newText}/>}/>
                        <Route path="/" element={<Main message={props.state.mainPage.newMessage}
                                                       posts={props.state.mainPage.posts}
                                                       dispatch={props.dispatch}
                        />}/>
                        <Route path="*" element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
