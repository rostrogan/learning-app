import React from 'react';
import {connect} from 'react-redux';
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/users.reducer";

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};
const mapDispatchToProps = dispatch => {
    return {
        follow: userId => {
            dispatch(followAC(userId));
        },
        unfollow: userId => {
            dispatch(unfollowAC(userId));
        },
        setUsers: users => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: currentPage => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: totalUsersCount => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);