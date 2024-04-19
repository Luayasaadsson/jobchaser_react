import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface JobHit {
  headline: string;
}

interface JobSearchResponse {
  hits: JobHit[];
}

interface Job {
  id: number;
  title: string;
  description: string;
}

interface FilterState {
  jobs: Job[];
  searchTerm: string;
  suggestions: string[];
  categories: string[];
  sortOrder: string;
}

const initialState: FilterState = {
  jobs: [],
  searchTerm: "",
  suggestions: [],
  categories: [],
  sortOrder: "newest",
};

// Asynkron thunk för att hämta jobb förslag
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

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      if (action.payload === "") {
        state.jobs = [];
      }
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<string>) => {
      state.sortOrder = action.payload;
    },
    addCategory: (state, action: PayloadAction<string>) => {
      if (!state.categories.includes(action.payload)) {
        state.categories.push(action.payload);
      }
    },
    removeCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(
        (category) => category !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
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

export const {
  setSearchTerm,
  setCategories,
  setSortOrder,
  addCategory,
  removeCategory,
} = filterSlice.actions;

export default filterSlice.reducer;
