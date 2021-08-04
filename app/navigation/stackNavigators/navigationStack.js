import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from '../navigationService';

import Login from '../../screens/login';
import Register from '../../screens/register';
import Router from '../../screens/Router';
import Dashboard from '../../screens/dashboard';
import Movies from '../../screens/movies';
import Cart from '../../screens/cart';

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
            <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Movies"
            component={Movies}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              headerShown: true,
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
