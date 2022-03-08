import React, {useState} from 'react';
import {Field, Form, Formik} from "formik";
import s from './../Login/login.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../state/reduxStore";
import {loginUserTC} from "../state/authReducer";
import {Navigate} from "react-router-dom";
import {TextField} from "formik-mui";
import {Button} from "@mui/material";

const validateSearch = () => {

}
export type loginValuesType = {
    email:string
    password:string
    captcha:string
    rememberMe:boolean
}

const LoginForm = () => {
    const captcha = useSelector((state:AppStateType)=> state.auth.captcha)
    const isAuth = useSelector((state:AppStateType)=> state.auth.isAuth)
    const errors = useSelector((state:AppStateType)=> state.auth.errors)
    const dispatch = useDispatch()
    const onSubmit = (values:loginValuesType,{setSubmitting}:{setSubmitting:(isSubmitting: boolean) => void}) => {
        dispatch(loginUserTC(values))
        setSubmitting(false)
    }
    return isAuth
        ? <Navigate to='/'/>
        : (
        <>
            <Formik
                initialValues={{email: '',password:'',captcha:'',rememberMe:false}}
                validate={validateSearch}
                onSubmit={onSubmit}
            >
                {({isSubmitting,values}) => {
                    return (
                        <Form className={s.form}>
                            <Field type="email" name="email" component={TextField}/>
                            <Field type="password" name="password" component={TextField}/>
                            {captcha  && <Field type="text" name="captcha" component={TextField}/>}
                            <Field type="checkbox" name="rememberMe" />{values.rememberMe}
                            <Button type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                            {captcha && <img className={s.captcha} src={captcha}/>}
                            {errors && errors.map(error => <div>{error}</div>)}
                        </Form>
                    )}}
            </Formik>

        </>
    );
};

export default LoginForm;