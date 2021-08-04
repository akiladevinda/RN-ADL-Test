import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from '../navigationService';

import Login from '../../screens/login';
import Register from '../../screens/register';
import Router from '../../screens/Router';

const Stack = createStackNavigator();

function NavigationStack() {
  const isLoggedIn = false; //useSelector(state => state.loginReducer.isLoggedIn);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
            name="Router"
            component={Router}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
