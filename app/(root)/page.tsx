"use client"

import Link from "next/link"
import Image from "next/image"

import { useRef, MutableRefObject  } from "react"
import { useIsVisible } from "@/components/hooks"

import Button from "@/components/ui/Button"

import img1 from '@/public/assets/ej1.png'
import BrandImage from "@/components/ui/BrandImage"
import IconCard from "@/components/ui/IconCard"
import InfiniteCarousel from "@/components/ui/InfiniteCarousel"

import { brandImages, iconCards, paymentImages, exchangeProcess } from '@/constants/index'

import HomeCards from "@/components/ui/HomeCards"
import ProcessStep from "@/components/ui/ProcessStep"

export default function Home() {
  const ref1: MutableRefObject<HTMLParagraphElement | null> = useRef(null)
  const isVisible1 = useIsVisible(ref1)

  const ref2: MutableRefObject<HTMLParagraphElement | null> = useRef(null)
  const isVisible2 = useIsVisible(ref2)

  const ref3: MutableRefObject<HTMLParagraphElement | null> = useRef(null)
  const isVisible3 = useIsVisible(ref3)

  const ref4: MutableRefObject<HTMLParagraphElement | null> = useRef(null)
  const isVisible4 = useIsVisible(ref4)

  const ref5: MutableRefObject<HTMLParagraphElement | null> = useRef(null)
  const isVisible5 = useIsVisible(ref5)

  const ref6: MutableRefObject<HTMLParagraphElement | null> = useRef(null)
  const isVisible6 = useIsVisible(ref6)

  return (
    <main>
      {/* //FIRST SECTION ------------------------------------------------------------------ */}

      <section className="relative z-20 rounded-b-[32px] bg-white">
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
      
      {/* //SECOND SECTION ------------------------------------------------------------------ */}

      <section className="relative z-10 bg-black rounded-b-[32px] mt-[-30px] w-full">
        <div className="h-full mx-auto max-w-7xl flex flex-col justify-center items-center pb-[50px] lg:pt-[20px] gap-6 px-[24px]">
          <p ref={ref1} className={`text-primary uppercase mt-[80px] font-bold text-[16px] leading-[24px] ${isVisible1 && "animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"}`}>making crypto onboarding simple</p>
          <h2 ref={ref2} className={`text-white font-semibold text-[48px] text-center leading-[58px] px-4 ${isVisible2 && "animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"}`}>One verified crypto exchanger, two powerful ramps</h2>
          <div ref={ref3} className={`flex flex-col lg:flex-row gap-6 justify-center mt-[56px] ${isVisible3 && " animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"}`}>
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

      {/* //THIRD SECTION ------------------------------------------------------------------ */}

      <section className="relative z-0 bg-white rounded-b-[32px] mt-20 w-full">
        <div ref={ref4} className={`mx-auto max-w-7xl flex flex-col lg:flex-row justify-center items-center pt-[60px] pb-[50px] lg:pt-[20px] gap-10 px-[24px] ${isVisible4 && " animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"}`}>
          {iconCards.map((icon, index) => (
            <div key={index}>
              <IconCard
                icon={icon}
              />
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-7xl flex flex-col justify-center items-center mt-10 pb-[10px] lg:pt-[20px] gap-6 px-[24px] overflow-hidden">
          <h2 ref={ref5} className={`font-bold text-primary text-[24px] leading-[24px] uppercase ${isVisible5 && " animate-fade-up animate-once animate-duration-700 animate-delay-600 animate-ease-in"}`}>Payment Methods</h2>
          <p className={`text-neutral font-semibold text-center ${isVisible5 && " animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"}`}>Choose your preferred option from all major global available payment methods. Buy crypto Bank transfers, Zelle ,Paypal, Nequi, and many others</p>
          <article className="flex w-[200%] mt-10">
            <div className="w-[100%] animate-bannermove">
              <ul className="flex justify-center items-center list-none pl-0 m-0">
                {paymentImages.map((img, index) => (
                    <InfiniteCarousel
                      key={index}
                      img={img}
                    />
                ))}
              </ul>
            </div>
            <div className="w-[100%] animate-bannermove">
              <ul className="flex justify-center items-center list-none pl-0 m-0">
                {paymentImages.map((img, index) => (
                    <InfiniteCarousel
                      key={index}
                      img={img}
                    />
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* //FOURTH SECTION ------------------------------------------------------------------ */}

      <section className="relative z-0 rounded-b-[32px] mt-20 w-full bg-[url('/assets/gradient.png')]">
        <div className="mx-auto max-w-7xl flex flex-col justify-center items-center pt-[60px] pb-[50px] lg:pt-[20px] gap-6 px-[24px]">
          <p ref={ref1} className={`text-primary uppercase mt-[80px] font-bold text-[16px] leading-[24px] ${isVisible1 && "animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"}`}>buying cryptocurrency</p>
          <h2 ref={ref2} className={`text-white font-semibold text-[48px] text-center leading-[58px] px-4 ${isVisible2 && "animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"}`}>How to exchange your crypto online with AbuGlobal</h2>
          <div className="flex flex-wrap mt-8">
            {exchangeProcess.map((num, index) => (
              <ProcessStep
                key={index}
                num={num}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
