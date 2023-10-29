import { useState } from 'react'
import parse from "html-react-parser"

interface Props {
    pregunta: string;
    respuesta: string;
}

function Faq( {pregunta, respuesta }: Props ) {
    const [isAnswer, setIsAnswer] = useState(false)

    const revealHandler = () => {
        setIsAnswer(!isAnswer)
    }

  return (
    <div className="flex flex-col w-full border-solid border-b-[1px] border-[#eaecf0]">
        <div className={`flex flex-row justify-between cursor-pointer items-center py-6 hover:px-6 ${isAnswer && "px-6"}`} onClick={revealHandler}>
            <h3 className="text-black text-[18px]">{pregunta}</h3>
            <div className="relative flex w-[24px] h-[24px] rounded-full p-[4px] border-solid border-2 border-primary justify-center items-center">
                <div className="absolute w-[12px] h-[2px] bg-primary rounded-xl"></div>
                <div className={`absolute w-[2px] h-[12px] bg-primary rounded-xl transform translate-x-0 translate-y-0 scale-100 rotate-0 skew-x-0 skew-y-0 transform-style-preserve-3d transition-transform duration-300 ease-linear ${isAnswer && "transform translate-x-0 translate-y-0 scale-100 rotate-90 skew-x-0 skew-y-0 transform-style-preserve-3d transition-transform duration-300 ease-linear"}`}></div>
            </div>
        </div>
        {isAnswer && <div className="flex text-[16px] justify-start w-full h-auto pb-6 overflow-hidden transition duration-300 ease-linear">
            <div>{parse(respuesta)}</div>
        </div>}
    </div>
  )
}

export default Faq