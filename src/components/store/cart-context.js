import React from "react";

const CartContext = React.createContext({
  items: [],
  totealAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
