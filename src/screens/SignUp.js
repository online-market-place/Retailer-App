import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Button, Avatar, Text} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 20,
        }}>
        <View style={{flex: 1.5, justifyContent: 'center'}}>
          <Avatar
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
            showAccessory
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Button
            title="Login"
            type="clear"
            onPress={() => navigation.navigate('Login', {name: 'Login'})}
          />

          <Button
            title="Sign Up"
            type="clear"
            containerStyle={{
              borderRadius: 1,
              borderColor: 'black',
              borderBottomWidth: 2,
            }}
            onPress={() => navigation.navigate('SignUp', {name: 'SignUp'})}
          />
        </View>
      </View>

      <View style={{padding: 30, paddingTop: 60}}>
        <Text h3 h3Style={{fontWeight: 'normal'}}>
          Welcome Onboard,
        </Text>
      </View>

      <View style={{padding: 23, paddingBottom: 0, paddingTop: 10}}>
        <Input placeholder="Phone" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Input placeholder="Password again" secureTextEntry={true} />
      </View>

      <View style={{flexDirection: 'row', padding: 30, paddingTop: 0}}>
        <Icon name="facebook" size={25} />
        <Icon name="google" size={25} style={{marginLeft: 20}} />
      </View>
      <View
        style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
        <View style={{backgroundColor: '#E9E8E9', height: 60}} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
