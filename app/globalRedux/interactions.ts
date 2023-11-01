import { ethers } from 'ethers';
import TOKEN_ABI from '../../constants/abis/Token.json';
import { Dispatch } from '@reduxjs/toolkit'

type LoadTokenResult = {
    token: any;
    symbol: string;
    token2: any;
    symbol2: string;
};

export const loadAccount = async (provider: ethers.providers.JsonRpcProvider) => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const address = ethers.utils.getAddress(accounts[0])

    let balance = await provider.getBalance(address)
    const formatBalance = ethers.utils.formatEther(balance)

    return {address, balance: formatBalance};
}

export const loadTokens = async (
    provider: ethers.providers.JsonRpcProvider,
    addresses: string[]
    ): Promise<LoadTokenResult> => {
    let token: any;
    let symbol: string;
    let token2: any;
    let symbol2: string;
    
    token = new ethers.Contract(addresses[0], TOKEN_ABI, provider);
    symbol = await token.symbol();

    token2 = new ethers.Contract(addresses[1], TOKEN_ABI, provider);
    symbol2 = await token2.symbol();

    return { token, symbol, token2, symbol2 };
};

// Load user Balances

export const loadTokensBalances = async (tokens: ethers.Contract[], account: string) => {
    const balance_token_1 = ethers.utils.formatUnits(await tokens[0].balanceOf(account), 18)
    const balance_token_2 = ethers.utils.formatUnits(await tokens[1].balanceOf(account), 18)
    
    return {balance_token_1, balance_token_2}
}