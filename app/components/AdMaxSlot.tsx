'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

const MOBILE_AD = 'https://adm.shinobi.jp/s/6f621e9e01778ed698908bc57b18d57e'
const DESKTOP_AD = 'https://adm.shinobi.jp/s/d51bf78cf18f01cd717f7e9448599fca'

export default function AdMaxSlot() {
  const [mobile, setMobile] = useState<boolean | null>(null)

  useEffect(() => {
    setMobile(window.matchMedia('(max-width: 767px)').matches)
  }, [])

  return (
    <aside aria-label="広告" className="relative z-10 mx-auto w-full max-w-6xl px-5 py-5 lg:px-8">
      <div className="mx-auto flex w-full flex-col items-center">
        <span className="mb-2 block text-[11px] text-slate-500">広告</span>
        {mobile !== null && (
          <div className={mobile ? 'min-h-[50px] w-full max-w-[320px] text-center' : 'min-h-[250px] w-[300px] max-w-full text-center'}>
            <Script
              key={mobile ? 'admax-mobile' : 'admax-desktop'}
              id={mobile ? 'admax-mobile' : 'admax-desktop'}
              src={mobile ? MOBILE_AD : DESKTOP_AD}
              strategy="afterInteractive"
            />
          </div>
        )}
      </div>
    </aside>
  )
}
