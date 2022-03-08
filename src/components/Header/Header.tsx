import React, {useEffect} from "react";
import s from "./header.module.css"
import logo from './../../assets/logo.png'
import {connect, useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../state/reduxStore";
import {logoutUserTC, setAuthUserTC} from "../state/authReducer";
import Navigation from "../Navigation/Navigation";
import {Navigate, Outlet} from "react-router-dom";
import {getAuthIsAuth, getAuthLogin} from "../state/authSelect";
import {Button} from "@mui/material";



type HeaderType = {
    login: string | null
    isAuth: boolean
    logoutUserTC:()=>void
}

    // useEffect(() => {
    //     setAuthUserTC()
    // }, [isAuth])

export const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state:AppStateType) => state.auth.isAuth)
    const onLogoutHandler = ()=>{
        dispatch(logoutUserTC())
    }
    const nickname = useSelector((state:AppStateType)=> state.auth.login)
    useEffect(() => {
        dispatch(setAuthUserTC())
    }, [isAuth])
    return <div className={s.view}>
        <header className={s.header}>
            <img className={s.logo} src={logo} alt=""/>
            <Navigation />
            <div className={s.auth}>
                {
                    isAuth
                    ? <div><span className={s.nickname}>{nickname}</span><Button onClick={onLogoutHandler}>Logout</Button></div>
                    : <Button onClick={()=>window.location.replace('/login')}>Login</Button>
                }
            </div>
        </header>
        <div className={s.content}><Outlet/></div>
    </div>
}
