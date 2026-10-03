import Link from 'next/link'
import { ArrowLeft, Bot } from 'lucide-react'

export default function ContactPage() {
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

      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-400">
          CONTACT
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-white">
          お問い合わせ
        </h1>

        <p className="mt-6 max-w-2xl leading-8 text-slate-400">
          AI WorkLabへのお問い合わせ、記事に関するご意見、
          掲載内容に関するご連絡などは、下記フォームよりお願いいたします。
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScQJhEnObn8wu0XeLiTzAH75zh0MY4NLhmg3gIAFwKxBPL7jA/viewform?embedded=true"
            width="100%"
            height="860"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="AI WorkLab お問い合わせフォーム"
            className="block w-full"
          >
            読み込んでいます…
          </iframe>
        </div>

        <p className="mt-6 text-sm leading-7 text-slate-500">
          ご入力いただいた情報は、お問い合わせへの対応のために利用します。
          詳細は
          <Link
            href="/privacy/"
            className="mx-1 text-blue-300 transition hover:text-blue-200"
          >
            プライバシーポリシー
          </Link>
          をご確認ください。
        </p>

        <div className="mt-12 border-t border-white/10 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={15} />
            トップページへ戻る
          </Link>
        </div>
      </section>
    </main>
  )
}
