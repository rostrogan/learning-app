import * as types from '../actionTypes';
import nanoid from 'nanoid';

const initialState = {
    dialogs: [
        {id: nanoid(5), name: 'Roman'},
        {id: nanoid(5), name: 'Valeriia'},
        {id: nanoid(5), name: 'Dima'},
        {id: nanoid(5), name: 'Alex'},
        {id: nanoid(5), name: 'Vasil'},
        {id: nanoid(5), name: 'Jack'},
    ],
    messages: [
        {id: nanoid(5), message: 'Hi'},
        {id: nanoid(5), message: 'How are you?'},
        {id: nanoid(5), message: 'Yo!'},
        {id: nanoid(5), message: 'Yo!'},
        {id: nanoid(5), message: 'Yo!'},
        {id: nanoid(5), message: 'Yo!'},
        {id: nanoid(5), message: 'Yo!'},
        {id: nanoid(5), message: 'Yo!'},
        {id: nanoid(5), message: 'Yo!'},
        {id: nanoid(5), message: 'Yo!'},
        {id: nanoid(5), message: 'Yo!'},
        {id: nanoid(5), message: 'Yo!'},
        {id: nanoid(5), message: 'Yo!'},
        {id: nanoid(5), message: 'Yo!'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.messageText
            };
        case types.SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
};

export default dialogsReducer;