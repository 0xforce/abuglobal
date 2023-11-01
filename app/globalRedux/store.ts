"use client";

import { configureStore } from '@reduxjs/toolkit'

import connectionSlice from './features/connectionSlice';
import tokensSlice from './features/tokensSlice';

export const store = configureStore({
    reducer: {
      connectionSlice,
      tokensSlice,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch