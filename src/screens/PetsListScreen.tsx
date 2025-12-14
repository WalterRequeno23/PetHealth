import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function PetsListScreen({ navigation }: any) {
  const pets = useSelector((state: RootState) => state.pets.petsList);

  if (pets.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>
          No hay mascotas registradas. ¡Añade una!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.petItem}>
            
            {/* Información de la mascota */}
            <View style={styles.petInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>Edad: {item.age}</Text>
              <Text>Raza: {item.breed}</Text>
              <Text>Peso: {item.weight} kg</Text>
            </View>

            {/* Botón Ver más */}
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('PetDetails', { petId: item.id })
              }
            >
              <Text style={styles.buttonText}>Ver más</Text>
            </TouchableOpacity>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  petItem: {
    flexDirection: 'row',          // ⬅️ CLAVE: pone botón a la derecha
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },

  petInfo: {
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    marginLeft: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#666',
  },
});

