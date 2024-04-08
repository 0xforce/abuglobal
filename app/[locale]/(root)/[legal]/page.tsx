import Link from 'next/link';
import parse from "html-react-parser"

import { legal } from '@/constants/index'

function page({ params }: {
    params: { legal: string }
}) {

    return (
        <main>
            {params.legal === 'terms-of-service' || params.legal === 'privacy-policy' || params.legal === 'aml-kyc-policy' ? (
                <>
                    <section className="relative z-40 rounded-b-[32px] bg-[#f0f2f4]">
                        <div className='mx-auto max-w-7xl flex flex-col items-center text-center justify-between px-10 py-20 mb-[80px]'>
                            {params.legal === 'terms-of-service' ? (
                                <div>
                                    <h1 className='text-[64px] font-bold'>Terms of Service</h1>
                                    <p className='px-[40px] text-[18px] font-normal text-[#3d4651]'>Terms and conditions for using AbuGlobal’s buy and sell services.</p>
                                </div>
                            ) : params.legal === 'privacy-policy' ? (
                                <div>
                                    <h1 className='text-[64px] font-bold'>Privacy policy</h1>
                                </div>
                            ) : params.legal === 'aml-kyc-policy' && (
                                <div>
                                    <h1 className='text-[64px] font-bold'>AML/KYC policy</h1>
                                </div>
                            )}
                        </div>
                        <div className='w-full flex justify-center'>
                            <div className='flex flex-row justify-around gap-[10px] md:gap-[110px]'>
                                <Link href='/terms-of-service' className={`text-[#3d4651] px-[24px] py-[18px] font-bold rounded-t-lg ${params.legal === 'terms-of-service' && "bg-white text-black"}`}>Terms Of Service</Link>
                                <Link href='/privacy-policy' className={`text-[#3d4651] px-[24px] py-[18px] font-bold rounded-t-lg ${params.legal === 'privacy-policy' && "bg-white text-black"}`}>Privacy Policy</Link>
                                <Link href='/aml-kyc-policy' className={`text-[#3d4651] px-[24px] py-[18px] font-bold rounded-t-lg ${params.legal === 'aml-kyc-policy' && "bg-white text-black"}`}>AML/KYC Policy</Link>
                            </div>
                        </div>
                    </section>
                    <section>
                        {params.legal === 'terms-of-service' && (
                            <div className='mx-auto max-w-7xl flex justify-center'>
                                <p className='mx-[40px] lg:mx-[120px] my-20'>{parse(legal.termsOfService)}</p>
                            </div>
                        )}
                        {params.legal === 'privacy-policy' && (
                            <div className='mx-auto max-w-7xl flex justify-center'>
                                <p className='mx-[40px] lg:mx-[120px] my-20'>{parse(legal.privacyPolicy)}</p>
                            </div>
                        )}
                        {params.legal === 'aml-kyc-policy' && (
                            <div className='mx-auto max-w-7xl flex justify-center'>
                                <div className='mx-[40px] lg:mx-[120px] my-20'>{parse(legal.amlKycPolicy)}</div>
                            </div>
                        )}
                    </section>
                </>
            ) : (
                <div className='mx-auto max-w-7xl flex justify-center items-center font-bold text-[40px] h-[75vh]'>
                    Ops, page does not exist!
                </div>
            )}
        </main>
    )
}

export default page