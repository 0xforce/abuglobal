import Image from 'next/image'

interface Props {
    brand: {
      src: string;
      alt: string;
      style?: string;
      width: number;
      height: number;
    }
}

const BrandImage = ({ brand }: Props) => {
  return (
    <>
      <Image src={brand.src} alt={brand.alt} width={brand.width} height={brand.height} className={`${brand.style}`}/>
    </>
  );
};

export default BrandImage