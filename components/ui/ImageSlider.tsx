import { useState } from 'react';
import Image from 'next/image';

interface ImageSliderProps {
    images: string[];
  }

const Slider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[600px] w-[350px] overflow-hidden rounded-3xl">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={350}
            height={600}
            alt={`Image ${index}`}
            className="absolute w-full h-full transition-transform transform"
            style={{
              left: currentImage === index ? '0' : '100%',
            }}
          />
        ))}
      </div>
      <div className="buttons flex justify-center gap-4 mt-4">
        <button
          className="bg-primary rounded-full p-2 h-[40px] w-[40px]"
          onClick={handlePrev}
        >
          <Image src={'/assets/left.png'} alt='left arrow' width={40} height={40} />
        </button>
        <button
          className="bg-primary rounded-full p-2 h-[40px] w-[40px]"
          onClick={handleNext}
        >
          <Image src={'/assets/right.png'} alt='right arrow' width={40} height={40} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
