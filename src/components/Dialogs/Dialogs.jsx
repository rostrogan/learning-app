import React from 'react';

import {NavLink} from "react-router-dom";

import s from './Dialogs.module.css';

const Dialogs = props => {
    const state = props.dialogsPage;

    const dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
    const messagesElements = state.messages.map(m => <MessageItem key={m.id} message={m.message} id={m.id}/>);

    const onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text);
    };

    const onSendMessageClick = () => {
        props.sendMessage();
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea
                        value={state.newMessageBody}
                        onChange={onMessageChange}
                        placeholder={'Write a message...'}
                    />
                    <div>
                        <button
                            onClick={onSendMessageClick}
                        >Send!</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

const DialogItem = props => {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const MessageItem = props => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

export default Dialogs;