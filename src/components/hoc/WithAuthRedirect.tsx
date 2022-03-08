import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../state/reduxStore";
import Navigation from "../Navigation/Navigation";
import { Navigate } from 'react-router-dom';

type AuthRedirectType = {
    isAuth: boolean
}
type mapStateToPropsType = {
    isAuth:boolean
}
const mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export function WithRedirect<T>(Component: ComponentType<T>)  {
    const WithRedirectWrapComponent= (props:mapStateToPropsType) => {
        let {isAuth,...restProps} = props
        if (!isAuth){
            return <Navigate to='/login'/>
        }
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(WithRedirectWrapComponent)
};
