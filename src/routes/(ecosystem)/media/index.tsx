import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './media.css?inline';

/*************************************************************/
/* This file is used to generate the ecosystem and media pages.
/* Please find the appropriate section in the MEDIA variable
/* to add your content.
/* Thanks!!!
/*************************************************************/

export const MEDIA = mediaObj({
  /*****************************************/
  /* Courses
  /*****************************************/
  courses: [
    youtube('The Net Ninja', 'W0xjcx4mrkE', { playlist: 'PL4cUxeGkcC9gOUlY-uCHurFIpqogsdOnw' }),
    {
      href: 'https://qwikschool.com/',
      imgSrc:
        'https://user-images.githubusercontent.com/1430726/234708569-7a51fe77-3a65-4a28-9617-73ad159aa551.png',
      title: 'QwikSchool.com',
    },
    youtube('Qwik JS - Crash Introduction to Building a Super Fast Application', 'zLHYDY9dAbs', {
      playlist: 'PLkswEDcfBXYcl1gW7L5zyCVF9LpGhlOqu',
    }),
    {
      href: 'https://frontendmasters.com/courses/qwik/',
      imgSrc: 'https://static.frontendmasters.com/assets/courses/2023-02-28-qwik/posterframe.webp',
      title: 'FrontendMasters: Qwik for Instant-Loading Websites & Apps',
    },
    youtube('🇪🇸 Qwik en 2 horas', 'FF3D4tppyag'),
  ],

  /*****************************************/
  /* Videos
  /*****************************************/
  videos: [
    youtube('Unveiling Qwik 1.0: What You Need to Know!', 'NjKOAbWqOM4'),
    youtube("Qwik… the world's first O(1) JavaScript framework?", 'x2eF3YLiNhY'),
    youtube('Qwik JS and the future of frameworks', 'z14c3u9q8rI'),
    youtube('Qwik: Under-The-Hood of a Resumable JavaScript Framework', 'BxGbnLb5i9Q'),
    youtube('Qwik-ifying React SPA to create the fastest possible website', 'dbxP9FX5j2o'),
    youtube('Exploring Qwik, the Resumable Framework', 'gT5NWKZZPQM'),
    youtube('Building Qwik w/ Misko Hevery', 'lY6e7Hw4uVo'),
    youtube('Qwik, an SSR resumable framework', 'tdEelSqDj0E'),
    youtube('Why the world needs Qwik with Miško Hevery', 'IRw9efkn9UA'),
    youtube('Exploring Qwik City w/ Adam Bradley & Manu Martínez-Almeida', 'XoeJisRJjlo'),
    youtube('Building resumable websites using Qwik with Manu Almeida', 'umASDvjaKTY'),
    youtube('Breaking Down the Web: SSR with Miško Hevery (Qwik!)', 'fYATmnlxX4A'),
    youtube('🇪🇸 Qwik - nuevo framework para Js', 'GzUMPnsDopM'),
    youtube('🇪🇸 Qwik Framework, Un nuevo Framework Super Rápido (Lazy Loading)', 'kT-Y17mEUZs'),
    youtube('Construindo Apps instantâneos com Qwik', 'yrROy1vLwkE'),
    youtube('Après Angular : place à Qwik!', 'Ts2IWXMYiXk'),
    youtube('🇪🇸 Hablemos de Qwik', 'XMLMS2NVC1g'),
    youtube('🇪🇸 Qwik el framework más rápido para aplicaciones web', 'On5P_xw8zSw'),
    youtube('🇪🇸 Introducción a QwikJS', 'fX7bM4iuuUQ'),
    youtube('🇪🇸 ¿Qué onda Qwik?', 'H7TL4SqcC3E'),
    youtube('Introduction to Qwik for JS Developers ft. Miško Hevery | JS Drops', 'DxJgXw91cCQ'),
    youtube('Building Performant Applications at Scale with Qwik-City', '_R0-0IWdshE'),
    youtube('Qwik: The Lightest, Fastest Way to Build Web Apps', 'l2mBk9meSvc'),
    youtube('Resumable React - Leveraging the React ecosystem with Qwik', 'IGIPBAWRw_M'),
    youtube('How to build a Qwik app with Yoav Ganbar', 'qqbi9WBe-ts'),
    youtube('Qwik Crash Course', 'W0xjcx4mrkE'),
    youtube(
      `LEARN QWIK - The World's Fastest JavaScript Framework | E-comm Store Project | Qwik + TailwindCSS`,
      '6w1987dVHVY'
    ),
    youtube(
      `Interview and Q&A with JSNation Speaker: Miško Hevery | Intro and Overview of Qwik`,
      'mLbReseU_I0'
    ),
    youtube('Resumability | Explained Briefly', 'vQ365FjT-yI'),
  ],

  /*****************************************/
  /* Podcasts
  /*****************************************/
  podcasts: [
    youtube('Qwik City for Resumable, Dynamic Apps', 'cJJdrYnsl6U'),
    youtube('Qwik + React State (and a new mic!)', 'fa6-Mn0Eybg'),
    youtube(
      'Miško Hevery: Qwik, PartyTown, and Lessons from Angular [Swyx Mixtape]',
      'T3K_DrgLPXM'
    ),
    youtube('Introducing Qwik w/ Misko Hevery & Shai Reznik', 'iJZaT-AvJ-o'),
    youtube('Resumable Apps in Qwik', 'LbMRs7l4czI'),
    youtube('Qwik: A no-hydration instant-on personalized web applications', '0tCuUQe_ZA0'),
    youtube('QWIK - Set of great demos by Misko Hevery', '7MgNMIPISY4'),
    youtube('Qwik the HTML First Framework', 'GdIZh42etYk'),
    youtube('Build Resumable Apps with Qwik', '_PDpoJUacuc'),
    youtube('Introduction to Qwik – Misko Hevery (English)', 'gYbHdss_y04'),
    youtube(
      'Build Performant, Resumable Sites with Qwik and Partytown (with Miško Hevery) | Some Antics',
      'aGuJPcIdX0A'
    ),
    youtube('Qwik with Miško Hevery (JS Party Live!)', 'rS8hXFHWKJQ'),
    youtube(
      'JSMP 4: Misko Hevery on Qwik - No hydration, auto lazy-loading, edge cacheable, and fun',
      'wMnqgjHkLiY'
    ),
    {
      href: 'https://podrocket.logrocket.com/qwik',
      imgSrc:
        'https://assets.fireside.fm/file/fireside-images/podcasts/images/3/3911462c-bca2-48c2-9103-610ba304c673/episodes/e/e4fc6b6c-9e69-426d-ad23-2e7c79931d11/header.jpg?v=1',
      title: 'Qwik with Yoav Ganbar',
    },
    {
      href: 'https://open.spotify.com/episode/5AnveNaA0SG9b85VChMAjD',
      imgSrc: 'https://i.scdn.co/image/ab6765630000ba8a18aa5c33cbb1658d26724fcf',
      title: 'FedBites: Qwik Special with Miško Hevery & Adam Bradley',
    },
  ],

  /*****************************************/
  /* Presentations
  /*****************************************/
  presentations: [
    youtube('Qwik framework overview', 'Jf_E1_19aB4', { startTime: 629 }),
    youtube(
      'Mindblowing Google PageSpeed Scores with Qwik | Misko Hevery | Reliable Web Summit 2021',
      'sCPLWf2cEY0'
    ),
    youtube(
      'WWC22 - Qwik + Partytown: How to remove 99% of JavaScript from main thread',
      '0dC11DMR3fU',
      { startTime: 154 }
    ),
    youtube(
      'Qwik: A holly grail of progressive hydration for ultimate speed by Miško Hevery',
      'JxYbg7eZNLY'
    ),
    youtube('Qwik: A no hydration instant', 'Zddw6qy5pf0'),
    youtube(
      'Qwik City: Reimangined meta-framework for the edge, Adam Bradley, ViteConf 2022',
      'dSLWJBGWigs'
    ),
    youtube('Qwik Workshop Part 1 - Live Coding', 'GHbNaDSWUX8'),
    youtube('Qwik: Beta and Beyond', 'Tfd62DiRTKc'),
    youtube('Qwik Core Developers Training', 'Mi7udzhcCDQ'),
  ],

  /*****************************************/
  /* Blogs
  /*****************************************/
  blogs: [
    {
      href: 'https://www.builder.io/blog/resumability-from-ground-up',
      title: 'Understanding Resumability from the Ground Up',
    },
    {
      href: 'https://www.builder.io/blog/speculative-module-fetching',
      title: 'Speculative Module Fetching: a Modern Approach to Faster App Interactivity',
    },
    {
      href: 'https://www.builder.io/blog/wtf-is-code-extraction',
      title: 'WTF Is Code Extraction',
    },
    {
      href: 'https://www.builder.io/blog/module-extraction-the-silent-web-revolution',
      title: 'Code Extraction: The Silent Web Revolution',
    },
    {
      href: 'https://www.builder.io/blog/usesignal-is-the-future-of-web-frameworks',
      title: 'useSignal() is the Future of Web Frameworks',
    },
    {
      href: 'https://www.builder.io/blog/qwik-city-server-functions',
      title: 'Introducing Qwik City Server Functions',
    },
    {
      href: 'https://www.builder.io/blog/resumable-react-how-to-use-react-inside-qwik',
      title: 'Resumable React: How to Use React Inside Qwik',
    },
    {
      href: 'https://www.builder.io/blog/resumability-vs-hydration',
      title: 'Resumability vs Hydration',
    },
    {
      href: 'https://www.builder.io/blog/the-qase-for-qwik-love-at-first-tti',
      title: 'The Qase for Qwik: Love At First TTI',
    },
    {
      href: 'https://www.builder.io/blog/movies-app-in-7-frameworks-which-is-fastest-and-why',
      title: 'Movies app in 7 frameworks - which is fastest and why?',
    },
    {
      href: 'https://www.builder.io/blog/hydration-is-pure-overhead',
      title: 'Hydration is Pure Overhead',
    },
    {
      href: 'https://www.builder.io/blog/why-progressive-hydration-is-harder-than-you-think',
      title: 'Why Progressive Hydration is Harder than You Think',
    },
    {
      href: 'https://www.builder.io/blog/why-is-builderio-creating-qwik-and-partytown',
      title: 'Why is Builder.io creating Qwik and Partytown?',
    },
    {
      href: 'https://www.builder.io/blog/dont-blame-the-developer-for-what-the-frameworks-did',
      title: "Don't blame the developer for what the frameworks did!",
    },
    {
      href: 'https://www.builder.io/blog/our-current-frameworks-are-on-we-need-o1',
      title: 'Our current frameworks are O(n); we need O(1)',
    },
    {
      href: 'https://www.builder.io/blog/streaming-is-it-worth-it',
      title: 'Streaming: is it worth it?',
    },
    {
      href: 'https://dev.to/builderio/a-first-look-at-qwik-the-html-first-framework-af',
      title: 'A first look at Qwik - the HTML first framework',
    },
    {
      href: 'https://dev.to/mhevery/death-by-closure-and-how-qwik-solves-it-44jj',
      title: 'Death by Closure (and how Qwik solves it)',
    },
    {
      href: 'https://dev.to/builderio/html-first-javascript-last-the-secret-to-web-speed-4ic9',
      title: 'HTML-first, JavaScript last: the secret to web speed!',
    },
    {
      href: 'https://dev.to/mhevery/qwik-the-answer-to-optimal-fine-grained-lazy-loading-2hdp',
      title: 'Qwik: the answer to optimal fine-grained lazy loading',
    },
    {
      href: 'https://dev.to/builderio/how-to-score-100-on-google-pagespeed-insights-on-mobile-2e0i',
      title: 'How to score 100 on Google PageSpeed Insights on Mobile',
    },
    {
      href: 'https://dev.to/builderio/your-bundler-is-doing-it-wrong-ic0',
      title: 'Your bundler is doing it wrong',
    },
    {
      href: 'https://dev.to/builderio/how-we-cut-99-of-our-javascript-with-qwik-partytown-3i3k',
      title: 'How we cut 99% of our JavaScript with Qwik + Partytown',
    },
    {
      href: 'https://dev.to/builderio/introducing-qwik-starters-get-up-and-running-with-qwik-now-3ap2',
      title: 'Introducing Qwik starters - get up and running with Qwik now',
    },
  ],

  /*****************************************/
  /* Resources
  /*****************************************/
  resources: [
    {
      href: 'https://docs.google.com/presentation/d/1q0eILmAAdFyE0tHkvd_fSuFtcHsHzUn0nZnz5FDgU4k/edit#slide=id.gff298a2a9a_1_2',
      title: 'Qwik City - Google Presentation Template',
    },
    {
      href: 'https://docs.google.com/presentation/d/1Jj1iw0lmaecxtUpqyNdF1aBzbCVnSlbPGLbOpN2xydc/edit#slide=id.g13225ffe116_6_234',
      title: 'Qwik - Google Presentation Template',
    },
    {
      href: 'https://docs.google.com/presentation/d/1cGbC-FFMrLCQ62YDGG17jf3Eh0hqwMBlyDQZGeoFNyw/edit#slide=id.g1620a79b097_0_300',
      title: 'Qwik the O(1) framework',
    },
    { href: '/logos/qwik-logo.svg', title: 'Qwik Logo [svg]' },
    { href: '/logos/qwik.svg', title: 'Qwik Logo and Text [svg]' },
    { href: '/logos/qwik.png', title: 'Qwik Logo and Text [png]' },
  ],
});

