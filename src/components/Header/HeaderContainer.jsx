import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from "./Header";
import {setAuthData} from "../../store/actions/auth.actions";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.setAuthData();
    }

    render() {
        return <Header
            {...this.props}
        />
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);