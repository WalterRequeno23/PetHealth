import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

// 🧠 REDUX
import { useDispatch } from 'react-redux';
import { addPet } from '../redux/slices/petsSlice';

export default function AddPetScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [weight, setWeight] = useState('');

  // REDUX
  const dispatch = useDispatch();

  const validate = () => {
    if (!name.trim()) return Alert.alert('Error', 'El nombre es obligatorio');
    if (!age.trim()) return Alert.alert('Error', 'La edad es obligatoria');
    if (!breed.trim()) return Alert.alert('Error', 'La raza es obligatoria');
    if (!weight.trim()) return Alert.alert('Error', 'El peso es obligatorio');
    if (isNaN(Number(weight)) || Number(weight) <= 0)
      return Alert.alert('Error', 'Peso inválido');
    if (isNaN(Number(age)) || Number(age) <= 0)
      return Alert.alert('Error', 'Edad inválida');

    // 🐾 GUARDAR EN REDUX ⬇
    dispatch(addPet({ name, age, breed, weight }));

    Alert.alert('Datos registrados', '¡Mascota guardada correctamente!');
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registrar Nueva Mascota</Text>

      <CustomInput label="Nombre" value={name} onChangeText={setName} />
      <CustomInput label="Edad (años)" value={age} onChangeText={setAge} keyboardType="numeric" />
      <CustomInput label="Raza" value={breed} onChangeText={setBreed} />
      <CustomInput label="Peso (kg)" value={weight} onChangeText={setWeight} keyboardType="numeric" />

      <CustomButton label="Guardar" onPress={validate} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
  },
});
