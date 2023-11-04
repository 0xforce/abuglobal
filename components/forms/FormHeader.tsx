import { useRef, RefObject } from 'react'

import Image from "next/image"
import logo from '../../public/assets/logo.svg'

import { useAppDispatch } from '@/app/globalRedux/hooks'
import { setIsBuy } from '@/app/globalRedux/features/generalSlice'


function FormHeader() {
    const dispatch = useAppDispatch()

    const buyRef: RefObject<HTMLButtonElement> = useRef(null)
    const sellRef: RefObject<HTMLButtonElement> = useRef(null)

    const tabHandler = (e: any) => {
        if(buyRef.current && e.target.className !== buyRef.current.className) {
            e.target.className = 'bg-transparent px-2 py-1 min-w-[60px] border-none rounded-xl font-bold cursor-pointer tab--active'
            buyRef.current.className = 'bg-transparent px-2 py-1 min-w-[60px] border-none rounded-xl font-bold cursor-pointer'
            dispatch(setIsBuy(false))
        } else if (sellRef.current) {
            e.target.className = 'bg-transparent px-2 py-1 min-w-[60px] border-none rounded-xl font-bold cursor-pointer tab--active'
            sellRef.current.className = 'bg-transparent px-2 py-1 min-w-[60px] border-none rounded-xl font-bold cursor-pointer'
            dispatch(setIsBuy(true))
        }
    }

  return (
    <div className='relative mx-auto flex items-center justify-between w-full px-5 py-2'>
        <div className="flex items-center">
            <Image src={logo} alt="logo" width={48} height={48} />
            <p className="max-xs:hidden font-semibold text-[25px] cursor-default">Abu<span className="text-primary">Global</span></p>
        </div>
        <div className='tabs'>
            <button onClick={tabHandler} ref={buyRef} className='bg-transparent px-2 py-1 min-w-[60px] border-none rounded-xl font-bold cursor-pointer tab--active'>Buy</button>
            <button onClick={tabHandler} ref={sellRef} className='bg-transparent px-2 py-1 min-w-[60px] border-none rounded-xl font-bold cursor-pointer'>Sell</button>
        </div>
    </div>
  )
}

export default FormHeader