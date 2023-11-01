import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ethers } from 'ethers';

// Define the state type
interface TokensState {
    Tokens: {
        contracts: any[];
        symbols: string[];
    };
    balances: string[];
}

const initialState: TokensState = {
    Tokens: { contracts: [], symbols: [] },
    balances: []
};

const tokensSlice = createSlice({
    name: 'tokens',
    initialState,
    reducers: {
    setTokens: (state, action: PayloadAction<{ token: ethers.Contract; symbol: string; token2: ethers.Contract; symbol2: string }>) => {
      // Update contracts and symbols separately for each token
        state.Tokens.contracts = [action.payload.token, action.payload.token2];
        state.Tokens.symbols = [action.payload.symbol, action.payload.symbol2];
    },
    setTokensBalances: (state, action: PayloadAction<{ balance_token_1: string; balance_token_2: string }>) => {
        state.balances = [action.payload.balance_token_1, action.payload.balance_token_2];
    },
    },
});

export const { setTokens, setTokensBalances } = tokensSlice.actions;

export default tokensSlice.reducer;
