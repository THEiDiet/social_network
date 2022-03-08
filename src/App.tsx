import React, {useEffect,Suspense} from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Error404 from "./components/NotFound/NotFound";
import  {Header} from "./components/Header/Header";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeTC} from "./components/state/appReducer";
import store, {AppStateType} from "./components/state/reduxStore";
import {Loader} from "./components/assets/Loader";
import {getAppInitialized} from "./components/state/appSelect";
import {ThemeProvider} from "@mui/material";
import {theme} from "./styles/themeMUI";


const MessagesContainer = React.lazy(() => import('./components/Dialogs/MessagesContainer'));
const MainContainer = React.lazy(() => import('./components/Main/MainContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
type mapStateType = {
    initialized: boolean
}
type mapDispatchType = {
    initializeTC: () => void
}
type ownPropsType = {}
type appPropsType = mapStateType & mapDispatchType & ownPropsType

const App = ({initializeTC,initialized}: appPropsType) => {
    useEffect(() => {
        initializeTC()
    }, [])
    if (!initialized){
        return <Loader/>
    }
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
            <div className="wrapper">
                <Routes>
                    <Route path='/' element={<Header/>}>
                        <Route index element={<Navigate to={'/15849'}/>}/>
                        <Route path="dialogs" element={<Suspense fallback={<Loader/>}><MessagesContainer/></Suspense>}/>
                        <Route path=":userId" element={<Suspense fallback={<Loader/>}><MainContainer/></Suspense>}/>
                        <Route path="*" element={<Error404/>}/>
                        <Route path="users" element={<Suspense fallback={<Loader/>}><UsersContainer/></Suspense>}/>
                        <Route path="login" element={<Login/>}/>
                    </Route>
                </Routes>
            </div>
            </ThemeProvider>
        </BrowserRouter>
    )
}
const mStP = (state: AppStateType) => ({
    initialized: getAppInitialized(state)
})
const AppWithHOC =  connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(mStP, {initializeTC})(App)

const SocialNetworkApp = () => {
    return <Provider store={store}>
        <AppWithHOC />
    </Provider>
}
export  default SocialNetworkApp