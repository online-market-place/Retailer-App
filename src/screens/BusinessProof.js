import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
} from 'react-native';

import Input from '../components/Input';
import {ScrollView} from 'react-native-gesture-handler';

const BusinessProof = () => {
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView>
        <Text>Any one of the Below</Text>
        <Input label="GST" placeholder="GST" />
        <Input label="Shop & Establishment Licence " placeholder="" />
        <Input label="Udhyog Aadhaar" placeholder="" />
        <Input label="Trade Certifcate/ License" placeholder="" />
        <Input label="FSSAI Registration" placeholder="" />
        <Input label="Drug License" placeholder="" />
        <Input label="Current Account Cheque" placeholder="" />

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

export default BusinessProof;
