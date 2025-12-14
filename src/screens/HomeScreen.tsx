import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Pet Health</Text>
      <Image
        source={require('../assets/pet.png')}
        style={styles.image}
      />
      <Text style={styles.subtitle}>Registra tu mascota</Text>

      <CustomButton
        label="Agregar mascota"
        onPress={() => navigation.navigate('AddPet')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#89c0f0ff',
    padding: 20,
  },
  image: {
    width: 350,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
