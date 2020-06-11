import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUp = () => {
  return (
    <View style={{padding:40, justifyContent:"center", flex:1}}>
      <Input
        label="Phone"
        placeholder="Phone"
        leftIcon={<Icon name="phone" size={30} color="#900" />}
        style={styles}
        onChangeText={value => this.setState({comment: value})}
      />
      <Input
        label="Password"
        placeholder="Password"
        leftIcon={<Icon name="lock" size={30} color="#900" />}
        secureTextEntry={true}
      />
      <Input
        label="Confirm Password"
        placeholder="Confirm Password"
        leftIcon={<Icon name="lock" size={30} color="#900" />}
        secureTextEntry={true}
      />
      <Button title="Sign Up" type="outline" />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
