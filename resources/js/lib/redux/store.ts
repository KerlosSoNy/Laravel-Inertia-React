import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import toastSlice from './slices/toast'

export const store = configureStore({
    reducer: {
        toast: toastSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
