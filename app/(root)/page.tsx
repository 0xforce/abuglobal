import Link from "next/link"
import Image from "next/image"

import Button from "@/components/ui/Button"

import img1 from '@/public/assets/ej1.png'
import BrandImage from "@/components/ui/BrandImage"

import { brandImages } from '@/constants/index'

export default function Home() {
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

      <section className="relative z-0 rounded-b-[32px] mt-[-50px]">
        <div className="bg-black max-w-7xl flex flex-col justify-between items-center text-center py-[140px] gap-6">
          <p className="text-primary uppercase font-bold text-[14px] leading-[24px]">making crypto onboarding simple</p>
          <h2 className="text-white font-semibold text-[48px] leading-[58px]">One verified crypto exchanger, two powerful ramps</h2>
          <div className="flex flex-row ">
              <div>
                
              </div>
              <div>

              </div>
          </div>
        </div>
      </section>
    </main>
  )
}
