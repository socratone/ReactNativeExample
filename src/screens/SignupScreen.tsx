import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SignUpScreenProps } from '../types/screens';

function SignUpScreen({ navigation }: SignUpScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp Screen</Text>
      <Button title="취소" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default SignUpScreen;
