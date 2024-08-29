import { createSlice } from "@reduxjs/toolkit";

const getCart = () =>
  localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: getCart(),

  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.category === newItem.category
      );

      const cartItems = existingItem
        ? state.cartItems.map((item) =>
            item.category === existingItem.category ? newItem : item
          )
        : [...state.cartItems, newItem];

      localStorage.setItem("cart", JSON.stringify({ cartItems }));

      return (state = { ...state, cartItems });
    },

    removeFromCart: (state, action) => {
      const existingItem = action.payload;
      const cartItems = state.cartItems.filter(
        (item) => item.category !== existingItem.category
      );

      localStorage.removeItem("cart", JSON.stringify({ cartItems }));

      return (state = { ...state, cartItems });
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
