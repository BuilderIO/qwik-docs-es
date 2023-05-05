import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';
import { Social } from './social';
import { Vendor } from './vendor';
import { ThemeScript } from './theme-script';

export const RouterHead = component$(() => {
  const { url } = useLocation();
  const head = useDocumentHead();
  const title = head.title ? `${head.title} - Qwik` : `Qwik - Framework reimagined for the edge`;
  const description =
    head.meta.find((m) => m.name === 'description')?.content ||
    `No hydration, auto lazy-loading, edge-optimized, and fun 🎉!`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="apple-mobile-web-app-title" content="Qwik" />
      <meta name="application-name" content="Qwik" />
      <meta name="apple-mobile-web-app-title" content="Qwik" />
      <meta name="theme-color" content="#006ce9" />
      <meta name="color-scheme" content="dark light" />
      <link rel="alternate" hrefLang="en" href="https://qwik.builder.io/"></link>
      <link rel="alternate" hrefLang="x-default" href="https://qwik.builder.io/"></link>

      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />

      {import.meta.env.PROD && (
        <>
          <Social title={title} description={description} href={url.href} />
          <Vendor />
        </>
      )}

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}

      <ThemeScript />
    </>
  );
});
