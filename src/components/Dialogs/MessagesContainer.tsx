import {DialogType, UserType} from "../state/dialogsReducer";
import {onChangeMessageAC, sendMessageAC} from "../state/dialogsReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../state/reduxStore";

type mapStateType = {
    dialogs: DialogType[]
    users: UserType[]
    text:string
}
type mapDispatchType = {
    onChangeMessageAC: (text:string)=> void
    sendMessageAC: ()=> void
}
type ownPropsType = {}

const mapStateToProps = (state:AppStateType) => ({
    dialogs: state.dialogsPage.dialogs,
    users: state.dialogsPage.users,
    text: state.dialogsPage.newText
})

const MessagesContainer = connect<mapStateType,mapDispatchType,ownPropsType,AppStateType>(mapStateToProps, {onChangeMessageAC,sendMessageAC})(Messages)

export default MessagesContainer