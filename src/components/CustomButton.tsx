import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ label, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: '#1d11f8ff', padding: 12, borderRadius: 8 },
  text: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});
