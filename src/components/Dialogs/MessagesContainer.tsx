import {DialogType, UserType} from "../state/dialogsReducer";
import { sendMessageAC} from "../state/dialogsReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../state/reduxStore";
import { compose } from "redux";
import {WithRedirect} from "../hoc/WithAuthRedirect";
import React from "react";
import {getDialogsArray, getDialogsUsersArray} from "../state/dialogsSelect";

type mapStateType = {
    dialogs: DialogType[]
    users: UserType[]
}
type mapDispatchType = {
    sendMessageAC: (message:string)=> void
}
type ownPropsType = {}

const mapStateToProps = (state:AppStateType) => ({
    dialogs: getDialogsArray(state),
    users: getDialogsUsersArray(state)
})

// const MessagesContainer = connect<mapStateType,mapDispatchType,ownPropsType,AppStateType>(mapStateToProps, {onChangeMessageAC,sendMessageAC})(Messages)

export default compose<React.ComponentType>(
    connect<mapStateType,mapDispatchType,ownPropsType,AppStateType>(mapStateToProps, {sendMessageAC}),
    WithRedirect
)(Messages)