import * as types from "../actionTypes";

export const addMessage = () => ({type: types.SEND_MESSAGE});
export const updateMessageText = (text) => ({type: types.UPDATE_NEW_MESSAGE_BODY, messageText: text});