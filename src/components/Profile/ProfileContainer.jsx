import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Profile from "./Profile";
import {getCurrentProfile} from "../../store/actions/profile.actions";

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 4991;
        }
        this.props.getCurrentProfile(userId);
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

export default connect(mapStateToProps, {getCurrentProfile})(withUrlDataContainerComponent);