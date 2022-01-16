import React from 'react'
import loader from './../../assets/loader.gif'
import s from './loader.module.css'

export const Loader = () => {
    return (
        <div className={s.loader}>
            <img src={loader} alt="loader"/>
        </div>
    )
}