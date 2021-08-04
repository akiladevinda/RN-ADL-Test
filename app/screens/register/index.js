import React, { useState } from 'react';
import { connect } from "react-redux";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    BackHandler
  } from 'react-native';
import { colors } from "../../config";
import navigationService from "../../navigation/navigationService";
import { useFocusEffect } from '@react-navigation/native';
import { Images } from "../../config/images";
import * as appActions from '../../redux/actions/appActions';

const Register = (props) => { 
  const {setUserLoginStatus} = props;

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userFullname, setUserFullName] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp()
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  const handleUserSignup = () => {
    if(!userEmail || !userPassword || !userFullname){
      alert('Please enter valid data')
    }else{  
      alert('Signup Successfull');
      navigationService.navigate('Dashboard')
      setUserLoginStatus(true);
    }
}

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={Images.ICON_USER}/>
          <TextInput style={styles.inputs}
              placeholder="Full Name"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(userFullname) => setUserFullName(userFullname)}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={Images.ICON_EMAIL}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(userEmail) => setUserEmail(userEmail)}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={Images.ICON_PASSWORD}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(userPassword) => setUserPassword(userPassword)}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={handleUserSignup}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => navigationService.navigate('Login')}>
            <Text>Login</Text>
        </TouchableHighlight>
      </View>
  );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
      },
      inputContainer: {
          borderBottomColor: '#F5FCFF',
          backgroundColor: '#FFFFFF',
          borderRadius:30,
          borderBottomWidth: 1,
          width:"80%", //we can use dimensions also
          height:45,
          marginBottom:20,
          flexDirection: 'row',
          alignItems:'center'
      },
      inputs:{
          height:45,
          marginLeft:16,
          borderBottomColor: '#FFFFFF',
          flex:1,
      },
      inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
      },
      buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
      },
      loginButton: {
        backgroundColor: "#00b5ec",
      },
      loginText: {
        color: 'white',
      }
});

const mapStateToProps = (state) => {
  return {

  };
};

function mapDispatchToProps(dispatch) {
  return {
    setUserLoginStatus: (payload) => dispatch(appActions.setUserLoginStatus(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
