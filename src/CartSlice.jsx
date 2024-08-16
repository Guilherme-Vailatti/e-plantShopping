import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
         const { name, image, cost } = action.payload;
  const existingItem = state.items.find(item => item.name === name); // Verifica se o item já existe no carrinho
  if (existingItem) {
    existingItem.quantity++;
  } else {
    state.items.push({ name, image, cost, quantity: 1 }); 
  }
    
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload); // Remove o item cujo nome corresponde ao payload
      },
      
      updateQuantity: (state, action) => {
        const { name, quantity } = action.payload; // Extrai o nome e a nova quantidade do item
        const itemToUpdate = state.items.find(item => item.name === name); // Encontra o item no carrinho
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity; // Atualiza a quantidade do item
        }
      },
      
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
