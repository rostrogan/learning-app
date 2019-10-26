import * as types from '../actionTypes';
import nanoid from 'nanoid';

const initialState = {
    navLinks: [
        {id: nanoid(5), title: 'Profile', url: '/profile'},
        {id: nanoid(5), title: 'Dialogs', url: '/dialogs'},
        {id: nanoid(5), title: 'Users', url: '/users'},
        {id: nanoid(5), title: 'News', url: '/news'},
        {id: nanoid(5), title: 'Music', url: '/music'},
        {id: nanoid(5), title: 'Settings', url: '/settings'}
    ]
};

const sidebarReducer = (state = initialState, action) => {

    return state;
};

export default sidebarReducer;