import React, { Component } from "react";
import NetInfo from "@react-native-community/netinfo";
import { connect } from "react-redux";
import NavigationStack from "./stackNavigators/navigationStack";
import { updateConnectivityStatus } from "../redux/actions/appActions";

class AppNavigator extends Component {
    
    componentDidMount() {
        //Netinfo Subscribe
    }

    componentWillUnmount() {
        //Netinfo Unsubscribe
    }


    render() {
        return (
            <NavigationStack />
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

function mapDispatchToProps(dispatch) {
    return {
        updateConnectivityStatus: status =>
            dispatch(updateConnectivityStatus(status))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppNavigator);
