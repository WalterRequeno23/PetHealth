import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 🧾 1. DEFINIR EL TIPO DE MASCOTA
interface Pet {
  name: string;
  age: string;
  breed: string;
  weight: string;
}

// 🧠 2. DEFINIR EL ESTADO INICIAL
interface PetsState {
  petsList: Pet[];
}

const initialState: PetsState = {
  petsList: [],
};

// 🧩 3. CREAR EL SLICE CON TIPOS
const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    addPet: (state, action: PayloadAction<Pet>) => {
      state.petsList.push(action.payload);
    },
  },
});

export const { addPet } = petsSlice.actions;
export default petsSlice.reducer;
