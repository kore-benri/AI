import Link from 'next/link'
import {
  ArrowLeft,
  Bot,
  Check,
  Clock3,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react'

export default function SmallBusinessAiStartPage() {
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
          <span className="rounded-full border border-violet-400/20 bg-violet-400/[0.08] px-3 py-1.5 font-medium text-violet-300">
            AI活用事例
          </span>

          <span className="text-slate-500">2026.10.03</span>

          <span className="flex items-center gap-1 text-slate-500">
            <Clock3 size={13} />
            9 min read
          </span>
        </div>

        <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          中小企業が生成AIを導入する
          <br className="hidden sm:block" />
          最初の一歩
        </h1>

        <p className="mt-7 text-lg leading-8 text-slate-400">
          「ChatGPTを会社でも使いたい。でも、何から始めればいいのか分からない。」
          そんなときに、いきなり全社導入する必要はありません。
          まずは一つの業務を選び、小さく試して効果を確認するところから始めます。
        </p>

        <div className="my-12 rounded-2xl border border-violet-300/15 bg-gradient-to-br from-violet-500/10 to-transparent p-6 sm:p-8">
          <p className="text-sm font-medium text-violet-300">
            生成AI導入の基本ステップ
          </p>

          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
            <li className="flex gap-3">
              <Check className="mt-1 shrink-0 text-emerald-400" size={16} />
              AIを使う業務を一つだけ選ぶ
            </li>
            <li className="flex gap-3">
              <Check className="mt-1 shrink-0 text-emerald-400" size={16} />
              少人数で試して使い方を固める
            </li>
            <li className="flex gap-3">
              <Check className="mt-1 shrink-0 text-emerald-400" size={16} />
              最低限の利用ルールを決める
            </li>
            <li className="flex gap-3">
              <Check className="mt-1 shrink-0 text-emerald-400" size={16} />
              導入前後の時間や作業量を比較する
            </li>
          </ul>
        </div>

        <div className="space-y-14 leading-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              最初から「全社導入」を目指さない
            </h2>

            <p className="mt-5">
              生成AIの導入というと、全社員にアカウントを用意したり、
              大規模なシステムを構築したりするイメージがあるかもしれません。
            </p>

            <p className="mt-5">
              しかし最初の段階では、もっと小さく始めることができます。
            </p>

            <p className="mt-5">
              例えば「毎週作成している会議議事録」など、
              時間がかかっている一つの作業だけを対象にして、
              ChatGPTなどの生成AIを試します。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              STEP 1：時間がかかっている業務を探す
            </h2>

            <p className="mt-5">
              まず「AIで何ができるか」から考えるのではなく、
              社内で時間がかかっている仕事を探します。
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <Search className="text-blue-300" size={22} />
                <h3 className="mt-4 font-medium text-white">
                  探しやすい業務
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-400">
                  <li>・会議の議事録作成</li>
                  <li>・メール文章の下書き</li>
                  <li>・資料の要約</li>
                  <li>・文章のチェック</li>
                  <li>・アイデアの整理</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <Clock3 className="text-emerald-300" size={22} />
                <h3 className="mt-4 font-medium text-white">
                  判断のポイント
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-400">
                  <li>・繰り返し発生する</li>
                  <li>・文章を扱うことが多い</li>
                  <li>・毎回似た手順で行う</li>
                  <li>・人の確認を最後に入れられる</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              STEP 2：一つの業務だけで試す
            </h2>

            <p className="mt-5">
              対象業務を決めたら、まずは一つの業務で生成AIを試します。
            </p>

            <p className="mt-5">
              例えば議事録作成なら、これまで30分かかっていた整理作業を、
              AIを使うことでどこまで短縮できるか確認します。
            </p>

            <div className="mt-7 rounded-2xl border border-white/10 bg-[#0d1b2d] p-6">
              <p className="text-sm font-medium text-blue-300">
                例：議事録作成
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs text-slate-500">BEFORE</p>
                  <p className="mt-1 text-sm text-slate-300">
                    会議内容を読み返す
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">AI</p>
                  <p className="mt-1 text-sm text-slate-300">
                    要約・タスクを抽出
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">HUMAN</p>
                  <p className="mt-1 text-sm text-slate-300">
                    内容を確認して完成
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-5">
              ポイントは、AIにすべてを任せるのではなく、
              最後に人が確認する工程を残しておくことです。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              STEP 3：使い方をテンプレート化する
            </h2>

            <p className="mt-5">
              同じ業務で何度か試してうまくいったら、
              プロンプトや作業手順をテンプレートとして残します。
            </p>

            <p className="mt-5">
              「詳しい人だけが使える状態」にせず、
              他のメンバーでも同じ手順を再現できる形にしておくことが重要です。
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <p className="text-sm font-medium text-white">
                テンプレートに残しておきたいもの
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>・使用するAIツール</li>
                <li>・入力する情報</li>
                <li>・コピペして使えるプロンプト</li>
                <li>・期待する出力形式</li>
                <li>・人が確認するポイント</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              STEP 4：最低限のルールを決める
            </h2>

            <div className="mt-6 flex gap-4 rounded-2xl border border-amber-300/15 bg-amber-300/[0.05] p-6">
              <ShieldCheck
                className="mt-1 shrink-0 text-amber-300"
                size={22}
              />

              <div>
                <p className="font-medium text-amber-200">
                  特に重要なのが情報の取り扱い
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  顧客情報、個人情報、契約情報、社外秘の資料などを
                  生成AIへ入力してよいかどうかは、
                  利用するサービスの規約や自社のルールを確認する必要があります。
                </p>
              </div>
            </div>

            <p className="mt-6">
              最初から複雑なルールを作る必要はありませんが、
              少なくとも「入力してはいけない情報」と
              「出力結果をそのまま利用しない」という基本ルールは
              チーム内で共有しておくと安心です。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              STEP 5：効果を数字で確認する
            </h2>

            <p className="mt-5">
              AIを導入したら、「なんとなく便利になった」で終わらせず、
              導入前と導入後を簡単に比較します。
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <Clock3 className="text-blue-300" size={20} />
                <p className="mt-4 text-sm font-medium text-white">
                  作業時間
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  何分短縮できたか
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <Users className="text-violet-300" size={20} />
                <p className="mt-4 text-sm font-medium text-white">
                  利用人数
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  誰でも再現できるか
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <TrendingUp className="text-emerald-300" size={20} />
                <p className="mt-4 text-sm font-medium text-white">
                  作業量
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  同じ時間で何件処理できるか
                </p>
              </div>
            </div>

            <p className="mt-6">
              小さな改善でも、毎週・毎月発生する業務なら
              年間では大きな時間削減につながる可能性があります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              うまくいったら、次の業務へ広げる
            </h2>

            <p className="mt-5">
              一つの業務で効果が確認できたら、
              同じ考え方で別の業務にも広げていきます。
            </p>

            <p className="mt-5">
              「AIを導入する」という大きなプロジェクトとして考えるより、
              小さな業務改善を一つずつ増やしていく方が、
              現場にも定着させやすくなります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              最初の30日間なら、これくらいでいい
            </h2>

            <div className="mt-7 overflow-hidden rounded-2xl border border-white/10">
              <div className="grid grid-cols-[100px_1fr] border-b border-white/10 p-5">
                <span className="text-sm font-medium text-blue-300">
                  1週目
                </span>
                <span className="text-sm text-slate-400">
                  時間がかかっている業務を1つ選ぶ
                </span>
              </div>

              <div className="grid grid-cols-[100px_1fr] border-b border-white/10 p-5">
                <span className="text-sm font-medium text-blue-300">
                  2週目
                </span>
                <span className="text-sm text-slate-400">
                  少人数で生成AIを使って試す
                </span>
              </div>

              <div className="grid grid-cols-[100px_1fr] border-b border-white/10 p-5">
                <span className="text-sm font-medium text-blue-300">
                  3週目
                </span>
                <span className="text-sm text-slate-400">
                  プロンプトと利用ルールを整理する
                </span>
              </div>

              <div className="grid grid-cols-[100px_1fr] p-5">
                <span className="text-sm font-medium text-blue-300">
                  4週目
                </span>
                <span className="text-sm text-slate-400">
                  時間削減効果を確認して次の対象を決める
                </span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              まとめ
            </h2>

            <p className="mt-5">
              生成AIの導入で大切なのは、
              最初から大きな仕組みを作ることではありません。
            </p>

            <p className="mt-5">
              「毎週30分かかっている作業を15分にできないか」のような、
              身近で具体的な課題から始める方が効果を確認しやすくなります。
            </p>

            <p className="mt-5">
              一つの業務を選び、小さく試し、効果を測る。
              うまくいったものだけを次の業務へ広げる。
              まずはこのサイクルを一度回してみるところから始めてみましょう。
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
