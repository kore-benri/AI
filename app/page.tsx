import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  Clock3,
  ExternalLink,
  Menu,
  MessageSquareText,
  Network,
  Sparkles,
  Star,
  Zap,
} from 'lucide-react'

const articles = [
  {
    category: 'Prompt Engineering',
    title: '【コピペで使える】会議の議事録からタスク・期限を自動抽出するプロンプト',
    date: '2026.10.03',
    readTime: '8 min read',
    excerpt: '議事録から担当者・期限・次のアクションまでを一度に抽出する、現場で使えるプロンプト設計。',
    accent: 'from-blue-500/30 via-cyan-400/10 to-transparent',
    icon: MessageSquareText,
    href: '/AI/articles/meeting-minutes-prompt/',
  },
  {
    category: 'AIツール活用',
    title: 'PLAUD NOTE × ChatGPTで議事録作成をラクにする方法',
    date: '2026.10.03',
    readTime: '7 min read',
    excerpt: '録音・文字起こしから、ChatGPTを使った要約・タスク整理まで。会議後の作業を効率化する流れを紹介。',
    accent: 'from-emerald-400/25 via-teal-400/10 to-transparent',
    icon: Network,
    href: '/AI/articles/plaud-note-ai-minutes/',
  },
  {
    category: 'AI活用事例',
    title: '中小企業が生成AIを導入する最初の一歩',
    date: '2026.10.03',
    readTime: '9 min read',
    excerpt: 'いきなり全社導入しない。課題選定から効果測定まで、生成AIを小さく始める5つのステップ。',
    accent: 'from-violet-400/25 via-fuchsia-400/10 to-transparent',
    icon: BrainCircuit,
    href: '/AI/articles/small-business-ai-start/',
  },

]

