import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const item = {
    id: 86,
    otherParam: 'anything you want here',
  };

  return (
    <View style={styles.container} options={{ title: 'Overview' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', item);
        }}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* Get the param */
  const params = route.params;
  const randomId = Math.floor(Math.random() * 100);

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(params.id)}</Text>
      <Text>otherParam: {JSON.stringify(params.otherParam)}</Text>
      <Button
        title="Change params"
        onPress={() => navigation.setParams({ id: randomId })}
      />
      <Button
        title="Go to Details...again"
        onPress={() => {
          navigation.push('Details', { ...params, id: randomId });
        }}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
