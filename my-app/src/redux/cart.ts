import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartSliceState {
  items: CartItem[];
}
export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];

  return {
    items: items as CartItem[],
  };
};

const initialState: CartSliceState = getCartFromLS();

export type CartItem = {
  id: string;
  titleDescription: string;
  title: string;
  titleSpecification: string;
  cardCountProduct: string;
  cardCountBonus: string;
  cardWeight: string;
};


const cartSlice= createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state,action:PayloadAction<CartItem>){
        state.items.push({
          ...action.payload});
      
    },
    removeItem(state,action:PayloadAction<string>){
      state.items = state.items.filter(obj=> obj.id !== action.payload)
    }
    
  }

})
export const {addItem,removeItem} = cartSlice.actions;
export default cartSlice.reducer