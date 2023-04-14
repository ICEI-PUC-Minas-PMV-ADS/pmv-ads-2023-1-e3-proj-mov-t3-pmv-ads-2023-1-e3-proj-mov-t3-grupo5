import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Register from '../pages/Register';

const App = createNativeStackNavigator();

const Router = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <App.Screen name="Login" component={Login} />
      <App.Screen name="Register" component={Register} />
    </App.Navigator>
  );
};

export default Router;
