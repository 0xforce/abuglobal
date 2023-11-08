'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation';

import Link from "next/link"
import Image from "next/image"
import menu from '../../public/assets/menu.svg'
import close from '../../public/assets/x.svg'
import logo from '../../public/assets/logo.svg'

import Button from "../ui/Button"

import { useAppSelector, useAppDispatch } from '@/app/globalRedux/hooks'
import Blockies from 'react-blockies'

import { loadAccount } from '@/app/globalRedux/interactions'
import { setAccount } from '@/app/globalRedux/features/connectionSlice'
import { ethers } from 'ethers'

import config from '@/config.json'

function Navbar() {
  const dispatch = useAppDispatch()

  const provider = useAppSelector(state => state.connectionSlice.provider)
  const chainId = useAppSelector(state => state.connectionSlice.chainId)
  const { address } = useAppSelector(state => state.connectionSlice.account)

  const pathname = usePathname()
  const [isMenu, setIsMenu] = useState(false)

  const menuHandler = () => {
    setIsMenu(!isMenu)
    console.log(isMenu)
  }

  function getRpcProvider(provider: any) {
    return provider ? provider : new ethers.providers.Web3Provider(window.ethereum);
  }

  const connectHandler = async () => {
    // Load account...
    const rpcProvider = getRpcProvider(provider);
    // Fetch current account and balance from Metamask
    const account = await loadAccount(rpcProvider);
    dispatch(setAccount(account))
  }

  return (
    <nav className={`py-3 ${(pathname.startsWith('/aml') || pathname.startsWith('/terms') || pathname.startsWith('/privacy')) && "bg-[#f0f2f4]"} ${pathname.startsWith('/exchange') && "bg-black text-white"}`}>
      {isMenu === false ? (
        <div className="container mx-auto max-w-7xl flex items-center justify-between px-10">
          <Link href='/' className="flex items-center">
              <Image src={logo} alt="logo" width={48} height={48} />
              <p className="max-xs:hidden font-semibold text-[25px]">Abu<span className="text-primary">Global</span></p>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex gap-4 font-semibold leading-5 items-center">
              <Link href={'/contact'} className="border-b-2 border-transparent transition-border-color duration-300 ease hover:border-primary">Contact</Link>
              {pathname.startsWith('/exchange') && address ? (
                <div className='flex flex-row gap-2 justify-center items-center bg-primary text-white px-5 py-2 rounded-xl shadow-md'>
                  <Link href={(config as any)[chainId] ? `${(config as any)[chainId].explorerURL}/address/${address}` : '#'}  target="_blank">
                    {address.slice(0, 5) + '...' + address.slice(38, 42)}
                  </Link>
                  <Blockies  
                    seed={address}
                    size={10}
                    scale={3}
                    color='#000000'
                    bgColor='#f1f2f9'
                    spotColor='#767f92'
                    className='rounded-md'
                  />
                </div>
              ) : pathname.startsWith('/exchange') ? (
                <button className='flex flex-row gap-2 justify-center items-center bg-primary text-white px-5 py-3 rounded-xl shadow-md drop-shadow-md transition-opacity duration-200 ease hover:brightness-90' onClick={connectHandler}>Connect wallet</button>
              ) : (
                <Link href={'/exchange'} className="w-full">
                  <Button text='Buy & sell crypto' styles='bg-primary text-white px-5 py-3 shadow-md'/>
                </Link>
              )}
            </div>
            <div className="block md:hidden"> 
              <div className="cursor-pointer">
                <Image
                  src={menu}
                  alt="menu"
                  width={24}
                  height={24}
                  onClick={menuHandler}
                  className={`${pathname.startsWith('/exchange') && "invert"}`}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="md:hidden fixed top-0 left-0 w-full h-full mx-auto flex flex-col justify-start gap-4 text-white z-50 bg-gradient-to-b from-black via-black to-primary">
          <div className='flex items-center justify-between w-full pr-10 pl-4 py-6'>
            <Link href='/' className="flex items-center">
                <Image src={logo} alt="logo" width={48} height={48} />
                <p className="max-xs:hidden font-semibold text-[25px]">Abu<span className="text-primary">Global</span></p>
            </Link>
            <div className="cursor-pointer">
              <Image
                src={close}
                alt="close"
                width={36}
                height={36}
                onClick={menuHandler}
                className='invert'
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 px-8">
            <div className="flex flex-col gap-8 font-semibold leading-5 justify-start">
              <Link href={''} className="text-[30px] transition-opacity duration-400 ease-in hover:opacity-20">Contact</Link>
              {pathname.startsWith('/exchange') && address ? (
                <div className='flex flex-row gap-2 justify-center items-center bg-primary text-white px-5 py-2 rounded-xl shadow-md'>
                  <Link href={(config as any)[chainId] ? `${(config as any)[chainId].explorerURL}/address/${address}` : '#'}>
                    {address.slice(0, 5) + '...' + address.slice(38, 42)}
                  </Link>
                  <Blockies  
                    seed={address}
                    size={10}
                    scale={3}
                    color='#000000'
                    bgColor='#f1f2f9'
                    spotColor='#767f92'
                    className='rounded-md'
                  />
                </div>
              ) : pathname.startsWith('/exchange') ? (
                <button className='flex flex-row gap-2 justify-center items-center bg-primary text-white px-5 py-3 rounded-xl shadow-md drop-shadow-md transition-opacity duration-200 ease hover:brightness-90' onClick={connectHandler}>Connect wallet</button>
              ) : (
                <Link href={'/exchange'} className="w-full">
                  <Button text='Buy & sell crypto' styles='bg-primary text-white px-5 py-3'/>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar