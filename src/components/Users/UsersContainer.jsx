import React from 'react';
import {connect} from 'react-redux';
import UsersAPIComponent from "./UsersAPIComponent";
import {
    follow,
    unfollow,
    setCurrentPage,
    setFollowingProcess,
    getUsers
} from "../../store/actions/users.actions";

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProcess: state.usersPage.isFollowingProcess
    }
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setFollowingProcess,
    getUsers
})(UsersAPIComponent);