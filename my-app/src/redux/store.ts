import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import cart from './cart'
export const store = configureStore({
    reducer: {
        cart
    }
})
export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();