"use client";

import { useEffect } from 'react';  
import { ethers } from 'ethers';
import { loadTokens, loadAccount } from '@/app/globalRedux/interactions'
import configJson from '@/config.json';

import FormHeader from '@/components/forms/FormHeader';

import { useAppDispatch, useAppSelector } from '@/app/globalRedux/hooks';
import { setProvider, setChainId, setAccount } from '@/app/globalRedux/features/connectionSlice';
import { setTokens } from '@/app/globalRedux/features/tokensSlice';
import Rhf from '@/components/forms/rhf';

interface ChainConfig {
  chain: { name: string };
  USDT: { address: string };
  USDC: { address: string };
  USDCe?: { address: string };
  explorerURL: string;
}

// Perform the type assertion when importing
const config: Record<string, ChainConfig> = configJson as Record<string, ChainConfig>;

function page() {
  const dispatch = useAppDispatch()

  const loadBlockchainData = async () => {
    try {
      if (typeof window !== 'undefined' && window.ethereum) {
  
        //Connect ethers to blockchain
        const loadProvider = new ethers.providers.Web3Provider(window.ethereum)
        dispatch(setProvider(loadProvider))
  
        //Fetch current netwrok's chainId
        const { chainId } = await loadProvider.getNetwork()
        dispatch(setChainId(chainId))
  
        //reload page when network changes
        window.ethereum.on('chainChanged', () => {
          window.location.reload()
        })
  
        //Fetch current account and balance from Metamask when changed
        window.ethereum.on('accountsChanged', async () => {
          const account = await loadAccount(loadProvider)
          dispatch(setAccount(account))
        })
  
        // Load token smart contracts
        const USDT = config[chainId].USDT
        const USDC = config[chainId].USDC
        const tokens = await loadTokens(loadProvider, [USDT.address, USDC.address])
        dispatch(setTokens(tokens))
      } else {
        console.error('Provider not detected. Please install MetaMask or a similar wallet.');
      }

    } catch (error) {
      console.error('Error requesting data:', error);
    }
  }

  useEffect(() => {
    loadBlockchainData()
  }, [])

  return (
    <section className="relative bg-cover bg-[url('/assets/gradient.png')]">
      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-between px-10 py-20">
        <div className='bg-white flex flex-col gap-4 rounded-lg shadow-slate-300 shadow-md py-4'>
          <FormHeader />
          <Rhf />
        </div>
        <h1 className='text-white font-bold text-[40px] mt-10'>Buy & Sell Crypto</h1>
      </div>
    </section>
  )
}

export default page