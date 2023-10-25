import Image from 'next/image';

interface Props {
  img: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const InfiniteCarousel = ({ img }: Props) => {
  return (
    <li className={`w-[200px] h-auto flex-shrink-0`}>
      <div className="w-full h-full">
        <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className="object-cover w-full h-full p-4" />
      </div>
    </li>
  );
};

export default InfiniteCarousel;
