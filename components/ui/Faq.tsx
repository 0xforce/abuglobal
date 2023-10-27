import { useState } from 'react'

interface Props {
    pregunta: string;
    respuesta: string;
}

function Faq( {pregunta, respuesta }: Props ) {
    const [isAnswer, setIsAnswer] = useState(false)

    const revealHandler = () => {
        setIsAnswer(!isAnswer)
    }

    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(respuesta, 'text/html');

  return (
    <div className="flex flex-col border-solid border-b-[1px] border-[#eaecf0]">
        <div className="flex flex-row justify-between cursor-pointer items-center py-6 hover:px-6">
            <h3 className="text-black text-[18px]">{pregunta}</h3>
            <div className="relative flex w-[24px] h-[24px] rounded-full p-[4px] border-solid border-2 border-primary justify-center items-center" onClick={revealHandler}>
                <div className="absolute w-[12px] h-[2px] bg-primary rounded-xl"></div>
                <div className={`absolute w-[2px] h-[12px] bg-primary rounded-xl transform translate-x-0 translate-y-0 scale-100 rotate-0 skew-x-0 skew-y-0 transform-style-preserve-3d transition-transform duration-300 ease-linear ${isAnswer && "transform translate-x-0 translate-y-0 scale-100 rotate-90 skew-x-0 skew-y-0 transform-style-preserve-3d transition-transform duration-300 ease-linear"}`}></div>
            </div>
        </div>
        {isAnswer && <div className="flex text-[16px] justify-start w-[800px] h-auto pb-6 overflow-hidden transition duration-300 ease-linear">
            <div dangerouslySetInnerHTML={{ __html: parsedHtml.body.innerHTML }} />
        </div>}
    </div>
  )
}

export default Faq