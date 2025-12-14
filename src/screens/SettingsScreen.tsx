import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
        Configuraciones
      </Text>

      <View style={styles.switchContainer}>
        <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
          Modo Oscuro
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#4b76f5ff' : '#f4f3f4'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lightBackground: {
    backgroundColor: '#ffffff',
  },
  darkBackground: {
    backgroundColor: '#121212',
  },
  lightText: {
    color: '#000000',
  },
  darkText: {
    color: '#ffffff',
  },
});