const tools = [
  { name: 'ChatGPT Plus', type: 'AIアシスタント', score: '4.9', copy: '日々の業務を変える、最初の一歩に。', color: 'bg-emerald-400', logo: '✦' },
  { name: 'PLAUD NOTE', type: 'AIボイスレコーダー', score: '4.7', copy: '会話を、価値あるナレッジへ。', color: 'bg-orange-400', logo: 'P' },
  { name: 'Notion AI', type: 'ワークスペース', score: '4.8', copy: 'チームの知識を、もっと使いやすく。', color: 'bg-sky-400', logo: 'N' },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_80%_0%,rgba(30,112,190,0.13),transparent_35%),radial-gradient(circle_at_0%_55%,rgba(15,118,110,0.08),transparent_30%)]" />
      <header className="relative z-10 border-b border-white/[0.08] bg-[#07111f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="AI WorkLab ホーム">
            <span className="flex size-9 items-center justify-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/25"><Bot size={19} /></span>
            <span className="text-lg font-semibold tracking-tight">AI <span className="text-blue-400">WorkLab</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex" aria-label="メインナビゲーション">
            <a className="text-white transition-colors hover:text-blue-300" href="#top">ホーム</a>
            <a className="transition-colors hover:text-white" href="#articles">記事一覧</a>
            <a className="transition-colors hover:text-white" href="#tools">ツール紹介</a>
            <a className="transition-colors hover:text-white" href="#consulting">運営者 / コンサル</a>
          </nav>
          <a href="/AI/contact/" className="hidden items-center gap-2 rounded-full border border-blue-400/40 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200 transition hover:bg-blue-400/20 sm:flex">お問い合わせ <ArrowUpRight size={15} /></a>
          <button className="rounded-lg p-2 text-slate-300 md:hidden" aria-label="メニューを開く"><Menu size={22} /></button>
        </div>
      </header>

      <section id="top" className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-3 py-1.5 text-xs font-medium text-blue-300"><Sparkles size={14} /> AI × 実務の知恵を届けるメディア</div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">AIで、日常の業務を<br /><span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">10倍速くする。</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">ChatGPT・生成AIを活用した実務プロンプトと、最新ツールの検証メディア。明日から使える知識を、わかりやすく。</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#articles" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:bg-blue-400">最新記事を読む <ChevronRight size={17} /></a><a href="#consulting" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.09]">法人向けAI導入相談 <ArrowUpRight size={17} /></a></div>
            <div className="mt-12 flex items-center gap-8 text-sm text-slate-500"><span><strong className="mr-1 text-xl font-semibold text-slate-200">120+</strong> guides</span><span className="h-5 w-px bg-white/10" /><span><strong className="mr-1 text-xl font-semibold text-slate-200">3.2k</strong> readers</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-[#0d1b2d]/90 p-6 shadow-2xl shadow-black/30">
              <div className="mb-6 flex items-center justify-between"><div className="flex items-center gap-2 text-xs text-slate-400"><span className="size-2 rounded-full bg-emerald-400" /> AI WORKFLOW / 01</div><span className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-slate-500">LIVE PREVIEW</span></div>
              <div className="rounded-2xl border border-blue-300/15 bg-gradient-to-br from-blue-500/15 to-transparent p-5"><div className="mb-8 flex items-center justify-between"><span className="text-sm font-medium text-blue-200">今日の生産性</span><Zap className="text-blue-300" size={18} /></div><div className="flex items-end gap-3"><span className="text-5xl font-semibold tracking-tight text-white">+248%</span><span className="mb-2 text-sm text-emerald-300">↗ 18.4%</span></div><div className="mt-7 flex h-20 items-end gap-1.5">{[30,45,38,60,52,72,65,90,77,100,85,100].map((height, index) => <div key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-500/60 to-cyan-300" style={{ height: `${height}%`, opacity: 0.45 + index / 22 }} />)}</div></div>
              <div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><Clock3 size={16} className="mb-3 text-slate-500" /><div className="text-xl font-semibold text-white">6.4h</div><div className="mt-1 text-xs text-slate-500">saved this week</div></div><div className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><Check size={16} className="mb-3 text-emerald-400" /><div className="text-xl font-semibold text-white">28</div><div className="mt-1 text-xs text-slate-500">tasks automated</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="articles"
        className="relative z-10 border-t border-white/[0.07] bg-[#091625]/70 px-5 py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-400">
                FEATURED ARTICLES
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                注目の記事
              </h2>
            </div>
      
            <a
              href="#articles"
              className="hidden items-center gap-1 text-sm text-slate-400 hover:text-white sm:flex"
            >
              すべての記事を見る <ChevronRight size={16} />
            </a>
          </div>
      
          <div className="grid gap-5 lg:grid-cols-3">
            {articles.map((article) => {
              const Icon = article.icon
      
              return (
                <a
                  href={article.href || '#articles'}
                  key={article.title}
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition hover:-translate-y-1 hover:border-blue-300/30"
                >
                  <div
                    className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${article.accent}`}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
      
                    <Icon
                      size={52}
                      strokeWidth={1}
                      className="relative text-white/80 transition group-hover:scale-110"
                    />
                  </div>
      
                  <div className="p-5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-blue-300">{article.category}</span>
                      <span className="text-slate-600">{article.date}</span>
                    </div>
      
                    <h3 className="mt-4 text-lg font-medium leading-7 text-white">
                      {article.title}
                    </h3>
      
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {article.excerpt}
                    </p>
      
                    <div className="mt-5 flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock3 size={13} />
                      {article.readTime}
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>
      
      <section id="tools" className="relative z-10 mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-24"><div className="mb-10"><p className="mb-3 text-xs font-semibold tracking-[0.2em] text-emerald-400">TOOLS WE USE</p><h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">おすすめAIツール</h2><p className="mt-3 text-slate-400">実際に使って、仕事が変わったものだけを紹介します。</p></div><div className="grid gap-4 md:grid-cols-3">{tools.map((tool) => <a href="#contact" key={tool.name} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-emerald-300/30 hover:bg-white/[0.06]"><div className="flex items-start justify-between"><div className={`flex size-11 items-center justify-center rounded-xl ${tool.color} text-lg font-bold text-slate-950`}>{tool.logo}</div><ExternalLink size={17} className="text-slate-600 transition group-hover:text-emerald-300" /></div><div className="mt-7 text-xs text-slate-500">{tool.type}</div><div className="mt-1 flex items-center justify-between"><h3 className="font-medium text-white">{tool.name}</h3><span className="flex items-center gap-1 text-sm text-amber-300"><Star size={13} fill="currentColor" /> {tool.score}</span></div><p className="mt-3 text-sm text-slate-400">{tool.copy}</p><div className="mt-5 flex items-center gap-1 text-xs font-medium text-emerald-300">レビューを読む <ChevronRight size={14} /></div></a>)}</div></section>

      <section id="consulting" className="relative z-10 px-5 pb-20 lg:px-8 lg:pb-28"><div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-blue-300/20 bg-gradient-to-br from-[#102b4d] via-[#0d2036] to-[#0b1727] p-7 sm:p-10 lg:p-14"><div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"><div><p className="mb-4 text-xs font-semibold tracking-[0.2em] text-blue-300">FOR BUSINESS</p><h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">社内へのChatGPT導入、<br />最初の一歩を一緒に。</h2><p className="mt-5 max-w-lg leading-7 text-slate-300">ツールを導入するだけでは、成果は生まれません。現場に定着する仕組みづくりまで、伴走します。</p><a id="contact" href="mailto:akito.kameyama@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3.5 text-sm font-semibold text-[#0b2038] transition hover:bg-blue-50">導入相談を予約する <ArrowUpRight size={17} /></a></div><div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">{[['01','プロンプト構築支援','業務に合わせた型を設計'],['02','AIツール選定','費用対効果から比較・提案'],['03','社内レクチャー','使い続けられる習慣をつくる']].map(([number,title,copy]) => <div key={number} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-4"><span className="text-sm font-semibold text-blue-300">{number}</span><div><div className="text-sm font-medium text-white">{title}</div><div className="mt-1 text-xs text-slate-400">{copy}</div></div></div>)}</div></div></div></section>

      <footer className="relative z-10 border-t border-white/[0.08] px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3"><span className="flex size-7 items-center justify-center rounded-lg bg-blue-500 text-white"><Bot size={15} /></span><span>© 2026 AI WorkLab</span></div><div className="flex items-center gap-6"><a href="/AI/contact/" className="hover:text-white">お問い合わせ</a><a href="/AI/privacy/" className="hover:text-white">プライバシーポリシー</a><a href="https://x.com" aria-label="X (旧Twitter)" className="hover:text-white"><span className="sr-only">X (旧Twitter)</span><span className="text-base font-semibold">𝕏</span></a><a href="https://github.com" aria-label="GitHub" className="text-xs font-semibold hover:text-white">GitHub</a></div></div></footer>
    </main>
  )
}
