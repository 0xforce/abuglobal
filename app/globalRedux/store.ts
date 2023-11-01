"use client";

import { configureStore } from '@reduxjs/toolkit'

import connectionSlice from './features/connectionSlice';
import tokensSlice from './features/tokensSlice';
import generalSlice from './features/generalSlice';

export const store = configureStore({
    reducer: {
      connectionSlice,
      tokensSlice,
      generalSlice,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch