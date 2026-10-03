import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Bot, Check, Clock3, FileText, Mic2, Sparkles } from 'lucide-react'

const affiliateUrl = 'https://px.a8.net/svt/ejp?a8mat=4BE7SV+8P60Z6+5J4W+609HT'
const bannerUrl = 'https://www21.a8.net/svt/bgt?aid=261003775526&wid=001&eno=01&mid=s00000025808001009000&mc=1'
const trackingPixel = 'https://www14.a8.net/0.gif?a8mat=4BE7SV+8P60Z6+5J4W+609HT'

export default function PlaudArticlePage() {
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
        <div className="flex flex-wrap items-center gap-3 text-xs"><span className="rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-3 py-1.5 font-medium text-blue-300">AIツール活用</span><span className="text-slate-500">2026.10.03</span><span className="flex items-center gap-1 text-slate-500"><Clock3 size={13} />8 min read</span></div>
        <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">PLAUDとは？会議・商談の録音から文字起こし・要約まで効率化するAIボイスレコーダー</h1>
        <p className="mt-7 text-lg leading-8 text-slate-400">会議の録音を聞き直し、文字に起こして、決定事項をまとめる。そんな記録業務をAIで効率化したい人向けに、PLAUDの特徴と仕事での活用イメージを整理します。</p>

        <div className="my-12 rounded-2xl border border-blue-300/15 bg-gradient-to-br from-blue-500/10 to-transparent p-6 sm:p-8"><p className="text-sm font-medium text-blue-300">PLAUDでできること</p><ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">{['会議・商談などの音声を記録する','録音内容を文字起こしして確認する','AIで要約し、重要な情報を整理する','録音内容についてAIに質問して情報を探す'].map((item) => <li key={item} className="flex gap-3"><Check className="mt-1 shrink-0 text-emerald-400" size={16} />{item}</li>)}</ul></div>

        <div className="space-y-14 leading-8 text-slate-300">
          <section><h2 className="text-2xl font-semibold text-white">PLAUDとは？</h2><p className="mt-5">PLAUDは、録音した音声をAIで文字起こし・要約・整理することを目的としたAIボイスレコーダーのブランドです。通話や対面で使えるモデル、身につけて使うモデルなど複数の製品が展開されています。</p><p className="mt-5">単に音声を保存するだけでなく、録音後の「聞き直す・文章にする・重要事項を探す」といった作業までAIで効率化できるのがポイントです。</p></section>

          <section><h2 className="text-2xl font-semibold text-white">会議後の作業をどこまで減らせる？</h2><p className="mt-5">会議後には、録音確認、文字起こし、要点整理、タスク抽出、共有文の作成など多くの作業が発生します。AIを使えば、文字起こしされた内容から「決定事項」「担当者」「期限」「次回確認事項」などを整理する流れを作れます。</p><div className="mt-7 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><Mic2 className="text-blue-300" size={22} /><p className="mt-5 text-xs text-slate-500">STEP 01</p><h3 className="mt-1 font-medium text-white">録音</h3><p className="mt-3 text-sm leading-6 text-slate-400">会議・商談・取材などを記録。</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><FileText className="text-emerald-300" size={22} /><p className="mt-5 text-xs text-slate-500">STEP 02</p><h3 className="mt-1 font-medium text-white">文字起こし</h3><p className="mt-3 text-sm leading-6 text-slate-400">会話を検索・確認できるテキストへ。</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><Sparkles className="text-violet-300" size={22} /><p className="mt-5 text-xs text-slate-500">STEP 03</p><h3 className="mt-1 font-medium text-white">AIで整理</h3><p className="mt-3 text-sm leading-6 text-slate-400">要約や重要事項の整理につなげる。</p></div></div></section>

          <section><h2 className="text-2xl font-semibold text-white">PLAUDの主な特徴</h2><p className="mt-5">公式情報では、複数の主要AIモデルへの対応、112言語の文字起こし、録音内容について質問できる「Ask Plaud」、用途に応じた要約機能などが案内されています。機能や対応範囲は更新される可能性があるため、購入前には公式サイトの最新情報を確認してください。</p><div className="mt-6 rounded-2xl border border-white/10 bg-[#0d1b2d] p-6"><ul className="space-y-3 text-sm leading-7 text-slate-300"><li>・録音から文字起こし、要約、情報整理までつなげられる</li><li>・複数言語の文字起こしに対応</li><li>・録音内容をAIに質問して探せる</li><li>・目的に応じた要約フォーマットを利用できる</li><li>・複数の製品タイプから用途に合わせて選べる</li></ul></div></section>

          <section><h2 className="text-2xl font-semibold text-white">どんな人に向いている？</h2><p className="mt-5">会議や商談など「あとから内容を確認したい会話」が多い人ほど、活用しやすいタイプの製品です。</p><ul className="mt-5 space-y-3"><li>・会議の多いビジネスパーソン</li><li>・顧客との商談が多い営業担当者</li><li>・PM・PMO・エンジニア</li><li>・取材やインタビューを行う人</li><li>・講義や学習内容を記録したい人</li></ul></section>

          <section className="rounded-3xl border border-blue-300/20 bg-gradient-to-br from-[#102b4d] to-[#0b1727] p-7 sm:p-9"><p className="text-xs font-semibold tracking-[0.18em] text-blue-300">PLAUD</p><h2 className="mt-3 text-2xl font-semibold text-white">PLAUDの製品ラインナップ・最新価格を確認する</h2><p className="mt-4 text-slate-300">製品ごとに形状や用途が異なるため、購入前に公式サイトで機能・料金・利用条件を比較するのがおすすめです。</p><a href={affiliateUrl} rel="nofollow sponsored" target="_blank" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400">PLAUD公式サイトを見る <ArrowUpRight size={16} /></a><div className="mt-6"><a href={affiliateUrl} rel="nofollow sponsored" target="_blank"><img width="120" height="60" alt="PLAUD" src={bannerUrl} /></a></div><img src={trackingPixel} width="1" height="1" alt="" className="h-px w-px" /><p className="mt-4 text-xs leading-5 text-slate-500">※当サイトはアフィリエイト広告を利用しています。</p></section>

          <section><h2 className="text-2xl font-semibold text-white">利用前に確認しておきたいこと</h2><p className="mt-5">録音やAI処理を伴うサービスでは、社外秘情報や個人情報の取り扱いに注意が必要です。会社のセキュリティポリシー、利用サービスのデータ取り扱い方針、会議参加者への録音に関するルールなどを確認してから利用しましょう。</p><p className="mt-5">また、文字起こしやAI要約には誤りが含まれる可能性があります。重要な決定事項や契約に関わる内容は、必ず元の発言と照合して確認してください。</p></section>

          <section><h2 className="text-2xl font-semibold text-white">まとめ</h2><p className="mt-5">PLAUDのようなAIボイスレコーダーは、「録音する」だけで終わらず、その後の文字起こし・要約・情報整理までを短縮できるのが魅力です。会議後の記録作業に時間を取られているなら、現在の作業フローと比較しながら導入を検討するとよいでしょう。</p></section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8"><p className="text-xs font-semibold tracking-[0.18em] text-emerald-300">FOR BUSINESS</p><h2 className="mt-3 text-2xl font-semibold text-white">AIを業務フロー全体に組み込みたい方へ</h2><p className="mt-4 text-slate-300">録音・議事録だけでなく、その後のタスク整理や社内共有まで含めた生成AI活用についてもご相談いただけます。</p><Link href="/contact/" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200">お問い合わせはこちら <ArrowUpRight size={15} /></Link></section>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8"><Link href="/" className="inline-flex items-center gap-2 text-sm text-blue-300 transition hover:text-blue-200"><ArrowLeft size={15} />AI WorkLabのトップへ戻る</Link></div>
      </article>
    </main>
  )
}
