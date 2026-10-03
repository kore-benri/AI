import Link from 'next/link'

export default function PrivacyPage() {
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

      <article className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-blue-400">
          PRIVACY POLICY
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-white">
          プライバシーポリシー
        </h1>

        <p className="mt-6 leading-8 text-slate-400">
          AI WorkLab（以下「当サイト」）では、利用者の個人情報を適切に取り扱うとともに、
          安心して当サイトをご利用いただけるよう、以下のとおりプライバシーポリシーを定めます。
        </p>

        <div className="mt-14 space-y-12 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-white">
              個人情報の取り扱いについて
            </h2>
            <p className="mt-4 leading-8">
              当サイトでは、お問い合わせ等の際に、氏名やメールアドレスなどの
              個人情報をご提供いただく場合があります。
              取得した個人情報は、お問い合わせへの回答や必要なご連絡のために利用し、
              これらの目的以外では利用いたしません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              広告・アフィリエイトプログラムについて
            </h2>
            <p className="mt-4 leading-8">
              当サイトでは、第三者配信の広告サービスおよびアフィリエイトプログラムを
              利用する場合があります。
            </p>
            <p className="mt-4 leading-8">
              当サイト内のリンクを経由して商品やサービスが購入・申込みされた場合、
              当サイトが紹介料を受け取ることがあります。
              なお、広告掲載の有無にかかわらず、記事やレビューは当サイトの方針に基づいて
              作成しています。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              アクセス解析ツールについて
            </h2>
            <p className="mt-4 leading-8">
              当サイトでは、サイトの利用状況を把握し、コンテンツの改善に役立てるため、
              アクセス解析ツールを利用する場合があります。
            </p>
            <p className="mt-4 leading-8">
              これらのアクセス解析ツールでは、Cookie等を利用してアクセス情報を収集する
              場合があります。収集される情報は、個人を直接特定することを目的としたものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              Cookieについて
            </h2>
            <p className="mt-4 leading-8">
              当サイトでは、アクセス解析や広告配信等のためにCookieを使用する場合があります。
              Cookieはブラウザの設定により無効にすることができます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              免責事項
            </h2>
            <p className="mt-4 leading-8">
              当サイトでは、掲載する情報について可能な限り正確な内容を提供するよう努めていますが、
              情報の正確性・完全性・最新性を保証するものではありません。
            </p>
            <p className="mt-4 leading-8">
              当サイトに掲載された情報を利用したことによって生じた損害等について、
              当サイトでは責任を負いかねますのでご了承ください。
            </p>
            <p className="mt-4 leading-8">
              商品・サービスの価格、仕様、提供条件等は変更される場合があります。
              ご利用・ご購入の際は、各サービスの公式サイト等で最新情報をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              著作権について
            </h2>
            <p className="mt-4 leading-8">
              当サイトに掲載している文章、画像その他のコンテンツについて、
              著作権法で認められている範囲を超えて無断で転載・使用することを禁止します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              プライバシーポリシーの変更
            </h2>
            <p className="mt-4 leading-8">
              本ポリシーの内容は、法令やサービス内容等の変更に応じて、
              必要に応じて見直し・変更することがあります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              お問い合わせ
            </h2>
            <p className="mt-4 leading-8">
              当サイトのプライバシーポリシーに関するお問い合わせは、
              お問い合わせページよりお願いいたします。
            </p>

            <Link
              href="/contact/"
              className="mt-5 inline-block text-blue-300 hover:text-blue-200"
            >
              お問い合わせページへ →
            </Link>
          </section>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-sm text-slate-500">
          制定日：2026年10月3日
        </div>
      </article>
    </main>
  )
}
