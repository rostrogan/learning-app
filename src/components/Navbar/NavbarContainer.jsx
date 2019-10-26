import React from 'react';
import {connect} from 'react-redux';
import Navbar from "./Navbar";

const NavbarContainer = props => {
    return (
        <Navbar {...props}/>
    )
};

const mapStateToProps = state => {
    return {
        navLinks: state.sidebar.navLinks
    }
};

export default connect(mapStateToProps, {})(NavbarContainer);