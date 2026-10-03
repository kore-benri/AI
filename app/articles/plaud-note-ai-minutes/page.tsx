import Link from 'next/link'
import {
  ArrowLeft,
  Bot,
  Check,
  Clock3,
  FileText,
  Mic,
  Sparkles,
} from 'lucide-react'

export default function PlaudNoteArticlePage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-slate-100">
      <header className="border-b border-white/[0.08] bg-[#07111f]/80">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-5 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="AI WorkLab ホーム"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-blue-500 text-white">
              <Bot size={19} />
            </span>
            <span className="text-lg font-semibold tracking-tight">
              AI <span className="text-blue-400">WorkLab</span>
            </span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={15} />
            ホームへ戻る
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1.5 font-medium text-emerald-300">
            AIツール活用
          </span>

          <span className="text-slate-500">2026.10.03</span>

          <span className="flex items-center gap-1 text-slate-500">
            <Clock3 size={13} />
            7 min read
          </span>
        </div>

        <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          PLAUD NOTE × ChatGPTで
          <br className="hidden sm:block" />
          議事録作成をラクにする方法
        </h1>

        <p className="mt-7 text-lg leading-8 text-slate-400">
          会議の録音、文字起こし、要点整理、タスク抽出。
          それぞれを手作業で行うと意外と時間がかかります。
          PLAUD NOTEのようなAIボイスレコーダーと生成AIを組み合わせて、
          会議後の作業を効率化する流れを整理します。
        </p>

        <div className="my-12 rounded-2xl border border-emerald-300/15 bg-gradient-to-br from-emerald-500/10 to-transparent p-6 sm:p-8">
          <p className="text-sm font-medium text-emerald-300">
            こんな人向け
          </p>

          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
            <li className="flex gap-3">
              <Check className="mt-1 shrink-0 text-emerald-400" size={16} />
              会議後の議事録作成に時間がかかっている
            </li>
            <li className="flex gap-3">
              <Check className="mt-1 shrink-0 text-emerald-400" size={16} />
              会話の内容をあとから検索・確認したい
            </li>
            <li className="flex gap-3">
              <Check className="mt-1 shrink-0 text-emerald-400" size={16} />
              議事録からタスクまで整理したい
            </li>
          </ul>
        </div>

        <div className="space-y-14 leading-8 text-slate-300">

          <section>
            <h2 className="text-2xl font-semibold text-white">
              PLAUD NOTEとは？
            </h2>

            <p className="mt-5">
              PLAUD NOTEは、会話や会議などの音声を記録し、
              文字起こしやAIを活用した要約につなげられる
              AIボイスレコーダーです。
            </p>

            <p className="mt-5">
              会議内容をすべて手入力でメモするのではなく、
              まず音声を記録しておき、その内容をあとから整理するという
              使い方ができます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              会議から議事録までの流れ
            </h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <Mic className="text-blue-300" size={22} />
                <p className="mt-5 text-xs text-slate-500">STEP 01</p>
                <h3 className="mt-1 font-medium text-white">
                  会議を記録
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  会話の内容を音声として残します。
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <FileText className="text-emerald-300" size={22} />
                <p className="mt-5 text-xs text-slate-500">STEP 02</p>
                <h3 className="mt-1 font-medium text-white">
                  文字起こし
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  音声をテキスト化して確認しやすくします。
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <Sparkles className="text-violet-300" size={22} />
                <p className="mt-5 text-xs text-slate-500">STEP 03</p>
                <h3 className="mt-1 font-medium text-white">
                  AIで整理
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  要約・タスク・期限などを整理します。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              重要なのは「文字起こしの後」
            </h2>

            <p className="mt-5">
              音声がテキストになっただけでも、聞き直す時間は減らせます。
              ただし、長い会議では文字起こしを最初から最後まで読むだけでも
              時間がかかります。
            </p>

            <p className="mt-5">
              そこで生成AIを使って、文字起こしされた内容を
              「仕事で使える情報」に変換します。
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#0d1b2d] p-6">
              <p className="text-sm font-medium text-blue-300">
                例えばこんな情報に整理
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>・会議の要約</li>
                <li>・決定事項</li>
                <li>・担当者ごとのタスク</li>
                <li>・期限</li>
                <li>・未決事項</li>
                <li>・次回確認すること</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              ChatGPTと組み合わせる
            </h2>

            <p className="mt-5">
              文字起こしされたテキストをChatGPTに渡し、
              必要な形式を指定して整理する方法もあります。
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1b2d]">
              <div className="border-b border-white/10 px-5 py-3">
                <span className="text-xs font-medium text-slate-500">
                  PROMPT
                </span>
              </div>

              <pre className="overflow-x-auto whitespace-pre-wrap p-5 text-sm leading-7 text-slate-300">
{`以下は会議の文字起こしです。

内容を確認し、次の形式で整理してください。

1. 会議の要約
2. 決定事項
3. タスク
4. 担当者
5. 期限
6. 未決事項
7. 次回確認すること

議事録に書かれていない情報は推測せず、
不明な項目は「未定」としてください。

【文字起こし】
ここにテキストを貼り付ける`}
              </pre>
            </div>

            <p className="mt-5">
              形式を固定しておけば、会議ごとに同じフォーマットで
              情報を整理しやすくなります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              PLAUD NOTEが向いていそうな場面
            </h2>

            <p className="mt-5">
              特に、会話の内容そのものをあとから確認する必要がある仕事では、
              音声を記録してテキスト化できる仕組みと相性が良いでしょう。
            </p>

            <ul className="mt-5 space-y-3">
              <li>・社内ミーティング</li>
              <li>・顧客との打ち合わせ</li>
              <li>・インタビュー</li>
              <li>・商談</li>
              <li>・アイデアの音声メモ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              利用時に気をつけたいこと
            </h2>

            <p className="mt-5">
              録音や文字起こしを業務で利用する場合は、
              会議参加者への確認や、社内の情報管理ルールにも注意が必要です。
            </p>

            <p className="mt-5">
              特に顧客情報・個人情報・機密情報を含む会議では、
              利用しているサービスのデータの取り扱いや、
              自社のセキュリティポリシーを確認したうえで利用しましょう。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              まとめ
            </h2>

            <p className="mt-5">
              AIボイスレコーダーのメリットは、単に録音できることではなく、
              会話をあとから扱いやすいデータに変えられるところにあります。
            </p>

            <p className="mt-5">
              さらに生成AIを組み合わせれば、
              「録音 → 文字起こし → 要約 → タスク整理」までを
              一つの業務フローとして考えられます。
            </p>

            <p className="mt-5">
              会議後の議事録作成に時間を取られている場合は、
              こうした仕組みを取り入れられる業務がないか確認してみるとよいでしょう。
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-blue-300 transition hover:text-blue-200"
          >
            <ArrowLeft size={15} />
            AI WorkLabのトップへ戻る
          </Link>
        </div>
      </article>
    </main>
  )
}
