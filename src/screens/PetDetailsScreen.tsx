import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { supabase } from '../supabase';

export default function PetDetailsScreen({ route }: any) {
  const { id } = route.params; // El id que viene de PetsListScreen
  const [pet, setPet] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPet = async () => {
      const { data, error } = await supabase
        .from('pets')
        .select('*')
        .eq('id', id)
        .single(); // Solo un registro

      if (error) {
        console.log('Error al traer mascota:', error);
        setPet(null);
      } else {
        setPet(data);
      }
      setLoading(false);
    };

    fetchPet();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#4caf50" />
      </View>
    );
  }

  if (!pet) {
    return (
      <View style={styles.container}>
        <Text>No se encontró la mascota.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pet.name}</Text>
      <Text style={styles.info}>Edad: {pet.age} años</Text>
      <Text style={styles.info}>Raza: {pet.breed}</Text>
      <Text style={styles.info}>Peso: {pet.weight} kg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  info: { fontSize: 18, marginBottom: 10 },
});
