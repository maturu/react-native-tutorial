import React from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';

export default function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');
  const styles = StyleSheet.create({
    container: {
      height: 200,
      padding: 10,
      backgroundColor: 'white',
    },
  });

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={styles.container}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}
