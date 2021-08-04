import React, { useEffect, useState, useMemo, useRef } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
} from 'react-native';
import navigationService from '../navigation/navigationService';

//Do not delete unwanted imports 
const Router = (props) => {
  const {} = props;

  useEffect(() => {
      setTimeout(() => {
        navigationService.navigate('Login');
      }, 3000);
  }, []);

  return (
    <View style={styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'blue'
  },
});

const mapStateToProps = (state) => {
  return {

  };
};

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Router));