const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

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
    messageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 10,
                message: state.messageText
            };
            state.messages.push(newMessage);
            state.messageText = '';
            return state;

        case UPDATE_MESSAGE_TEXT:
            state.messageText = action.messageText;
            return state;

        default:
            return state;
    }
};

export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateMessageTextCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, messageText: text});

export default dialogsReducer;