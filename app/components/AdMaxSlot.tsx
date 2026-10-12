'use client'

import { useEffect, useRef } from 'react'

/** Render exactly one AdMax script depending on viewport size. */
export default function AdMaxSlot() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const mobile = window.matchMedia('(max-width: 767px)').matches
    const src = mobile
      ? 'https://adm.shinobi.jp/s/6f621e9e01778ed698908bc57b18d57e'
      : 'https://adm.shinobi.jp/s/d51bf78cf18f01cd717f7e9448599fca'

    // Third-party ad scripts may use document.write while loading.
    // Load only on the client, after hydration.
    const script = document.createElement('script')
    script.src = src
    script.async = true
    container.appendChild(script)
    return () => {
      script.remove()
    }
  }, [])

  return (
    <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-8 lg:px-8">
      <div
        ref={containerRef}
        aria-label="広告"
        className="mx-auto flex min-h-[250px] max-w-full items-center justify-center overflow-hidden"
      />
    </div>
  )
}
