import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Definition av en typ för enskilda jobbträffar i sökresultaten.
interface JobHit {
  headline: string;
}

// Definition av typen för svaret från jobbsök-API:t.
interface JobSearchResponse {
  hits: JobHit[];
}

// Definition av en typ för jobben som hanteras i applikationens state.
interface Job {
  id: number;
  title: string;
  description: string;
}

// Definierar statens struktur för filterSlice.
interface FilterState {
  jobs: Job[];
  searchTerm: string;
  suggestions: string[];
  categories: string[];
  sortOrder: string;
}

// Initialt tillstånd för filterSlice.
const initialState: FilterState = {
  jobs: [],
  searchTerm: "",
  suggestions: [],
  categories: [],
  sortOrder: "newest",
};

// Asynkron thunk för att hämta förslag baserat på söktermer.
export const fetchSuggestions = createAsyncThunk(
  "filter/fetchSuggestions",
  async (searchTerm: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://jobsearch.api.jobtechdev.se/search?q=${encodeURIComponent(
          searchTerm
        )}&limit=10`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data: JobSearchResponse = await response.json();
      return data.hits.map((hit: JobHit) => hit.headline);
    } catch (error) {
      console.error("Fetch error:", error);
      return rejectWithValue("Failed to fetch suggestions");
    }
  }
);

// Här skapar jag en slice för filter med olika reducers och extra reducers.
export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // Uppdaterar söktermen i tillståndet.
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      if (action.payload === "") {
        state.jobs = []; // Tömmer jobblistan om söktermen är tom.
      }
    },
    // Sätter vilka kategorier som är aktiva.
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    // Ändrar sorteringsordningen för jobblistan.
    setSortOrder: (state, action: PayloadAction<string>) => {
      state.sortOrder = action.payload;
    },
    // Används inte för tillfället, behåller den för framtida ändringar.
    addCategory: (state, action: PayloadAction<string>) => {
      if (!state.categories.includes(action.payload)) {
        state.categories.push(action.payload);
      }
    },
    // Används inte för tillfället, behåller den för framtida ändringar.
    removeCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(
        (category) => category !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    // Hanterar tillståndsändringar baserade på resultatet från fetchSuggestions-thunken.
    builder
      .addCase(fetchSuggestions.fulfilled, (state, action) => {
        state.suggestions = action.payload;
      })
      .addCase(fetchSuggestions.rejected, (state, action) => {
        console.error("Error fetching suggestions:", action.payload);
        state.suggestions = [];
      });
  },
});

// Exporterar actions skapade av slice för att kunna användas i andra delar av applikationen.
export const {
  setSearchTerm,
  setCategories,
  setSortOrder,
  addCategory,
  removeCategory,
} = filterSlice.actions;

export default filterSlice.reducer;
