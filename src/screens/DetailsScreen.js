import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  /* Get the param */
  const params = route.params;
  const randomId = Math.floor(Math.random() * 100);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

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
