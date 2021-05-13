import React from 'react';
import { StyleSheet, Button, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text>Messages Screen</Text>
    </View>
  );
}

export default function SettingsScreen() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}
