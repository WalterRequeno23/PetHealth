import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigator from './TabsNavigator';
import AddPetScreen from '../screens/AddPetScreen';
import PetDetailsScreen from '../screens/PetDetailsScreen';
import PetsListScreen from '../screens/PetsListScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="AddPet" component={AddPetScreen} />
      <Stack.Screen name="PetsList" component={PetsListScreen} options={{ title: 'Mis Mascotas' }} />
      <Stack.Screen name="PetDetails" component={PetDetailsScreen} options={{ title: 'Detalles' }} />
    </Stack.Navigator>
  );
}
