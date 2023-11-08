
interface Props {
    text: string
}

function Loading({text}: Props) {
    return (
        <div className="flex flex-row justify-center items-center gap-4">
            <div className="loader">
                <style>
                    {`
                        .loader {
                            width: 20px;
                            padding: 4px;
                            aspect-ratio: 1;
                            border-radius: 50%;
                            background: #ffffff;
                            --_m: 
                                conic-gradient(#0000 10%, #000),
                                linear-gradient(#000 0 0) content-box;
                            -webkit-mask: var(--_m);
                            mask: var(--_m);
                            -webkit-mask-composite: source-out;
                            mask-composite: subtract;
                            animation: l3 1s infinite linear;
                        }
                        @keyframes l3 { to { transform: rotate(1turn); } }
                    `}
                </style>
            </div>
            <p className="font-semibold">{text}</p>
        </div>
    )
}

export default Loading