import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  const item = {
    id: 86,
    otherParam: 'anything you want here',
  };

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate('Profile', { name: 'Custom profile header' });
        }}
      />
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', item);
        }}
      />
      <Button
        title="Create post"
        onPress={() => {
          navigation.navigate('CreatePost');
        }}
      />
      <Text stype={{ margin: 10 }}>Post: {route.params?.post}</Text>
      <Text>Count: {count}</Text>
    </View>
  );
}
