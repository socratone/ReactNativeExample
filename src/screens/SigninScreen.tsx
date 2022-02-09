import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { UserTokenContext } from '../contexts/UserTokenContext';

function SigninScreen() {
  const { handleChangeToken } = useContext(UserTokenContext);

  return (
    <View style={styles.container}>
      <Text>Signin Screen</Text>
      <Button title="로그인" onPress={() => handleChangeToken('token-!@#$')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SigninScreen;
