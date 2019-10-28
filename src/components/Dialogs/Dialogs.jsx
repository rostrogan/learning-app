import React from 'react';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import s from './Dialogs.module.css';

const Dialogs = props => {
    const state = props.dialogsPage;
    const newMessageElement = React.createRef();
    const dialogsElements = state.dialogs
        .map(d => <DialogItem
            key={d.id}
            name={d.name}
            id={d.id}
        />);
    const messagesElements = state.messages.map(m => <MessageItem key={m.id} message={m.message} id={m.id}/>);

    const onMessageChange = (e) => {
        const text = e.target.value;
        props.updateNewMessageBody(text);
    };

    const onSendMessageClick = (e) => {
        newMessageElement.current.value !== '' && props.sendMessage();
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesContainer}>
                    {messagesElements}
                </div>
                <div className={s.inputGroup}>
                    <input
                        type={'text'}
                        value={state.newMessageBody}
                        onChange={onMessageChange}
                        placeholder={'Write a message...'}
                        ref={newMessageElement}
                    />
                    <button
                        onClick={onSendMessageClick}
                    >Send!
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;