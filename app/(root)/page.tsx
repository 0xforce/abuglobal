"use client"

import Link from "next/link"
import Image from "next/image"

import { useRef, MutableRefObject  } from "react"
import { useIsVisible } from "@/components/hooks"

import Button from "@/components/ui/Button"

import img1 from '@/public/assets/ej1.png'
import BrandImage from "@/components/ui/BrandImage"

import { brandImages } from '@/constants/index'

import HomeCards from "@/components/ui/HomeCards"

export default function Home() {
  const ref1: MutableRefObject<HTMLParagraphElement | null> = useRef(null)
  const isVisible1 = useIsVisible(ref1)

  const ref2: MutableRefObject<HTMLParagraphElement | null> = useRef(null)
  const isVisible2 = useIsVisible(ref2)

  const ref3: MutableRefObject<HTMLParagraphElement | null> = useRef(null)
  const isVisible3 = useIsVisible(ref3)

  return (
    <main>
      <section className="relative z-10 rounded-b-[32px] bg-white">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between px-10 mt-20">
          <div className="w-full flex flex-col gap-6 items-center lg:items-start">
            <p className="font-primary text-black font-bold text-[55px] leading-[77px] animate-fade-up animate-once animate-duration-300 animate-ease-in">Enable users to<br /><span className="text-primary">buy & sell crypto</span><br /> for fiat currency</p>
            <p className="text-neutral text-[18px] leading-7 text-center lg:text-start animate-fade-up animate-once animate-duration-300 animate-delay-100 animate-ease-in">Simplify your crypto transactions with us. Experience seamless and secure buying and selling, backed by a seasoned exchanger that prioritizes the integrity of your assets. Enjoy personalized support via direct chat, phone, email, or text. No complications, no delays – just effortless crypto on and off-ramping.</p>
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center lg:justify-start animate-fade-up animate-once animate-duration-300 animate-delay-200 animate-ease-in">
              <Link href={'/'}>
                <Button text='Contact Us' styles='bg-primary text-white px-10 py-3'/>
              </Link>
              <Link href={'/exchange'}>
                <Button text='Buy & sell crypto' styles='bg-white text-black px-5 py-3 border-solid border-[1px] border-gray-300'/>
              </Link>
            </div>
          </div>
          <div className="xl:w-full lg:w-10/12 animate-fade-left animate-once animate-duration-300 animate-delay-100 animate-ease-in">
            <Image src={img1} alt="ej1" />
          </div>
        </div>

        <div className="container mx-auto py-5">
            <div className="flex flex-wrap justify-center items-center">
              {brandImages.map((image, index) => (
                <div key={index}>
                  <BrandImage
                    brand={image}
                  />
                </div>
              ))}
            </div>
        </div>
      </section>

      <section className="relative z-0 bg-black rounded-b-[32px] mt-[-50px] w-full">
        <div className="mx-auto max-w-7xl flex flex-col justify-center items-center min-h-screen pt-[100px] pb-[40px] lg:pt-[60px] gap-6 px-[24px]">
          <p ref={ref1} className={`text-primary uppercase font-bold text-[16px] leading-[24px] ${isVisible1 && "animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"}`}>making crypto onboarding simple</p>
          <h2 ref={ref2} className={`text-white font-semibold text-[48px] text-center leading-[58px] px-4 ${isVisible2 && "animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"}`}>One verified crypto exchanger, two powerful ramps</h2>
          <div ref={ref3} className={`flex flex-col lg:flex-row gap-6 justify-center mt-[56px] ${isVisible2 && " animate-fade animate-once animate-duration-700 animate-delay-500 animate-ease-in"}`}>
            <HomeCards 
              img="/assets/onRamp.png" 
              alt="on-ramp crypto" 
              title="Fiat to crypto on-ramp" 
              text="Onboard users by facilitating the conversion of traditional currency (fiat) into cryptocurrency, allowing users to enter the digital asset space by purchasing cryptocurrencies using methods like bank transfers,zelle,cash or other payment methods"
            />

            <HomeCards 
              img="/assets/offRamp.png" 
              alt="off-ramp crypto" 
              title="Crypto to fiat off-ramp" 
              text="Give users the freedom to move back to fiat by selling their cryptocurrencies and receiving traditional currencies in return through bank transfers and other payment methods available"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
