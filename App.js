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
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Open Modal" onPress={() => navigation.navigate('Modal')} />
    </View>
  );
};

const ModalScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button title="Dismiss" onPress={() => navigation.goBack()} />
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

const HomeMainStackScreen = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

export default function App() {
  const Tab = createBottomTabNavigator();
  const FirstStack = createStackNavigator();
  const SecondStack = createStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="First">
          {() => (
            <FirstStack.Navigator>
              <FirstStack.Screen name="Settings" component={SettingsScreen} />
              <FirstStack.Screen name="Profile" component={ProfileScreen} />
            </FirstStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Second">
          {() => (
            <SecondStack.Navigator mode="modal">
              <SecondStack.Screen
                name="HomeMain"
                component={HomeMainStackScreen}
                options={{ headerShown: false }}
              />
              <SecondStack.Screen
                name="Modal"
                component={ModalScreen}
                options={{ headerShown: false }}
              />
            </SecondStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
