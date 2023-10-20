'use client'

import { useState } from 'react'

import Link from "next/link"
import Image from "next/image"
import menu from '../../public/assets/menu.svg'
import close from '../../public/assets/x.svg'
import logo from '../../public/assets/logo.svg'

import Button from "../ui/Button"

function Navbar() {
  const [isMenu, setIsMenu] = useState(false)

  const menuHandler = () => {
    setIsMenu(!isMenu)
    console.log(isMenu)
  }

  return (
    <nav className="py-3">
      {isMenu === false ? (
        <div className="container mx-auto max-w-7xl flex items-center justify-between px-10">
          <Link href='/' className="flex items-center">
              <Image src={logo} alt="logo" width={48} height={48} />
              <p className="max-xs:hidden font-semibold text-[25px]">Abu<span className="text-primary">Global</span></p>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex gap-4 font-semibold leading-5 items-center">
              <Link href={''} className="border-b-2 border-transparent transition-border-color duration-300 ease hover:border-primary">About</Link>
              <Link href={''} className="border-b-2 border-transparent transition-border-color duration-300 ease hover:border-primary">Contact</Link>
              <Link href={'/exchange'}>
                <Button text='Buy & sell crypto' styles='bg-primary text-white px-5 py-3'/>
              </Link>
            </div>
            <div className="block md:hidden"> 
              <div className="cursor-pointer">
                <Image
                  src={menu}
                  alt="menu"
                  width={24}
                  height={24}
                  onClick={menuHandler}
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
              <Link href={''} className="text-[30px] transition-opacity duration-400 ease-in hover:opacity-20">About</Link>
              <Link href={''} className="text-[30px] transition-opacity duration-400 ease-in hover:opacity-20">Contact</Link>
              <Link href={'/exchange'} className="w-full">
                <Button text='Buy & sell crypto' styles='bg-primary text-white px-5 py-3'/>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar