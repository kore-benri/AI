import Link from 'next/link'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-slate-100">
      <header className="border-b border-white/[0.08] bg-[#07111f]/80">
        <div className="mx-auto max-w-4xl px-5 py-6 lg:px-8">
          <Link
            href="/"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            ← AI WorkLab
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
          掲載内容に関するご連絡などは、下記メールアドレスよりお願いいたします。
        </p>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <p className="text-sm text-slate-500">お問い合わせ先</p>

          <a
            href="mailto:akito.kameyama@gmail.com"
            className="mt-3 inline-block text-lg font-medium text-blue-300 transition hover:text-blue-200"
          >
            akito.kameyama@gmail.com
          </a>

          <p className="mt-6 text-sm leading-7 text-slate-500">
            内容を確認のうえ、必要に応じて返信いたします。
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            ← トップページへ戻る
          </Link>
        </div>
      </section>
    </main>
  )
}
