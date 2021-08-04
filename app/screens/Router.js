import React, { useEffect, useState, useMemo, useRef } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import navigationService from '../navigation/navigationService';
import { Images } from '../config/images';

//Do not delete unwanted imports 
const Router = (props) => {
  const {isUserLoggedIn} = props;

  useEffect(() => {
    /* 
    Check user already logged or not
    */
    setTimeout(() => {
      if(isUserLoggedIn == true){
        navigationService.navigate('Dashboard');
      }else{
        navigationService.navigate('Login');
      }
     
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
        <Image style={styles.adlLogo} source={Images.ADL_LOGO}/>
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
    backgroundColor:'white'
  },
  adlLogo:{
    width:"100%",
    height:"60%",
    resizeMode:'contain'
  }
});

const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.appReducer.isUserLoggedIn,
  };
};

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Router));