interface Props {
    num: {
      num: string;
      text: string;
    }
}

const ProcessStep = ({ num }: Props) => {
  return (
    <div className='mx-auto max-w-sm flex flex-col gap-4 text-center items-center'>
      <div className='flex items-center justify-center rounded-full bg-[#0B1B34] border-solid border border-primary w-20 h-20'>
        <span className="text-white text-[18px] font-bold">{num.num}</span>
      </div>
      <div className='grow mx-auto max-w-[300px] gap-4'>
        <p className='text-white text-[18px] text-center'>{num.text}</p>
      </div>
    </div>
  );
};

export default ProcessStep