import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FilterState {
  searchTerm: string;
  categories: string[];
}

const initialState: FilterState = {
  searchTerm: "",
  categories: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    addCategory: (state, action: PayloadAction<string>) => {
      if (!state.categories.includes(action.payload)) {
        state.categories.push(action.payload);
      }
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(category => category !== action.payload);
    },
  },
});

// Lägger även in addCategory och removeCategory för framtida ändringar.
export const { setSearchTerm, setCategories, addCategory, removeCategory } = filterSlice.actions;

export default filterSlice.reducer;