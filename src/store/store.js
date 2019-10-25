import {combineReducers, createStore} from "redux";

import profileReducer from "./reducers/profile.reducer";
import dialogsReducer from "./reducers/dialogs.reducer";
import usersReducer from './reducers/users.reducer';
import sidebarReducer from "./reducers/sidebar.reducer";
import authReducer from "./reducers/auth.reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
});

let store = createStore(reducers);
window.store = store;

export default store;