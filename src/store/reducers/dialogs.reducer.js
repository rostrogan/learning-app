import * as types from '../actionTypes';

const initialState = {
    dialogs: [
        {id: 1, name: 'Roman'},
        {id: 2, name: 'Valeriia'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Vasil'},
        {id: 6, name: 'Jack'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo!'}
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