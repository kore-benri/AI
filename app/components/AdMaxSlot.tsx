'use client'

import { useEffect, useState } from 'react'

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
          <iframe
            key={mobile ? 'mobile' : 'desktop'}
            title="忍者AdMax 広告"
            src={mobile ? '/AI/admax-mobile.html' : '/AI/admax-desktop.html'}
            loading="lazy"
            scrolling="no"
            className={mobile ? 'block h-[50px] w-[320px] max-w-full border-0 bg-transparent' : 'block h-[250px] w-[300px] max-w-full border-0 bg-transparent'}
          />
        )}
      </div>
    </aside>
  )
}
