import { createSlice } from '@reduxjs/toolkit';

// Define the state type
interface generalState {
    isBuy: boolean;
}

const initialState: generalState = {
    isBuy: true
};

const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
    setIsBuy: (state, action) => {
        state.isBuy = action.payload;
    },
    },
});

export const { setIsBuy } = generalSlice.actions;

export default generalSlice.reducer;