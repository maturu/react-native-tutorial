import React from 'react';
import { StyleSheet, Button, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import ProfileScreen from './screens/ProfileScreen';

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

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerTitle: (props) => <LogoTitle {...props} />,
          })}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({
            headerBackTitle: ' ',
            title: route.params.name,
          })}
        />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParam={{ itemId: 42 }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
