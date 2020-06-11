import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
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
      <View style={{flexDirection: 'row'}}>
        <Button
          onPress={() => navigation.navigate('Home', {name: 'Home'})}
          containerStyle={{marginRight: 20}}
          title="Sign In"
          type="outline"
        />
        <Button
          onPress={() => navigation.navigate('SignUp', {name: 'SignUp'})}
          title="Sign Up"
          type="outline"
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
});
