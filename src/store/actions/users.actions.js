import * as types from "../actionTypes";

export const follow = userId => ({type: types.FOLLOW, userId});
export const unfollow = userId => ({type: types.UNFOLLOW, userId});
export const setUsers = users => ({type: types.SET_USERS, users});
export const setCurrentPage = currentPage => ({type: types.SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = totalUsersCount => ({type: types.SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setIsFetching = isFetching => ({type: types.TOGGLE_IS_FETCHING, isFetching});
export const setFollowingProcess = (isFollowingProcess, userId) => ({type: types.TOGGLE_IS_FOLLOWING_PROCESS, isFollowingProcess, userId});