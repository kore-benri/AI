import Link from 'next/link'
import { ArrowLeft, Bot, Check, Copy, Clock3 } from 'lucide-react'

export default function MeetingMinutesPromptPage() {
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
          <span className="rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-3 py-1.5 font-medium text-blue-300">
            Prompt Engineering
          </span>

          <span className="text-slate-500">2026.10.03</span>

          <span className="flex items-center gap-1 text-slate-500">
            <Clock3 size={13} />
            8 min read
          </span>
        </div>

        <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          【コピペで使える】会議の議事録から
          <br className="hidden sm:block" />
          タスク・期限を自動抽出するプロンプト
        </h1>

        <p className="mt-7 text-lg leading-8 text-slate-400">
          会議は終わった。でも、「誰が・何を・いつまでにやるのか」を整理するのに
          また時間がかかる。そんな会議後の作業をChatGPTに任せるための、
          そのまま使える実務プロンプトを紹介します。
        </p>

        <div className="my-12 rounded-2xl border border-blue-300/15 bg-gradient-to-br from-blue-500/15 to-transparent p-6 sm:p-8">
          <p className="text-sm font-medium text-blue-300">
            この記事でできるようになること
          </p>

          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
            <li className="flex gap-3">
              <Check className="mt-1 shrink-0 text-emerald-400" size={16} />
              議事録から担当者とタスクを抽出する
            </li>
            <li className="flex gap-3">
              <Check className="mt-1 shrink-0 text-emerald-400" size={16} />
              明記されている期限を一覧化する
            </li>
            <li className="flex gap-3">
              <Check className="mt-1 shrink-0 text-emerald-400" size={16} />
              決定事項と未決事項を分けて整理する
            </li>
            <li className="flex gap-3">
              <Check className="mt-1 shrink-0 text-emerald-400" size={16} />
              次回会議で確認すべき内容を洗い出す
            </li>
          </ul>
        </div>

        <div className="space-y-14 leading-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              会議後の「整理」に時間を使わない
            </h2>

            <p className="mt-5">
              会議の議事録があっても、それだけでは次のアクションが分かりにくいことがあります。
            </p>

            <p className="mt-5">
              特に参加者が多い会議では、決定事項、担当者、期限、確認事項が会話の中に
              バラバラに登場します。
            </p>

            <p className="mt-5">
              そこで、議事録そのものをChatGPTに渡して、
              「実際に動くために必要な情報」へ整理してもらいます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              そのまま使えるプロンプト
            </h2>

            <p className="mt-5">
              以下をコピーして、最後の「議事録」の部分に会議内容を貼り付けます。
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1b2d]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <span className="text-xs font-medium text-slate-500">
                  PROMPT
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Copy size={13} />
                  COPY
                </span>
              </div>

              <pre className="overflow-x-auto whitespace-pre-wrap p-5 text-sm leading-7 text-slate-300">
{`以下の会議議事録を、実務でそのまま使える形に整理してください。

次の5項目に分けて出力してください。

1. 決定事項
2. タスク一覧
3. 各タスクの担当者
4. 期限
5. 次回確認事項・未決事項

タスク一覧は、以下の形式の表にしてください。

| タスク | 担当者 | 期限 | 補足 |
|---|---|---|---|

ルール：
・議事録に書かれていない内容を推測して追加しない
・担当者が不明な場合は「未定」と記載する
・期限が明記されていない場合は「未定」と記載する
・曖昧な決定事項は「要確認」とする
・重要度の高い未決事項があれば最後にまとめる

【議事録】
ここに会議の議事録を貼り付ける`}
              </pre>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              実際に入力してみる
            </h2>

            <p className="mt-5">
              例えば、次のような簡単な議事録があったとします。
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-sm leading-7 text-slate-400">
              <p>
                新サービスの公開時期について打ち合わせ。
                LPのデザインは田中さんが修正する。
                来週金曜までには完成させたい。
                鈴木さんは料金表を確認する。
                料金についてはまだ最終決定していない。
                次回会議で料金と公開日を確定する。
              </p>
            </div>

            <p className="mt-6">
              人が読めば内容は分かりますが、このままでは
              「結局、誰が何をするのか」が少し見づらい状態です。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              ChatGPTに整理させるとこうなる
            </h2>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-white/[0.05] text-slate-300">
                  <tr>
                    <th className="px-5 py-4 font-medium">タスク</th>
                    <th className="px-5 py-4 font-medium">担当者</th>
                    <th className="px-5 py-4 font-medium">期限</th>
                    <th className="px-5 py-4 font-medium">補足</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/10 text-slate-400">
                  <tr>
                    <td className="px-5 py-4">LPデザイン修正</td>
                    <td className="px-5 py-4">田中さん</td>
                    <td className="px-5 py-4">来週金曜</td>
                    <td className="px-5 py-4">完成予定</td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4">料金表の確認</td>
                    <td className="px-5 py-4">鈴木さん</td>
                    <td className="px-5 py-4">未定</td>
                    <td className="px-5 py-4">料金は未確定</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-xl border border-amber-300/15 bg-amber-300/[0.05] p-5">
              <p className="text-sm font-medium text-amber-200">
                次回確認事項
              </p>
              <p className="mt-2 text-sm text-slate-400">
                料金の最終決定と、サービスの正式な公開日を確定する。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              ポイントは「推測させない」こと
            </h2>

            <p className="mt-5">
              実務で使う場合に特に重要なのが、
              AIに不足している情報を勝手に補完させないことです。
            </p>

            <p className="mt-5">
              例えば期限が書かれていないのに、それらしい日付をAIが設定してしまうと、
              タスク管理ではかえって危険です。
            </p>

            <p className="mt-5">
              そのため、このプロンプトでは「不明なら未定」「曖昧なら要確認」と
              明示するよう指定しています。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              さらに実務向けにするなら
            </h2>

            <p className="mt-5">
              チームの運用に合わせて、出力項目を追加するのもおすすめです。
            </p>

            <ul className="mt-5 space-y-3">
              <li>・優先度（高・中・低）</li>
              <li>・課題 / リスク</li>
              <li>・確認先</li>
              <li>・関連プロジェクト</li>
              <li>・次回会議までに必要なアクション</li>
            </ul>

            <p className="mt-5">
              毎回同じフォーマットで出力するようにしておくと、
              議事録からタスク管理ツールへ転記するときも扱いやすくなります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              まとめ
            </h2>

            <p className="mt-5">
              ChatGPTを会議で活用するときは、議事録そのものを書かせるだけでなく、
              会議後の「次に何をするか」の整理まで任せると効果を実感しやすくなります。
            </p>

            <p className="mt-5">
              まずは普段使っている議事録を今回のプロンプトに貼り付けて、
              タスク・担当者・期限の整理から試してみてください。
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
