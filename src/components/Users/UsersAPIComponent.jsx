import React, {Component} from 'react';
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIComponent extends Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged(pageNumber) {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                    isFollowingProcess={this.props.isFollowingProcess}
                />
            </>
        )
    }
}

export default UsersAPIComponent;