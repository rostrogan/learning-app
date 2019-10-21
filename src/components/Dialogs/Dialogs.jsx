import React from 'react';
import {NavLink} from "react-router-dom";

import s from './Dialogs.module.css';

const Dialogs = props => {
    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    const messagesElements = props.state.messages.map(m => <MessageItem message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea/>
                    <div>
                        <button>Send!</button>
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