import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Bot, Check, Clock3, FileText, Headphones, Sparkles } from 'lucide-react'

const affiliateUrl = 'https://px.a8.net/svt/ejp?a8mat=4BE7SV+70FT9U+5QLS+HV7V6'
const trackingPixel = 'https://www15.a8.net/0.gif?a8mat=4BE7SV+70FT9U+5QLS+HV7V6'

export default function ZenchordArticlePage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-slate-100">
      <header className="border-b border-white/[0.08] bg-[#07111f]/80">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="AI WorkLab ホーム">
            <span className="flex size-9 items-center justify-center rounded-xl bg-blue-500 text-white"><Bot size={19} /></span>
            <span className="text-lg font-semibold tracking-tight">AI <span className="text-blue-400">WorkLab</span></span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"><ArrowLeft size={15} />ホームへ戻る</Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1.5 font-medium text-emerald-300">AIツール活用</span>
          <span className="text-slate-500">2026.10.03</span>
          <span className="flex items-center gap-1 text-slate-500"><Clock3 size={13} />7 min read</span>
        </div>

        <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">AI議事録イヤホン「ZENCHORD 1」とは？<br className="hidden sm:block" />会議の文字起こし・要約を効率化する使い方</h1>
        <p className="mt-7 text-lg leading-8 text-slate-400">会議後の録音確認、文字起こし、決定事項やToDoの整理。こうした作業をAIで効率化する考え方と、AI議事録イヤホン「ZENCHORD 1」を仕事で活用する流れを紹介します。</p>

        <div className="my-12 rounded-2xl border border-emerald-300/15 bg-gradient-to-br from-emerald-500/10 to-transparent p-6 sm:p-8">
          <p className="text-sm font-medium text-emerald-300">こんな人向け</p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
            {['会議後の議事録作成に時間を取られている','会議中はメモより会話に集中したい','文字起こしから決定事項・ToDoまで整理したい'].map((item) => <li key={item} className="flex gap-3"><Check className="mt-1 shrink-0 text-emerald-400" size={16} />{item}</li>)}
          </ul>
        </div>

        <div className="space-y-14 leading-8 text-slate-300">
          <section><h2 className="text-2xl font-semibold text-white">ZENCHORD 1とは？</h2><p className="mt-5">ZENCHORD 1は、イヤホンとして使いながらAIを活用した議事録作成につなげられる製品です。会議や打ち合わせの内容を記録し、その後の文字起こしや情報整理を効率化したい場面で活用できます。</p><p className="mt-5">従来の議事録では、メモ、録音の聞き直し、文章化、重要事項の整理といった作業が発生します。AI議事録を取り入れる狙いは、この一連の作業を減らし、人間が内容の確認や判断に集中できる状態を作ることです。</p></section>

          <section><h2 className="text-2xl font-semibold text-white">AI議事録で重要なのは「文字起こしの後」</h2><p className="mt-5">音声をテキストにできるだけでも便利ですが、長い会議では文字起こしを全部読み返すだけで時間がかかります。そこで生成AIを使い、会議内容を仕事で使える情報に変換します。</p><div className="mt-6 rounded-2xl border border-white/10 bg-[#0d1b2d] p-6"><p className="text-sm font-medium text-blue-300">AIで整理できる例</p><ul className="mt-4 space-y-2 text-sm text-slate-400"><li>・会議の概要</li><li>・決定事項</li><li>・未決事項</li><li>・担当者ごとのToDo</li><li>・次回までに確認すること</li></ul></div></section>

          <section><h2 className="text-2xl font-semibold text-white">ZENCHORD 1 × ChatGPTで議事録を整理する</h2><p className="mt-5">文字起こしした会議内容をChatGPTなどの生成AIに渡し、出力形式を指定すると、議事録を一定のフォーマットに整理しやすくなります。</p><div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1b2d]"><div className="border-b border-white/10 px-5 py-3"><span className="text-xs font-medium text-slate-500">PROMPT</span></div><pre className="overflow-x-auto whitespace-pre-wrap p-5 text-sm leading-7 text-slate-300">{`以下は会議の文字起こしです。\n内容を整理し、次の形式で議事録を作成してください。\n\n1. 会議の概要\n2. 決定事項\n3. 未決事項\n4. 担当者ごとのToDo\n5. 次回までに確認すること\n\n発言内容から判断できないことは推測せず、\n「要確認」としてください。\n\n【文字起こし】\nここにテキストを貼り付ける`}</pre></div></section>

          <section><h2 className="text-2xl font-semibold text-white">会議から共有までの流れ</h2><div className="mt-7 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><Headphones className="text-blue-300" size={22} /><p className="mt-5 text-xs text-slate-500">STEP 01</p><h3 className="mt-1 font-medium text-white">会話を記録</h3><p className="mt-3 text-sm leading-6 text-slate-400">会議・打ち合わせの内容を記録します。</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><FileText className="text-emerald-300" size={22} /><p className="mt-5 text-xs text-slate-500">STEP 02</p><h3 className="mt-1 font-medium text-white">文字起こし</h3><p className="mt-3 text-sm leading-6 text-slate-400">会話をテキストとして確認できる状態にします。</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><Sparkles className="text-violet-300" size={22} /><p className="mt-5 text-xs text-slate-500">STEP 03</p><h3 className="mt-1 font-medium text-white">AIで整理</h3><p className="mt-3 text-sm leading-6 text-slate-400">要約・決定事項・ToDoなどを整理します。</p></div></div></section>

          <section><h2 className="text-2xl font-semibold text-white">ZENCHORD 1が向いていそうな人</h2><p className="mt-5">日常的に会議や顧客との打ち合わせが多く、会議後の記録作業を減らしたい人と相性がよいでしょう。</p><ul className="mt-5 space-y-3"><li>・営業担当者</li><li>・PM・PMO</li><li>・エンジニア</li><li>・コンサルタント</li><li>・フリーランス</li><li>・経営者・管理職</li></ul></section>

          <section className="rounded-3xl border border-blue-300/20 bg-gradient-to-br from-[#102b4d] to-[#0b1727] p-7 sm:p-9"><p className="text-xs font-semibold tracking-[0.18em] text-blue-300">ZENCHORD 1</p><h2 className="mt-3 text-2xl font-semibold text-white">AI議事録イヤホンの詳細をチェック</h2><p className="mt-4 text-slate-300">会議や打ち合わせが多く、議事録作成に使っている時間を減らしたい方は、製品の機能・利用条件・最新情報を公式ページで確認してみてください。</p><a href={affiliateUrl} rel="nofollow sponsored" target="_blank" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400">ZENCHORD 1の詳細を見る <ArrowUpRight size={16} /></a><img src={trackingPixel} width="1" height="1" alt="" className="h-px w-px" /><p className="mt-4 text-xs leading-5 text-slate-500">※このページにはアフィリエイト広告が含まれています。</p></section>

          <section><h2 className="text-2xl font-semibold text-white">AIを使っても最終確認は必要</h2><p className="mt-5">AIによる文字起こしや要約では、固有名詞・専門用語の認識ミスや、発言のニュアンスが変わる可能性があります。「AIで下書きを作る → 人間が確認する → 正式な議事録として共有する」という使い方が現実的です。</p><p className="mt-5">また、顧客情報・個人情報・機密情報を扱う場合は、利用サービスのデータ取り扱い方針や自社のセキュリティルール、録音に関する社内外のルールを確認したうえで利用しましょう。</p></section>

          <section><h2 className="text-2xl font-semibold text-white">まとめ：記録の先まで自動化する</h2><p className="mt-5">AI議事録のメリットは、会話を文字にするだけではありません。文字起こしされたデータを生成AIと組み合わせることで、「議事録作成 → ToDo抽出 → 社内共有」といった後工程まで効率化できます。</p></section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8"><p className="text-xs font-semibold tracking-[0.18em] text-emerald-300">FOR BUSINESS</p><h2 className="mt-3 text-2xl font-semibold text-white">法人・チームでAI活用を検討している方へ</h2><p className="mt-4 text-slate-300">社内業務への生成AI導入、議事録や定型業務の効率化など、自社業務に合ったAI活用についてもご相談いただけます。</p><Link href="/contact/" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200">お問い合わせはこちら <ArrowUpRight size={15} /></Link></section>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8"><Link href="/" className="inline-flex items-center gap-2 text-sm text-blue-300 transition hover:text-blue-200"><ArrowLeft size={15} />AI WorkLabのトップへ戻る</Link></div>
      </article>
    </main>
  )
}
