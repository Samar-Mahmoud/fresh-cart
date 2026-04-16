import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchState = {
  view: "grid" | "rows";
};

const initialState: SearchState = {
  view: "grid",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<SearchState["view"]>) => {
      state.view = action.payload;
    },
  },
});

export const { setView } = searchSlice.actions;

export default searchSlice.reducer;
