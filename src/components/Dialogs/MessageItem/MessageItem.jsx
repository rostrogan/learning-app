import React from 'react';
import style from './MessageItem.module.css';

const MessageItem = props => {
    return (
        <div className={style.messageItemContainer}>
            <div className={style.message}>
                {props.message}
            </div>
            <div className={style.timestamp}>10.09 18:57</div>
        </div>
    );
};

export default MessageItem;