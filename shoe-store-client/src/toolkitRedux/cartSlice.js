import { createSlice } from "@reduxjs/toolkit";

const localCart = JSON.parse(localStorage.getItem("cart-items")) || [];
const localCartCount = Number(localStorage.getItem("cart-items-count")) || 0;

const initialState = {
  cart: localCart,
  cartCount: localCartCount,
  cartWindowState: "",
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    addProductToCart(state, action) {
      action.payload.product.time = new Date().getTime();
      state.cart.push(action.payload.product);
      state.cartCount += 1;
      localStorage.setItem("cart-items", JSON.stringify(state.cart));
      localStorage.setItem("cart-items-count", Number(state.cartCount));
    },
    deleteProductFromCart(state, action) {
      const payloadId = action.payload._id;
      const payloadTime = action.payload.time;
      state.cart = state.cart.filter((product) =>
        product._id === payloadId && product.time === payloadTime ? false : true
      );
      state.cartCount -= 1;
      localStorage.setItem("cart-items", JSON.stringify(state.cart));
      localStorage.setItem("cart-items-count", Number(state.cartCount));
    },
    updateCartToInitialState(state, action) {
      state.cart = [];
      state.cartCount = 0;
      localStorage.setItem("cart-items", JSON.stringify(state.cart));
      localStorage.setItem("cart-items-count", Number(state.cartCount));
    },
    changeCartWindowState(state) {
      state.cartWindowState =
        state.cartWindowState === "active" ? "" : "active";
    },
    closeCartWindow(state) {
      state.cartWindowState = "";
    },
  },
});

export default cartSlice.reducer;
export const {
  addProductToCart,
  deleteProductFromCart,
  updateCartToInitialState,
  changeCartWindowState,
  closeCartWindow,
} = cartSlice.actions;
