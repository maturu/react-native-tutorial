import React from 'react';
import { StyleSheet, Button, Text, View, Image, Settings } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

function LogoTitle() {
  return (
    <Image
      style={{ width: 32, height: 32 }}
      source={require('./assets/favicon.png')}
    />
  );
}

export default function App() {
  const Stack = createStackNavigator();
  const ScreenParams = {
    Home: {
      component: HomeScreen,
      options: () => ({ headerTitle: (props) => <LogoTitle {...props} /> }),
    },
    Profile: {
      component: ProfileScreen,
      options: ({ route }) => ({
        headerBackTitle: ' ',
        title: route.params.name,
      }),
    },
    CreatePost: {
      component: CreatePostScreen,
    },
    Details: {
      component: DetailsScreen,
      initialParam: { itemId: 42 },
    },
    Settings: {
      component: SettingsScreen,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Object.entries(ScreenParams).map(([path, param]) => (
          <Stack.Screen name={path} {...param} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
