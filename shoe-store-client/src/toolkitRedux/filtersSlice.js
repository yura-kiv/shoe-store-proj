import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
    brands: [],
    genders: [],
    colors: [],
    sizes: [],
    prices: [0, 300],
    tags: [],
    page: 1,
    limit: 8,
  },
  filtersBtnState: "",
  filtersWindowState: "",
};

// Add or remove element from arr
const changeArrFunc = (arr, payload) => {
  const index = arr.indexOf(payload);
  if (index !== -1) {
    arr.splice(index, 1);
  } else {
    arr.push(payload);
  }
  return arr;
};

const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState: initialState,
  reducers: {
    changeFiltersBtnState(state, action) {
      state.filtersBtnState = action.payload ? action.payload : "";
    },
    changeName(state, action) {
      state.filters.name = action.payload;
      state.filtersBtnState = "active";
    },
    changeBrands(state, action) {
      state.filters.brands = changeArrFunc(
        state.filters.brands,
        action.payload
      );
      state.filtersBtnState = "active";
    },
    changeGenders(state, action) {
      state.filters.genders = changeArrFunc(
        state.filters.genders,
        action.payload
      );
      state.filtersBtnState = "active";
    },
    changeColors(state, action) {
      state.filters.colors = changeArrFunc(
        state.filters.colors,
        action.payload
      );
      state.filtersBtnState = "active";
    },
    changeSizes(state, action) {
      state.filters.sizes = changeArrFunc(state.filters.sizes, action.payload);
      state.filtersBtnState = "active";
    },
    changeTags(state, action) {
      state.filters.tags = changeArrFunc(state.filters.tags, action.payload);
      state.filtersBtnState = "active";
    },
    changePrices(state, action) {
      state.filters.prices[0] = action.payload.min;
      state.filters.prices[1] = action.payload.max;
      state.filtersBtnState = "active";
    },
    changePage(state, action) {
      state.filters.page = action.payload;
    },
    changeFiltersToInitialState(state, action) {
      state.filters = initialState.filters;
    },
    changeFiltersWindowState(state, action) {
      state.filtersWindowState =
        state.filtersWindowState === "active" ? "" : "active";
    },
  },
});

export default filtersSlice.reducer;
export const {
  changeName,
  changeBrands,
  changeGenders,
  changeColors,
  changeSizes,
  changeTags,
  changePrices,
  changeFiltersBtnState,
  changePage,
  changeFiltersToInitialState,
  changeFiltersWindowState,
} = filtersSlice.actions;
