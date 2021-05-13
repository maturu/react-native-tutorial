import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const ProfileScreen = ({ navigation }) => {
  React.useEffect(() => {
    navigation.addListener('focus', () => {
      // Screen was focused
      // Do something
      alert('Screen was focused');
    });
    navigation.addListener('blur', () => {
      alert('Screen was unfocused');
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const DetailsScreen = ({ navigation }) => {
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      alert('Screen was focused');
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        alert('Screen was unfocused');
      };
    }, [navigation])
  );
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default function App() {
  const Tab = createBottomTabNavigator();
  const SettingsStack = createStackNavigator();
  const HomeStack = createStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
                initialParams={styles}
              />
              <SettingsStack.Screen
                name="Profile"
                component={ProfileScreen}
                initialParams={styles}
              />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Second">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                initialParams={styles}
              />
              <HomeStack.Screen
                name="Details"
                component={DetailsScreen}
                initialParams={styles}
              />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
