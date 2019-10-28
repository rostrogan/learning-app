import * as types from "../actionTypes";
import {usersApi} from "../../api/users.api";

export const follow = userId => ({type: types.FOLLOW, userId});
export const unfollow = userId => ({type: types.UNFOLLOW, userId});
export const setUsers = users => ({type: types.SET_USERS, users});
export const setCurrentPage = currentPage => ({type: types.SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = totalUsersCount => ({type: types.SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setIsFetching = isFetching => ({type: types.TOGGLE_IS_FETCHING, isFetching});
export const setFollowingProcess = (isFollowingProcess, userId) => ({type: types.TOGGLE_IS_FOLLOWING_PROCESS, isFollowingProcess, userId});

export const getUsers = (currentPage, pageSize) => dispatch => { // Thunk
    dispatch(setIsFetching(true));
    usersApi.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setIsFetching(false));
    });
};