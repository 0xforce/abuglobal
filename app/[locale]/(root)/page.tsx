"use client";

import Link from "next/link";
import Image from "next/image";

import { useRef, MutableRefObject } from "react";
import { useIsVisible } from "@/components/hooks";

import Button from "@/components/ui/Button";

import img1 from "@/public/assets/ej1.png";
import BrandImage from "@/components/ui/BrandImage";
import IconCard from "@/components/ui/IconCard";
import InfiniteCarousel from "@/components/ui/InfiniteCarousel";
import ImageSlider from "@/components/ui/ImageSlider";

import {
  brandImages,
  iconCards,
  paymentImages,
  exchangeProcess,
  preguntas,
} from "@/constants/index";

import HomeCards from "@/components/ui/HomeCards";
import ProcessStep from "@/components/ui/ProcessStep";
import Faq from "@/components/ui/Faq";

export default function Home() {
  const ref1: MutableRefObject<HTMLParagraphElement | null> = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2: MutableRefObject<HTMLParagraphElement | null> = useRef(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3: MutableRefObject<HTMLParagraphElement | null> = useRef(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4: MutableRefObject<HTMLParagraphElement | null> = useRef(null);
  const isVisible4 = useIsVisible(ref4);

  const ref5: MutableRefObject<HTMLParagraphElement | null> = useRef(null);
  const isVisible5 = useIsVisible(ref5);

  const ref6: MutableRefObject<HTMLParagraphElement | null> = useRef(null);
  const isVisible6 = useIsVisible(ref6);

  const ref7: MutableRefObject<HTMLParagraphElement | null> = useRef(null);
  const isVisible7 = useIsVisible(ref7);

  const ref8: MutableRefObject<HTMLParagraphElement | null> = useRef(null);
  const isVisible8 = useIsVisible(ref8);

  const ref9: MutableRefObject<HTMLParagraphElement | null> = useRef(null);
  const isVisible9 = useIsVisible(ref9);

  const ref10: MutableRefObject<HTMLParagraphElement | null> = useRef(null);
  const isVisible10 = useIsVisible(ref10);

  const ref11: MutableRefObject<HTMLParagraphElement | null> = useRef(null);
  const isVisible11 = useIsVisible(ref11);

  const ref12: MutableRefObject<HTMLParagraphElement | null> = useRef(null);
  const isVisible12 = useIsVisible(ref12);

  const ref13: MutableRefObject<HTMLParagraphElement | null> = useRef(null);
  const isVisible13 = useIsVisible(ref13);

  const ref14: MutableRefObject<HTMLParagraphElement | null> = useRef(null);
  const isVisible14 = useIsVisible(ref14);

  const ref15: MutableRefObject<HTMLParagraphElement | null> = useRef(null);
  const isVisible15 = useIsVisible(ref15);

  const verifiedTransactions = [
    "/assets/payments1.jpeg",
    "/assets/payments2.jpeg",
    "/assets/payments3.jpeg",
    "/assets/payments4.jpeg",
    "/assets/payments5.jpeg",
  ];

  const wordsOfAppreciation = [
    "/assets/woap.jpeg",
    "/assets/woap1.jpeg",
    "/assets/woap2.jpeg",
    "/assets/woap3.jpeg",
    "/assets/woap4.jpeg",
    "/assets/woap5.jpeg",
    "/assets/woap6.jpeg",
    "/assets/woap7.jpeg",
    "/assets/woap8.jpeg",
    "/assets/woap9.jpeg",
    "/assets/woap10.jpeg",
    "/assets/woap11.jpeg",
    "/assets/woap12.jpeg",
    "/assets/woap13.jpeg",
    "/assets/woap14.jpeg",
    "/assets/woap15.jpeg",
  ];

  return (
    <main>
      {/* //FIRST SECTION ------------------------------------------------------------------ */}

      <section className="relative z-40 rounded-b-[32px] bg-white">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between px-10 mt-20">
          <div className="w-full flex flex-col gap-6 items-center lg:items-start">
            <p className="font-primary text-black font-bold text-[40px] leading-[45px] md:text-[55px] md:leading-[77px] animate-fade-up animate-once animate-duration-300 animate-ease-in">
              Enable users to
              <br />
              <span className="text-primary">buy & sell crypto</span>
              <br /> for fiat currency
            </p>
            <p className="text-neutral text-[18px] leading-7 text-center lg:text-start animate-fade-up animate-once animate-duration-300 animate-delay-100 animate-ease-in">
              Simplify your crypto transactions with us. Experience seamless and
              secure buying and selling, backed by a seasoned exchanger that
              prioritizes the integrity of your assets. Enjoy personalized
              support via direct chat, phone, email, or text. No complications,
              no delays – just effortless crypto on and off-ramping.
            </p>
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center lg:justify-start animate-fade-up animate-once animate-duration-300 animate-delay-200 animate-ease-in">
              <Link href={"/contact"}>
                <Button
                  text="Contact Us"
                  styles="bg-primary text-white px-10 py-3"
                />
              </Link>
              <Link href={"/exchange"}>
                <Button
                  text="Buy & sell crypto"
                  styles="bg-white text-black px-5 py-3 border-solid border-[1px] border-gray-300"
                />
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
                <BrandImage brand={image} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* //SECOND SECTION ------------------------------------------------------------------ */}

      <section className="relative z-30 bg-black rounded-b-[32px] mt-[-30px] w-full">
        <div className="h-full mx-auto max-w-7xl flex flex-col justify-center items-center pb-[50px] lg:pt-[20px] gap-6 px-[24px]">
          <p
            ref={ref1}
            className={`text-primary uppercase mt-[80px] font-bold text-[16px] leading-[24px] ${
              isVisible1 &&
              "animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"
            }`}
          >
            making crypto onboarding simple
          </p>
          <h2
            ref={ref2}
            className={`text-white font-semibold text-[36px] lg:text-[48px] text-center leading-[58px] px-4 ${
              isVisible2 &&
              "animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"
            }`}
          >
            One verified crypto exchanger, two powerful ramps
          </h2>
          <div
            ref={ref3}
            className={`flex flex-col lg:flex-row gap-6 justify-center mt-[56px] ${
              isVisible3 &&
              " animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"
            }`}
          >
            <HomeCards
              img="/assets/onRamp.png"
              alt="on-ramp crypto"
              title="Fiat to crypto on-ramp"
              text="Onboard users by facilitating the conversion of traditional currency (fiat) into cryptocurrency, allowing users to enter the digital asset space by purchasing cryptocurrencies using methods like bank transfers, zelle, cash or other payment methods"
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

      <section className="relative z-20 bg-white rounded-b-[32px] mt-20 w-full">
        <div className="mx-auto max-w-7xl flex flex-col justify-center items-center mt-10 pb-[10px] lg:pt-[20px] gap-6 px-[24px] overflow-hidden">
          <h2
            ref={ref5}
            className={`font-bold text-primary text-[24px] leading-[24px] uppercase ${
              isVisible5 &&
              " animate-fade-up animate-once animate-duration-700 animate-delay-600 animate-ease-in"
            }`}
          >
            Payment Methods
          </h2>
          <p
            className={`text-neutral font-semibold text-center ${
              isVisible5 &&
              " animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"
            }`}
          >
            Choose your preferred option from all major global available payment
            methods. Buy crypto Bank transfers, Zelle, Paypal, Nequi, and many
            others
          </p>
          <article className="flex flex-row justify-center items-center overflow-x-visible w-[500%] animate-bannermove lg:w-[200%] mt-10">
            <div className="w-[100%]">
              <ul className="flex justify-center items-center list-none pl-0 m-0">
                {paymentImages.map((img, index) => (
                  <InfiniteCarousel key={index} img={img} />
                ))}
              </ul>
            </div>
            <div className="w-[100%]">
              <ul className="flex justify-center items-center list-none pl-0 m-0">
                {paymentImages.map((img, index) => (
                  <InfiniteCarousel key={index} img={img} />
                ))}
              </ul>
            </div>
            <div className="w-[100%]">
              <ul className="flex justify-center items-center list-none pl-0 m-0">
                {paymentImages.map((img, index) => (
                  <InfiniteCarousel key={index} img={img} />
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* //FOURTH SECTION ------------------------------------------------------------------ */}

      <section
        id="about"
        className="relative z-10 rounded-b-[32px] mt-20 w-full bg-cover bg-[url('/assets/gradient.png')]"
      >
        <div className="mx-auto max-w-7xl flex flex-col justify-center items-center pt-[60px] pb-[50px] lg:pt-[20px] gap-6 px-[24px]">
          <p
            ref={ref6}
            className={`text-primary uppercase mt-[80px] font-bold text-[16px] leading-[24px] ${
              isVisible6 &&
              "animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"
            }`}
          >
            buying & selling cryptocurrency
          </p>
          <h2
            ref={ref7}
            className={`text-white font-semibold text-[36px] md:text-[48px] text-center leading-[58px] px-4 ${
              isVisible7 &&
              "animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"
            }`}
          >
            How to exchange your crypto online with AbuGlobal
          </h2>
          <div
            ref={ref8}
            className={`flex flex-wrap gap-6 mt-8 ${
              isVisible8 &&
              "animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"
            }`}
          >
            {exchangeProcess.map((num, index) => (
              <ProcessStep key={index} num={num} />
            ))}
          </div>
        </div>
      </section>

      {/* //Fifth SECTION ------------------------------------------------------------------ */}

      <section className="relative z-0 bg-white rounded-b-[32px] mt-20 w-full">
        <div
          ref={ref4}
          className={`mx-auto max-w-7xl flex flex-col lg:flex-row justify-center items-center pt-[60px] pb-[50px] lg:pt-[20px] gap-10 px-[24px] ${
            isVisible4 &&
            " animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"
          }`}
        >
          {iconCards.map((icon, index) => (
            <div key={index}>
              <IconCard icon={icon} />
            </div>
          ))}
        </div>
      </section>

      {/* //Sixth SECTION ------------------------------------------------------------------ */}

      <section className="relative z-0 bg-white rounded-b-[32px] w-full overflow-x-hidden">
        <div
          ref={ref9}
          className={`mx-auto max-w-7xl flex flex-col justify-center items-center pt-[40px] pb-[50px] lg:pt-[20px] gap-10 px-[10px] md:px-[24px] ${
            isVisible9 &&
            " animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"
          }`}
        >
          <p
            ref={ref10}
            className={`text-primary uppercase mt-[80px] font-bold text-[16px] leading-[24px] ${
              isVisible10 &&
              "animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"
            }`}
          >
            trusted services
          </p>
          <h2
            ref={ref11}
            className={`text-black font-semibold text-[36px] md:text-[48px] text-center leading-[58px] px-4 ${
              isVisible11 &&
              "animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"
            }`}
          >
            Evidence of our Trusted Services
          </h2>

          <div className="flex flex-col max-w-5xl md:flex-row gap-10 bg-[#f0f2f4] rounded-2xl p-6">
            <div className="flex flex-col justify-center items-center text-center md:text-start">
              <h3
                ref={ref12}
                className={`text-black uppercase font-semibold text-[20px] leading-[40px] ${
                  isVisible12 &&
                  "animate-fade-right animate-once animate-duration-700 animate-delay-500 animate-ease-in"
                }`}
              >
                Verified Transactions
              </h3>
              <p
                ref={ref13}
                className={`text-neutral text-justify mt-[20px] font-bold text-[14px] px-4 md:px-0 md:text-[16px] leading-[24px] ${
                  isVisible13 &&
                  "animate-fade-right animate-once animate-duration-700 animate-delay-500 animate-ease-in"
                }`}
              >
                When you opt for ABU GLOBAL as your crypto on and off-ramp
                exchanger, you're embracing a reliable partner dedicated to your
                success. Our Verified Transactions go beyond mere numbers; they
                symbolize our mission — to provide services that inspire
                confidence, drive growth, make Web3 accessible, and, most
                importantly, leave a lasting positive impact on every client we
                assist.
              </p>
            </div>
            <div
              ref={ref14}
              className={`${
                isVisible14 &&
                "animate-fade-left animate-once animate-duration-700 animate-delay-500 animate-ease-in"
              }`}
            >
              <ImageSlider images={verifiedTransactions} />
            </div>
          </div>

          <div className="flex flex-col max-w-5xl md:flex-row gap-10 bg-[#f0f2f4] rounded-2xl p-6">
            <div
              ref={ref15}
              className={`grow ${
                isVisible15 &&
                "animate-fade-right animate-once animate-duration-700 animate-delay-500 animate-ease-in"
              }`}
            >
              <ImageSlider images={wordsOfAppreciation} />
            </div>
            <div className="flex flex-col justify-center items-center text-center md:text-start">
              <h3
                className={`text-black uppercase font-semibold text-[20px] leading-[40px] ${
                  isVisible15 &&
                  "animate-fade-left animate-once animate-duration-700 animate-delay-500 animate-ease-in"
                }`}
              >
                words of appreciation
              </h3>
              <p
                className={`text-neutral text-justify mt-[20px] font-bold text-[14px] px-4 md:px-0 md:text-[16px] leading-[24px] ${
                  isVisible15 &&
                  "animate-fade-left animate-once animate-duration-700 animate-delay-500 animate-ease-in"
                }`}
              >
                We take pride in every success tale our clients share. Their
                positive experiences validate our dedication to delivering
                exceptional services. Whether it's a thriving business, an
                individual achieving their financial dreams, or a seamless
                cryptocurrency exchange leaving a lasting impact, each
                testimonial underscores the genuine worth of our offerings.
                Celebrate success with ABU GLOBAL – where every story inspires
                our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* //Seventh SECTION ------------------------------------------------------------------ */}

      <section className="relative z-0 bg-white rounded-b-[32px] w-full">
        <div
          className={`mx-auto max-w-4xl flex flex-col justify-center items-center pb-[50px] gap-10 px-[24px]`}
        >
          <p
            ref={ref10}
            className={`text-primary uppercase mt-[80px] font-bold text-[16px] leading-[24px] ${
              isVisible10 &&
              "animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"
            }`}
          >
            learn more
          </p>
          <h2
            ref={ref11}
            className={`text-black font-semibold text-[36px] md:text-[48px] text-center leading-[58px] px-4 ${
              isVisible11 &&
              "animate-fade-up animate-once animate-duration-700 animate-delay-500 animate-ease-in"
            }`}
          >
            Frequently asked questions
          </h2>
          <div className="flex flex-col w-full">
            {preguntas.map((pregunta, index) => (
              <Faq
                key={index}
                pregunta={pregunta.pregunta}
                respuesta={pregunta.respuesta}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
