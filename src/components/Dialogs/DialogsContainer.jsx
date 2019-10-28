import React from 'react';
import {connect} from "react-redux";
import {addMessage, updateMessageText} from "../../store/actions/dialogs.actions";
import s from './Dialogs.module.css';
import Dialogs from "./Dialogs";

const mapStateToProps = state => {
    return {
        dialogsPage: state.dialogsPage
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateMessageText(body));
        },
        sendMessage: () => {
            dispatch(addMessage());
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;