import React, { useState } from 'react';
import { 
    View, 
    Text, 
    Alert, 
    StyleSheet, 
    ScrollView, 
    KeyboardAvoidingView, 
    Platform 
} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { supabase } from '../supabase';

// Redux
import { useDispatch } from 'react-redux';
import { addPet } from '../redux/slices/petsSlice'; // Usamos la acción corregida

// Interfaz para el objeto Pet (Asegúrate de que coincida con tu slice)
interface PetData {
    id: string; 
    name: string;
    breed: string;
    age: number;
    weight: number;
}


export default function AddPetScreen({ navigation }: any) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [weight, setWeight] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    // Validación y guardado (Ahora es asíncrona)
    const validate = async () => {
  if (!name.trim()) return Alert.alert('Error', 'El nombre es obligatorio');
  if (!age.trim()) return Alert.alert('Error', 'La edad es obligatoria');
  if (!breed.trim()) return Alert.alert('Error', 'La raza es obligatoria');
  if (!weight.trim()) return Alert.alert('Error', 'El peso es obligatorio');

  const numAge = Number(age);
  const numWeight = Number(weight);

  if (isNaN(numAge) || numAge <= 0) return Alert.alert('Error', 'Edad inválida');
  if (isNaN(numWeight) || numWeight <= 0) return Alert.alert('Error', 'Peso inválido');

  setLoading(true);

  try {
    const { data, error } = await supabase
      .from('pets')
      .insert([
        {
          name,
          breed,
          age: numAge,
          weight: numWeight,
        },
      ])
      .select();

    if (error) {
      console.log(error);
      Alert.alert('Error', 'No se pudo guardar en Supabase');
      return;
    }

    const newPet = data![0];

    // 🔹 Guardamos en Redux SOLO si Supabase fue exitoso
    dispatch(addPet(newPet));

    Alert.alert('Éxito', 'Mascota guardada');
    navigation.goBack();
  } catch (err) {
    console.log(err);
    Alert.alert('Error inesperado');
  } finally {
    setLoading(false);
  }
};


    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Registrar Nueva Mascota </Text>

                <CustomInput label="Nombre" value={name} onChangeText={setName} />
                <CustomInput label="Edad (años)" value={age} onChangeText={setAge} keyboardType="numeric" />
                <CustomInput label="Raza" value={breed} onChangeText={setBreed} />
                <CustomInput label="Peso (kg)" value={weight} onChangeText={setWeight} keyboardType="numeric" />

                <CustomButton 
                    label={loading ? 'Guardando...' : 'Guardar Mascota'} 
                    onPress={validate} 
                    disabled={loading}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#f9f9f9', // Fondo más claro para diseño coherente
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        marginBottom: 40,
        textAlign: 'center',
        color: '#333',
    },
}); 