import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HomeScreenProps } from '../types/screens';

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
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

export default HomeScreen;
