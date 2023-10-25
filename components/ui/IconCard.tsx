import Image from 'next/image'

interface Props {
    icon: {
      src: string;
      alt: string;
      width: number;
      height: number;
      title: string;
      text: string;
    }
}

const IconCard = ({ icon }: Props) => {
  return (
    <div className='mx-auto max-w-lg flex flex-col gap-4 text-center items-center'>
      <div className='flex-none rounded-xl border-solid border border-gray-100 shadow-xl'>
        <Image src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} className={`w-[${icon.width}] h-auto p-4`}/>
      </div>
      <div className='grow flex flex-col gap-4'>
        <h3 className='mb-[12px] font-bold text-[24px] text-black'>{icon.title}</h3>
        <p className='text-neutral text-[18px] text-justify'>{icon.text}</p>
      </div>
    </div>
  );
};

export default IconCard