import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

export default function CustomInput({ label, value, onChangeText, ...rest }: any) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput style={styles.input} value={value} onChangeText={onChangeText} {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 15 },
  input: { borderWidth: 1, borderColor: '#aaa', padding: 8, borderRadius: 8 },
});
