import * as types from '../actionTypes';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingProcess: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case types.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        case types.SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };

        case types.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        case types.SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };

        case types.TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };

        case types.TOGGLE_IS_FOLLOWING_PROCESS:
            return {
                ...state,
                isFollowingProcess: action.isFollowingProcess
                    ? [...state.isFollowingProcess, action.userId]
                    : state.isFollowingProcess.filter(id => id != action.userId)
            };

        default:
            return state;
    }
};

export default usersReducer;