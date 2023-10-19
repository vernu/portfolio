import React from 'react'
import Script from 'next/script'
import * as gtag from '@/utils/gtag'

const MS_CLARITY_ID = 'hwit6gzqzk'

export default function Analytics() {
  return (
    <>
      <Script
        id='gtag1'
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id='gtag2'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        id='ms-clarity1'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
              (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${MS_CLARITY_ID}");
              `,
        }}
      />
    </>
  )
}
