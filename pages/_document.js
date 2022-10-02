import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: `Himanshu Jangid's Personal Portfolio`,
    description:
      'Himanshu Jangid is a Full Stack Developer from India. He is a passionate learner and loves to explore new technologies.',
    image: '/images/me.jpg'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
