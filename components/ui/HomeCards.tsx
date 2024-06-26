"use client";

import Image from "next/image";

interface Props {
  img: string;
  alt: string;
  title: string;
  text: string;
}

function HomeCards({ img, alt, title, text }: Props) {
  return (
    <div className="relative bg-[#14161a] rounded-[16px] py-3 w-full max-w-[590px] overflow-hidden items-center justify-center">
      <div className="w-full max-w-[350px] mx-auto pt-10">
        <Image
          src={img}
          alt={alt}
          width={350}
          height={190}
          className="w-[350px] h-[190px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-[16px] md:px-6 pb-10">
        <h3 className="text-white font-semibold text-[24px] mb-[8px] text-center">
          {title}
        </h3>
        <p className="text-[12px] text-neutral text-center font-semibold px-20">
          {text}
        </p>
      </div>
    </div>
  );
}

export default HomeCards;
