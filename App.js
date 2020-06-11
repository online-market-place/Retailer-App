import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import Icon from 'react-native-vector-icons/Ionicons';

import {createStackNavigator} from '@react-navigation/stack';
const HomeScreen = createStackNavigator();

import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from './src/screens/Profile';
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeScreen.Navigator>
      <HomeScreen.Screen
        name="Eline"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </HomeScreen.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="SignUp" component={SignUp} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