export interface MediaEntry {
  title: string;
  href: string;
  imgSrc?: string;
}

export const ThumbnailLink = component$((props: { entry: MediaEntry; imgLoading?: 'eager' }) => {
  return (
    <li>
      <a href={props.entry.href} target="_blank" rel="noreferrer">
        <img
          src={props.entry.imgSrc}
          loading={props.imgLoading === 'eager' ? undefined : 'lazy'}
          decoding={props.imgLoading === 'eager' ? undefined : 'async'}
          aria-hidden="true"
        />
        <p>{props.entry.title}</p>
      </a>
    </li>
  );
});

export const BulletLink = component$((props: { entry: MediaEntry }) => {
  return (
    <li>
      <a href={props.entry.href} target="_blank" rel="noreferrer">
        {props.entry.title}
      </a>
    </li>
  );
});

export const Section = component$(
  (props: {
    id: keyof typeof MEDIA;
    listStyle: 'thumbnails' | 'bullets';
    imgLoading?: 'eager';
  }) => {
    const capitalized = [props.id[0].toUpperCase(), ...props.id.slice(1)].join('');
    return (
      <section id={props.id}>
        <h2>
          <a href={`#${props.id}`}>{capitalized}</a>
        </h2>

        <ul class={props.listStyle}>
          {MEDIA[props.id].map((entry) =>
            props.listStyle === 'thumbnails' ? (
              <ThumbnailLink entry={entry} imgLoading={props.imgLoading} />
            ) : (
              <BulletLink entry={entry} />
            )
          )}
        </ul>
      </section>
    );
  }
);

