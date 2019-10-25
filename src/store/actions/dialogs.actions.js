import * as types from "../actionTypes";

export const addMessageCreator = () => ({type: types.SEND_MESSAGE});
export const updateMessageTextCreator = (text) => ({type: types.UPDATE_NEW_MESSAGE_BODY, messageText: text});