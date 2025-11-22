import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

// 🧠 REDUX
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function HomeScreen({ navigation }: any) {
  const pets = useSelector((state: RootState) => state.pets.petsList);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Pet Health</Text>

      <Image
        source={require('../assets/pet.png')}
        style={styles.image}
      />

      <Text style={styles.title2}>Empieza registrando tu mascota</Text>

      <CustomButton
        label="Agregar mascota"
        onPress={() => navigation.navigate('AddPet')}
      />

      {/* 🐾 LISTA DE MASCOTAS GUARDADAS */}
      {pets.length === 0 ? (
        <Text style={{ marginTop: 20 }}>No hay mascotas registradas aún</Text>
      ) : (
        pets.map((pet: any, index: number) => (
          <Text key={index} style={styles.petText}>
            🐾 {pet.name} - {pet.age} años - {pet.breed}
          </Text>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',  
    backgroundColor: '#89c0f0ff'
  },
  image: { width: 350, height: 300, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  title2: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  petText: { marginTop: 10, fontSize: 16, fontWeight: 'bold' },
});
