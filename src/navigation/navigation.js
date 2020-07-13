import 'react-native-gesture-handler';
import React from 'react';
import {View, SafeAreaView, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
const HomeScreen = createStackNavigator();
const AddStoreScreen = createStackNavigator();

import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import AddStore from '../screens/AddStore';
import Location from '../screens/Location';
import BusinessProof from '../screens/BusinessProof';

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

const AddStoreStack = ({navigation}) => {
  return (
    <AddStoreScreen.Navigator>
      <AddStoreScreen.Screen name="Add Store" component={AddStore} />
      <AddStoreScreen.Screen name="Location" component={Location} />
      <AddStoreScreen.Screen name="Business Proof" component={BusinessProof} />
    </AddStoreScreen.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Sign Up" component={SignUp} />
        <Drawer.Screen
          name="Add Store"
          component={AddStoreStack}
          options={{
            title: 'Add Store',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
