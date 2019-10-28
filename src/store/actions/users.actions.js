import * as types from "../actionTypes";
import {usersApi} from "../../api/users.api";

export const followSuccess = userId => ({type: types.FOLLOW, userId});
export const unfollowSuccess = userId => ({type: types.UNFOLLOW, userId});
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
        dispatch(setCurrentPage(currentPage));
        dispatch(setIsFetching(false));
    });
};

export const follow = userId => dispatch => {
    dispatch(setFollowingProcess(true, userId));
    usersApi.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(setFollowingProcess(false, userId));
        });
};

export const unfollow = userId => dispatch => {
    dispatch(setFollowingProcess(true, userId));
    usersApi.unfollow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(setFollowingProcess(false, userId));
    });
};