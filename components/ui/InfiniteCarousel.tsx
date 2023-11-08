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
      <div className="flex items-center justify-center w-[200px] h-auto">
        <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className="object-cover w-[200px] h-auto p-4" />
      </div>
    </li>
  );
};

export default InfiniteCarousel;
