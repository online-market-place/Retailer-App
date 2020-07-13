import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import Input from '../components/Input';

const Login = ({navigation}) => {
  const LoginHandler = () => {};
  return (
    <View style={styles.container}>
      <Input label="Email or Phone" placeholder="Email or Phone" />
      <Input label="Password" placeholder="Password" />
      <Button title="Login" />
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

export default Login;