export default component$(() => {
  useStyles$(styles);
  return (
    <article class="media">
      <h1>Qwik Courses, Presentations, Talks, Videos and Podcasts</h1>

      <Section id="courses" listStyle="thumbnails" imgLoading="eager" />

      <Section id="videos" listStyle="thumbnails" imgLoading="eager" />

      <Section id="podcasts" listStyle="thumbnails" />

      <Section id="presentations" listStyle="thumbnails" />

      <Section id="blogs" listStyle="bullets" />

      <Section id="resources" listStyle="bullets" />

      <section>
        <h2>Add Media</h2>
        <p>This page missing any great resources or in need of an update?</p>
        <p>
          <a
            href="https://github.com/BuilderIO/qwik/edit/main/packages/docs/src/routes/media/index.tsx"
            target="_blank"
            class="edit-page"
          >
            Edit this page!
          </a>
        </p>
      </section>
    </article>
  );
});

/**
 * A helper for defining YouTube Media Entries
 */
export function youtube(
  title: string,
  id: string,
  { startTime, playlist }: { startTime?: number; playlist?: string } = {}
): MediaEntry {
  const url = new URL('https://www.youtube.com/watch');
  url.searchParams.append('v', id);
  // if there's a start_time and it's not 0
  if (startTime) {
    url.searchParams.append('t', startTime.toString());
  }
  if (playlist) {
    url.searchParams.append('list', playlist);
  }
  return {
    href: url.href,
    imgSrc: `http://i3.ytimg.com/vi/${id}/hqdefault.jpg`,
    title,
  };
}

export const head: DocumentHead = {
  title: 'Qwik Presentations, Talks, Videos and Podcasts',
};

// Media Listing

// Helper function to allow autocompletions for Media Entries and Record keys
export function mediaObj<T extends string>(obj: Record<T, MediaEntry[]>) {
  return obj;
}
