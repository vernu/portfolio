import Head from 'next/head'
export const Meta = ({
  title = 'Israel Abebe Kokiso - Full-stack Software Developer',
  description = 'Full-stack developer based in Addis Ababa, Ethiopia',
  summary = null,
  keywords = 'software, developer, engineer, fullstack, react, node, nextjs',
  siteUrl = 'https://israelabebe.com',
  image = '/img.jpg',
}) => {
  return (
    <Head>
      <title key='title'>{title}</title>

      <meta key='charSet' charSet='UTF-8' />
      <meta
        key='viewport'
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      />
      <link key='icon' rel='icon' href='/favicon.ico' />

      <meta key='robots' name='robots' content='follow, index' />
      <meta key='googlebot' name='googlebot' content='index,follow' />
      <meta key='AdsBot-Google' name='AdsBot-Google' content='index,follow' />

      <meta key='description' name='description' content={description} />
      <meta key='keywords' name='keywords' content={keywords} />

      <link key='canonical' rel='canonical' href={siteUrl} />

      <meta key='og:type' property='og:type' content='website' />
      <meta
        key='og:description'
        property='og:description'
        content={description}
      />
      <meta key='og:title' property='og:title' content={title} />
      <meta key='og:image' property='og:image' content={image} />
      <meta key='og:site_name' property='og:site_name' content={siteUrl} />
      <meta key='og:type' property='og:type' content='website' />
      <meta key='og:url' property='og:url' content={siteUrl} />

      <meta key='application-name' name='application-name' content={title} />
      <meta
        key='apple-mobile-web-app-title'
        name='apple-mobile-web-app-title'
        content={title}
      />
      <meta
        key='summary'
        name='summary'
        content={summary ? summary : description}
      />
    </Head>
  )
}
