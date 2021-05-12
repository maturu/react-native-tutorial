import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function ProfileScreen({ navigation, route }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
