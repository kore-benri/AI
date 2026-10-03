import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Bot, Check, Clock3, ImageIcon, ScanSearch, Sparkles } from 'lucide-react'

const affiliateUrl = 'https://px.a8.net/svt/ejp?a8mat=4BE7SV+B1459U+428G+HVFKY'
const trackingPixel = 'https://www14.a8.net/0.gif?a8mat=4BE7SV+B1459U+428G+HVFKY'

export default function AiartyArticlePage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-slate-100">
      <header className="border-b border-white/[0.08] bg-[#07111f]/80">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="AI WorkLab ホーム"><span className="flex size-9 items-center justify-center rounded-xl bg-blue-500 text-white"><Bot size={19} /></span><span className="text-lg font-semibold tracking-tight">AI <span className="text-blue-400">WorkLab</span></span></Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"><ArrowLeft size={15} />ホームへ戻る</Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
        <p className="mb-6 inline-flex rounded-full border border-amber-300/20 bg-amber-300/[0.08] px-3 py-1.5 text-xs font-medium text-amber-200">広告・PRを含みます</p>
        <div className="flex flex-wrap items-center gap-3 text-xs"><span className="rounded-full border border-violet-400/20 bg-violet-400/[0.08] px-3 py-1.5 font-medium text-violet-300">画像生成・編集AI</span><span className="text-slate-500">2026.10.03</span><span className="flex items-center gap-1 text-slate-500"><Clock3 size={13} />7 min read</span></div>
        <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">Aiarty Image Enhancerとは？ぼやけた画像をAIで高画質化・拡大する方法</h1>
        <p className="mt-7 text-lg leading-8 text-slate-400">ブログやWebサイト、SNSで使いたい画像が「小さい」「ぼやけている」「ノイズが目立つ」。そんなときにAIで画像品質を整えるツールがAiarty Image Enhancerです。できることと活用シーンをわかりやすく整理します。</p>

        <div className="my-12 rounded-2xl border border-violet-300/15 bg-gradient-to-br from-violet-500/10 to-transparent p-6 sm:p-8"><p className="text-sm font-medium text-violet-300">こんな場面で使いやすい</p><ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">{['Webサイトに使いたい画像の解像感が足りない','SNS投稿用の画像をもう少し鮮明にしたい','古い写真やぼやけた画像を見やすくしたい','小さな画像を拡大して使いたい'].map((item) => <li key={item} className="flex gap-3"><Check className="mt-1 shrink-0 text-emerald-400" size={16} />{item}</li>)}</ul></div>

        <div className="space-y-14 leading-8 text-slate-300">
          <section><h2 className="text-2xl font-semibold text-white">Aiarty Image Enhancerとは？</h2><p className="mt-5">Aiarty Image Enhancerは、AIを使って写真・画像・イラストの高画質化や拡大を行う画像編集ツールです。元画像の状態に応じて、ノイズ除去、ぼけの補正、細部の調整、拡大といった処理に活用できます。</p><p className="mt-5">Photoshopなどで細かな補正を一から行うのが難しい場合でも、AI処理を使って画像を整える選択肢になります。</p></section>

          <section><h2 className="text-2xl font-semibold text-white">主な機能</h2><div className="mt-7 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><ScanSearch className="text-blue-300" size={22} /><h3 className="mt-5 font-medium text-white">ノイズ・ぼけの補正</h3><p className="mt-3 text-sm leading-6 text-slate-400">画像に含まれるノイズやぼけをAIで処理し、見やすい状態へ整えます。</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><ImageIcon className="text-emerald-300" size={22} /><h3 className="mt-5 font-medium text-white">画像の拡大</h3><p className="mt-3 text-sm leading-6 text-slate-400">小さい画像を大きくしたい場合に、AIを利用した拡大処理を行えます。</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><Sparkles className="text-violet-300" size={22} /><h3 className="mt-5 font-medium text-white">細部の高画質化</h3><p className="mt-3 text-sm leading-6 text-slate-400">画像のディテールをAIで補正し、WebやSNSで扱いやすい素材づくりに活用できます。</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><Bot className="text-amber-300" size={22} /><h3 className="mt-5 font-medium text-white">AIモデルによる自動処理</h3><p className="mt-3 text-sm leading-6 text-slate-400">専門的な画像編集をすべて手作業で行わず、AIによる補正を利用できます。</p></div></div></section>

          <section><h2 className="text-2xl font-semibold text-white">ブログ・SNS運用との相性</h2><p className="mt-5">WebサイトやSNSでは、内容だけでなく画像の見やすさも重要です。商品画像、記事のアイキャッチ、過去に撮影した写真など、素材自体は使いたいのに画質が気になるケースがあります。</p><p className="mt-5">そうした素材をAIで補正してから使えば、「画像を探し直す」「最初から作り直す」といった作業を減らせる可能性があります。</p><div className="mt-6 rounded-2xl border border-white/10 bg-[#0d1b2d] p-6"><p className="text-sm font-medium text-blue-300">活用例</p><ul className="mt-4 space-y-2 text-sm text-slate-400"><li>・ブログ記事のアイキャッチ画像</li><li>・XやInstagramなどのSNS投稿素材</li><li>・Webサイトの商品・サービス紹介画像</li><li>・プレゼン資料に使う写真</li><li>・過去に撮影した低解像度の写真</li></ul></div></section>

          <section><h2 className="text-2xl font-semibold text-white">高画質化AIを使うときの注意点</h2><p className="mt-5">AIによる高画質化は、元画像に存在しない情報を完全に復元する技術ではありません。補正によって細部の見え方が変わったり、意図しない質感になる可能性もあります。</p><p className="mt-5">人物・商品・証拠資料など、元画像との正確な一致が重要な用途では、処理後の画像を必ず確認しましょう。また、他者が権利を持つ画像を利用する場合は、著作権や利用条件の確認も必要です。</p></section>

          <section className="rounded-3xl border border-violet-300/20 bg-gradient-to-br from-[#24194a] to-[#0b1727] p-7 sm:p-9"><p className="text-xs font-semibold tracking-[0.18em] text-violet-300">AIARTY IMAGE ENHANCER</p><h2 className="mt-3 text-2xl font-semibold text-white">Aiarty Image Enhancerの詳細を確認する</h2><p className="mt-4 text-slate-300">利用できる機能、対応環境、最新の料金プランなどは公式ページで確認してください。</p><a href={affiliateUrl} rel="nofollow sponsored" target="_blank" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-violet-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-400">Aiarty Image Enhancerを見る <ArrowUpRight size={16} /></a><img src={trackingPixel} width="1" height="1" alt="" className="h-px w-px" /><p className="mt-4 text-xs leading-5 text-slate-500">※当サイトはアフィリエイト広告を利用しています。</p></section>

          <section><h2 className="text-2xl font-semibold text-white">まとめ</h2><p className="mt-5">Aiarty Image Enhancerは、画像のノイズやぼけが気になるとき、小さな画像を拡大したいときなどにAIで補正を行えるツールです。特にブログ・Web制作・SNS運用など、日常的に画像素材を扱う人は作業時間を減らせる可能性があります。</p></section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8"><p className="text-xs font-semibold tracking-[0.18em] text-emerald-300">FOR BUSINESS</p><h2 className="mt-3 text-2xl font-semibold text-white">AIをコンテンツ制作に活用したい方へ</h2><p className="mt-4 text-slate-300">画像編集だけでなく、文章作成・情報整理・社内業務など、生成AIを使った業務効率化についてもご相談いただけます。</p><Link href="/contact/" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200">お問い合わせはこちら <ArrowUpRight size={15} /></Link></section>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8"><Link href="/" className="inline-flex items-center gap-2 text-sm text-blue-300 transition hover:text-blue-200"><ArrowLeft size={15} />AI WorkLabのトップへ戻る</Link></div>
      </article>
    </main>
  )
}
