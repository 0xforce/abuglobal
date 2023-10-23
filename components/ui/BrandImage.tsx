import Image from 'next/image'

interface Props {
    brand: {
      src: string;
      alt: string;
      style?: any;
      width: number;
      height: number;
    }
}

const BrandImage = ({ brand }: Props) => {
  return (
    <>
      <div style={brand.style}>
        <Image src={brand.src} alt={brand.alt} width={brand.width} height={brand.height} className={`w-[${brand.width}] h-auto`}/>
      </div>
    </>
  );
};

export default BrandImage