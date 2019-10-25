import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Profile from "./Profile";
import * as axios from "axios";

import {setProfile} from "../../store/actions/profile.actions";

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setProfile(response.data);
            });
    }

    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.currentProfile}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentProfile: state.profilePage.currentProfile
    }
};

const withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfile})(withUrlDataContainerComponent);