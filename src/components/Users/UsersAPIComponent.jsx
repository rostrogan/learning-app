import React, {Component} from 'react';
import {usersApi} from "../../api/users.api";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setIsFetching(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.setIsFetching(false);
        });
    };

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        usersApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setIsFetching(false);
        });
    };

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged.bind(this)}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    setFollowingProcess={this.props.setFollowingProcess}
                    isFollowingProcess={this.props.isFollowingProcess}
                />
            </>
        )
    }
}

export default UsersAPIComponent;