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

import axios from 'axios';

// function componentDidMount() {
//   axios
//     .post('#', {

//     })
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }

const AddStore = props => {
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView>
        <Input label="Store Name" placeholder="Store name" />
        <Input label="Contact Person Name" placeholder="Contact Person Name" />
        <Input label="Contact Number" placeholder="Contact Number" />
        <Input label="Store Photo" placeholder="Store Owner Photo" />
        <Button
          title="Store Address"
          onPress={() => props.navigation.navigate('Location')}
        />
        <Input label="Category" placeholder="Category" />
        <Button
          title="Business Proof"
          onPress={() => props.navigation.navigate('Business Proof')}
        />
        <Button title="Continue" />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 30,
  },
});

export default AddStore;
