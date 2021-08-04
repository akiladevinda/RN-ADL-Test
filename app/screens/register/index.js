import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import { colors } from "../../config";

const Register = (props) => { 
  const {} = props;

  return (
    <View style={styles.container}>
    </View>
  );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primaryBackgroundColor
    }
});

const mapStateToProps = (state) => {
  return {

  };
};

function mapDispatchToProps(dispatch) {
  return {
  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
