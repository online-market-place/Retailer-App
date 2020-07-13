import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

import Input from '../components/Input';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Input label="Phone" placeholder="Phone" />
      <Input label="Email" placeholder="Email" />
      <Input label="Password" placeholder="Password" />
      <Input label="Confirm Password" placeholder="Confirm Password" />
      <Button title="Continue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUp;
