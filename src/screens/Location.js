import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

import Input from '../components/Input';
import {ScrollView} from 'react-native-gesture-handler';

const Location = () => {
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView>
        <Button title="Use My Location" />
        <Input label="Pincode" placeholder="Pincode" />
        <Input
          label="House No., Building Name "
          placeholder="House No., Building Name"
        />
        <Input
          label="Road Name, Area, Colony"
          placeholder="Road Name, Area, Colony"
        />
        <Input label="City" placeholder="City" />
        <Input label="State" placeholder="State" />
        <Input label="Landmark" placeholder="Landmark" />
        <Button title="Submit" />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 30,
  },
});

export default Location;
