import Link from "next/link"
import Image from "next/image"

import Button from "@/components/ui/Button"

export default function Home() {
  return (
    <main>
      <div className="container mx-auto max-w-7xl flex items-center justify-between px-10 mt-20">
        <div className="w-full flex flex-col gap-6">
          <p className="font-primary text-black text-[64px] leading-[77px]">Empower users to quickly and safely <span className="text-primary">buy & sell crypto</span> for fiat currency.</p>
          <p>Simplify your crypto transactions with us. Experience seamless and secure buying and selling, backed by a seasoned exchanger that prioritizes the integrity of your assets. Enjoy personalized support via direct chat, phone, email, or text. No complications, no delays – just effortless crypto on and off-ramping.</p>
          <div className="flex gap-4">
            <Link href={'/'}>
              <Button text='Contact Us'/>
            </Link>
            <Link href={'/'}>
              <Button text='Buy & sell crypto'/>
            </Link>
          </div>
        </div>
        <div>

        </div>
      </div>
    </main>
  )
}
