import React from 'react';
import {connect} from "react-redux";
import {addMessageCreator, updateMessageTextCreator} from "../../redux/dialogs.reducer";
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
            dispatch(updateMessageTextCreator(body));
        },
        sendMessage: () => {
            dispatch(addMessageCreator());
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;