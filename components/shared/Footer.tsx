import Link from "next/link"
import Image from "next/image"

import logo from '../../public/assets/logo.svg'

function Footer() {
  return (
    <footer className="bg-black text-white">
        <div className="flex flex-col lg:flex-row mx-auto max-w-7xl items-start gap-10 justify-between px-4 py-[60px]">
            <div className="pr-8">
                <div className="flex flex-col gap-6">
                    <Link href='/' className="flex items-center">
                        <Image src={logo} alt="logo" width={48} height={48} />
                        <p className="max-xs:hidden font-semibold text-[25px]">Abu<span className="text-primary">Global</span></p>
                    </Link>
                </div>
                <div className="text-[12px] font-normal text-neutral mt-3 px-3">
                    Copyright 2023, AbuGlobal.
                    <br></br>
                    All rights reserved
                </div>
            </div>
            <div className="flex flex-wrap items-start gap-[100px] lg:gap-[100px] pt-5 px-3 lg:pt-0">
                <div className="flex-grow">
                    <h4 className="uppercase text-neutral text-[12px] font-bold font-primary">Business</h4>
                    <div className="flex flex-col gap-2 mt-6">
                        <Link href='/exchange' className="font-primary font-semibold cursor-pointer text-[16px] hover:text-neutral transition-all duration-200">Buy & sell crypto</Link>
                    </div>
                </div>
                <div className="flex-grow">
                    <h4 className="uppercase text-neutral text-[12px] font-bold font-primary">Company</h4>
                    <div className="flex flex-col gap-2 mt-6">
                        <Link href='/contact' className="font-primary font-semibold cursor-pointer text-[16px] hover:text-neutral transition-all duration-200">Contact us</Link>
                    </div>
                </div>
                <div className="flex-grow">
                    <h4 className="uppercase text-neutral text-[12px] font-bold font-primary">Legal</h4>
                    <div className="flex flex-col gap-2 mt-6">
                        <Link href='terms-of-service' className="font-primary font-semibold cursor-pointer text-[16px] hover:text-neutral transition-all duration-200">Terms of service</Link>
                        <Link href='privacy-policy' className="font-primary font-semibold cursor-pointer text-[16px] hover:text-neutral transition-all duration-200">Privacy policy</Link>
                        <Link href='aml-kyc-policy' className="font-primary font-semibold cursor-pointer text-[16px] hover:text-neutral transition-all duration-200">AML/KYC policy</Link>
                    </div>
                </div>
                <div className="flex-grow">
                    <h4 className="uppercase text-neutral text-[12px] font-bold font-primary">contact</h4>
                    <div className="flex flex-col gap-2 mt-6">
                        <div className="flex flex-row gap-2">
                            <Image src='/assets/whatsapp.svg' alt="whatsapp icon" width={18} height={18} className="w-[18px] h-[18px]"/>
                            <Link href='https://api.whatsapp.com/send?phone=17542659869' target='_blank' className="font-primary font-semibold cursor-pointer text-[16px] hover:text-neutral transition-all duration-200">Whatsapp</Link>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image src='/assets/telegram.svg' alt="telegram icon" width={18} height={18} className="w-[18px] h-[18px]"/>
                            <Link href='https://talkabuglobal.t.me' target="_blank" className="font-primary font-semibold cursor-pointer text-[16px] hover:text-neutral transition-all duration-200">Telegram</Link>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image src='/assets/imessage.svg' alt="iMessage icon" width={18} height={18} className="w-[18px] h-[18px]"/>
                            <Link href='/' className="font-primary font-semibold cursor-pointer text-[16px] hover:text-neutral transition-all duration-200">iMessage</Link>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image src='/assets/email.png' alt="email icon" width={18} height={8} className="w-[18px] h-[18px]"/>
                            <Link href='/' className="font-primary font-semibold cursor-pointer text-[16px] hover:text-neutral transition-all duration-200">sales@abuglobal.io</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer