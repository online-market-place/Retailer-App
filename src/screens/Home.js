import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';

const Home = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Screen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="SignUp" component={SignUp} />
    </Drawer.Navigator>
  );
};

const Screen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
