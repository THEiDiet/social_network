import React, {useEffect} from "react";
import s from "./header.module.css"
import logo from './../../assets/logo.png'
import {connect} from "react-redux";
import {AppStateType} from "../state/reduxStore";
import {setAuthUserTC} from "../state/authReducer";
import Navigation from "../Navigation/Navigation";
import {Outlet} from "react-router-dom";

type HeaderContainerType = {
    login: string | null
    isAuth: boolean
    setAuthUserTC:()=>void
}

type HeaderType = {
    login: string | null
    isAuth: boolean
}

const HeaderContainer = ({login, isAuth,setAuthUserTC}: HeaderContainerType) => {

    useEffect(() => {
        setAuthUserTC()
    }, [isAuth])

    return <Header login={login} isAuth={isAuth}/>
}

const Header = ({login, isAuth}: HeaderType) => {
    return <div className={s.view}>
        <header className={s.header}>
            <img className={s.logo} src={logo} alt=""/>
            <div>{isAuth ? login : 'Login'}</div>
        </header>
        <Navigation className={s.sidebar}/>
        <div className={s.content}><Outlet/></div>
    </div>
}
const mStP = (state: AppStateType) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})
export default connect(mStP, {setAuthUserTC})(HeaderContainer)