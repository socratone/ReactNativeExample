/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserTokenContext from './contexts/UserTokenContext';

const Stack = createNativeStackNavigator();

const App = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleChangeToken = (newToken: string | null) => {
    setToken(newToken);
  };

  return (
    <UserTokenContext.Provider value={{ token, handleChangeToken }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserTokenContext.Provider>
  );
};

export default App;
