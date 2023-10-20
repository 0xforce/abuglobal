import Link from "next/link"
import Image from "next/image"

import Button from "@/components/ui/Button"

import img1 from '@/public/assets/ej1.png'

export default function Home() {
  return (
    <main>
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between px-10 mt-20">
        <div className="w-full flex flex-col gap-6">
          <p className="font-primary text-black font-bold text-[55px] leading-[77px] animate-fade-up animate-once animate-duration-300 animate-ease-in">Enable users to<br /><span className="text-primary">buy & sell crypto</span><br /> for fiat currency</p>
          <p className="text-neutral text-[18px] leading-7 animate-fade-up animate-once animate-duration-300 animate-delay-100 animate-ease-in">Simplify your crypto transactions with us. Experience seamless and secure buying and selling, backed by a seasoned exchanger that prioritizes the integrity of your assets. Enjoy personalized support via direct chat, phone, email, or text. No complications, no delays – just effortless crypto on and off-ramping.</p>
          <div className="flex gap-4 animate-fade-up animate-once animate-duration-300 animate-delay-200 animate-ease-in">
            <Link href={'/'}>
              <Button text='Contact Us'/>
            </Link>
            <Link href={'/'}>
              <Button text='Buy & sell crypto'/>
            </Link>
          </div>
        </div>
        <div className="animate-fade-left animate-once animate-duration-300 animate-delay-100 animate-ease-in">
          <Image src={img1} alt="ej1" />
        </div>
      </div>
    </main>
  )
}
