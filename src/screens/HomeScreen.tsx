import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { UserTokenContext } from '../contexts/UserTokenContext';
import { HomeScreenProps } from '../types/screens';

function HomeScreen({ navigation }: HomeScreenProps) {
  const { handleChangeToken } = useContext(UserTokenContext);
  const handleSignout = () => {
    handleChangeToken(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="프로필로 화면으로 가기"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button title="로그아웃" onPress={handleSignout} />
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

export default HomeScreen;
