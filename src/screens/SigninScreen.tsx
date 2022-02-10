import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { UserTokenContext } from '../contexts/UserTokenContext';
import { SignInScreenProps } from '../types/screens';

function SignInScreen({ navigation }: SignInScreenProps) {
  const { handleChangeToken } = useContext(UserTokenContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // GET token from server
    handleChangeToken('token-!@#$');
  };

  const handlePressSignupButton = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignIn Screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.textInput}
      />
      <View style={styles.buttonContainer}>
        <Button title="로그인" onPress={handleSubmit} />
        <Button title="회원가입" onPress={handlePressSignupButton} />
      </View>
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
  textInput: {
    width: '50%',
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default SignInScreen;
