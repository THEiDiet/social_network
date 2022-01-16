import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../state/reduxStore";
import {Diff} from 'utility-types';
import {Navigate} from "react-router-dom";

type AuthRedirectType = {
    isAuth: boolean
}

export const WithAuthRedirect = <BaseProps extends any>(BaseComponent: React.ComponentType<any>) => {
    const mapStateToProps = (state: AppStateType) => ({
        isAuth: state.auth.isAuth
    })

    const dispatchProps = {};
    type HocProps = ReturnType<typeof mapStateToProps> &
        typeof dispatchProps & {
        // here you can extend ConnectedHoc with new props
    };

    class Hoc extends React.Component<HocProps> {
        render() {
            if (!this.props.isAuth) return <Navigate to='/login' replace/>
            return <BaseComponent {...(this.props as any)} />;
        }
    }

    return connect<ReturnType<typeof mapStateToProps>,
        undefined, // use "undefined" if NOT using dispatchProps
        Diff<any,AuthRedirectType>,
        AppStateType>(
        mapStateToProps,
        undefined
    )(Hoc);
};

