import React from 'react';
import {addMessageCreator, updateMessageTextCreator} from "../../redux/dialogs.reducer";

import {NavLink} from "react-router-dom";

import s from './Dialogs.module.css';
import Dialogs from "./Dialogs";

const DialogsContainer = props => {
    let state = props.store.getState().dialogsPage

    const onMessageChange = (text) => {
        props.store.dispatch(updateMessageTextCreator(text));
    };

    const sendMessage = () => {
        props.store.dispatch(addMessageCreator());
    };

    return (
        <Dialogs
            updateNewMessageBody={onMessageChange}
            sendMessage={sendMessage}
            dialogsPage={state}
        />
    )
};

export default DialogsContainer;