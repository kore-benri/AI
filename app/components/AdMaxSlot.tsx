'use client'

import { useEffect, useState } from 'react'

const MOBILE_AD = 'https://adm.shinobi.jp/s/6f621e9e01778ed698908bc57b18d57e'
const DESKTOP_AD = 'https://adm.shinobi.jp/s/d51bf78cf18f01cd717f7e9448599fca'

export default function AdMaxSlot() {
  const [srcDoc, setSrcDoc] = useState<string | null>(null)

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 767px)').matches
    const adUrl = mobile ? MOBILE_AD : DESKTOP_AD
    // Isolate third-party scripts so document.write cannot replace the Next.js page.
    setSrcDoc(`<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;display:flex;justify-content:center;align-items:flex-start;background:transparent"><script src="${adUrl}"><\/script></body></html>`)
  }, [])

  return (
    <aside aria-label="広告" className="relative z-10 mx-auto w-full max-w-6xl px-5 py-5 lg:px-8">
      <div className="mx-auto w-full max-w-[320px] text-center">
        <span className="mb-2 block text-[11px] text-slate-500">広告</span>
        {srcDoc && (
          <iframe
            title="忍者AdMax 広告"
            srcDoc={srcDoc}
            sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
            className="mx-auto block h-[250px] w-full border-0 bg-transparent"
          />
        )}
      </div>
    </aside>
  )
}
