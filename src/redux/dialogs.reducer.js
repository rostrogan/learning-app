const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

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
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.messageText
            };
        case SEND_MESSAGE:
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

export const addMessageCreator = () => ({type: SEND_MESSAGE});
export const updateMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, messageText: text});

export default dialogsReducer;