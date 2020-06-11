import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LOGIN"
          component={Login}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: 'Sign Up'}}
        />
        <Stack.Screen name="Home" component={Home} options={{title: 'Eline'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
