import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Pet {
  id: string;
  name: string;
  breed: string;
  age: number;
  weight: number;
}

interface PetsState {
  petsList: Pet[];
}

const initialState: PetsState = {
  petsList: [],
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    setPets: (state, action: PayloadAction<Pet[]>) => {
      state.petsList = action.payload;
    },
    addPet: (state, action: PayloadAction<Pet>) => {
      state.petsList.push(action.payload);
    },
  },
});

export const { addPet, setPets } = petsSlice.actions;
export default petsSlice.reducer;
