import { component$, useStyles$, type FunctionComponent } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import styles from '../ecosystem.css?inline';
import data from '../ecosystem.json';
import { MEDIA } from '../media/index';
import SHOWCASE from '../showcase/generated-pages.json';
import { EcosystemMenu } from './ecosystem-menu';
import { QwikPlusLogo } from './qwik-plus-logo';

export default component$(() => {
  useStyles$(styles);

  const courses = MEDIA.courses.slice(0, 6);
  const videos = MEDIA.videos.slice(0, 6);
  const podcasts = MEDIA.podcasts.slice(0, 6);
  const presentations = MEDIA.presentations.slice(0, 6);
  const showcaseSites = SHOWCASE.slice(0, 6);

  return (
    <>
      <div class="ecosystem lg:grid grid-cols-[240px,1fr] px-6 m-auto max-w-screen-xl gap-8">
        <EcosystemMenu />

        <article>
          <QwikPlusLogo />

          <div class="purple-gradient" role="presentation" />
          <div class="blue-gradient" role="presentation" />

          <section id="deployments">
            <h2>
              <Link href="/docs/deployments/">Deployments</Link>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {data.deployments.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
              <AddIntegrationItem
                title="Add A Deployment"
                href="/docs/deployments/#add-a-new-deployment"
              />
            </ul>
          </section>

          <section id="integrations">
            <h2>
              <span>
                <Link href="/docs/integrations/">Integrations</Link>
              </span>
              <span>
                <Link href="/docs/integrations/" class="text-sm">
                  See All
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {data.integrations.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
              <AddIntegrationItem
                title="Add An Integration"
                href="/docs/integrations/#add-a-new-integration"
              />
            </ul>
          </section>

          <section id="libraries">
            <h2>
              <span>Libraries</span>
              <span></span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {data.libraries.map((item, i) => (
                <LibraryGridItem
                  title={item.title}
                  href={item.github}
                  imgSrc={item.imgSrc}
                  description={item.description}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
              <AddIntegrationItem title="Add A Library" href="/docs/advanced/library/" />
            </ul>
          </section>

          <section>
            <h2>Newsletter</h2>
            <a href="https://qwiknewsletter.com" target="_blank">
              <div class="flex flex-col items-center gap-8">
                <div
                  class="flex justify-center p-4 w-full bg-[--qwik-dark-purple]
        bg-gradient-to-r from-[--qwik-dark-purple-bg] via-purple-500 to-[--qwik-dark-purple-bg]"
                >
                  <img
                    src="/ecosystem/qwik-newsletter.svg"
                    alt="Qwikly Newsletter - Weekly news about Qwik"
                    loading="lazy"
                  />
                </div>
                <div class="text-2xl font-bold">Qwikly Newsletter - Weekly news about Qwik</div>
              </div>
            </a>
          </section>

          <section id="courses">
            <h2>
              <span>
                <Link href="/media/#courses">Courses</Link>
              </span>
              <span>
                <Link href="/media/#courses" class="text-sm">
                  See All
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {courses.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  imgCover={true}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
              <AddIntegrationItem
                title="Add A Course"
                href="https://github.com/BuilderIO/qwik/blob/main/packages/docs/src/routes/(ecosystem)/media/index.tsx"
              />
            </ul>
          </section>

          <section id="videos">
            <h2>
              <span>
                <Link href="/media/#videos">Videos</Link>
              </span>
              <span>
                <Link href="/media/#videos" class="text-sm">
                  See All
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {videos.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  imgCover={true}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
              <AddIntegrationItem
                title="Add A Video"
                href="https://github.com/BuilderIO/qwik/blob/main/packages/docs/src/routes/(ecosystem)/media/index.tsx"
              />
            </ul>
          </section>

          <section id="podcasts">
            <h2>
              <span>
                <Link href="/media/#podcasts">Podcasts</Link>
              </span>
              <span>
                <Link href="/media/#podcasts" class="text-sm">
                  See All
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {podcasts.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  imgCover={true}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
              <AddIntegrationItem
                title="Add A Podcast"
                href="https://github.com/BuilderIO/qwik/blob/main/packages/docs/src/routes/(ecosystem)/media/index.tsx"
              />
            </ul>
          </section>

          <section id="showcase">
            <h2>
              <span>
                <Link href="/showcase/">Showcase</Link>
              </span>
              <span>
                <Link href="/showcase/" class="text-sm">
                  See All
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {showcaseSites.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  imgCover={true}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
              <AddIntegrationItem
                title="Add A Showcase"
                href="https://github.com/BuilderIO/qwik/edit/main/packages/docs/scripts/pages.json"
              />
            </ul>
          </section>

          <section id="presentations">
            <h2>
              <span>
                <Link href="/media/#presentations">Presentations</Link>
              </span>
              <span>
                <Link href="/media/#presentations" class="text-sm">
                  See All
                </Link>
              </span>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {presentations.map((item, i) => (
                <GridItem
                  title={item.title}
                  href={item.href}
                  imgSrc={item.imgSrc}
                  imgCover={true}
                  key={i}
                  thumbnailBg={true}
                />
              ))}
              <AddIntegrationItem
                title="Add A Presentation"
                href="https://github.com/BuilderIO/qwik/blob/main/packages/docs/src/routes/(ecosystem)/media/index.tsx"
              />
            </ul>
          </section>

          <section id="community">
            <h2>
              <Link href="/community/groups/">Community</Link>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-4">
              {data.communities.map((item, i) => (
                <GridItem title={item.title} href={item.href} imgSrc={item.imgSrc} key={i} />
              ))}
            </ul>

            <aside class="mt-6 text-center">
              <p>Interested in starting a local Qwik community as well?</p>
              <p>
                <a
                  class="text-blue-600 font-bold"
                  href="https://forms.gle/S1rxiKiVdhZqkk8RA"
                  target="_blank"
                >
                  Please apply here
                </a>{' '}
                for the Qwik Community Leaders program
              </p>
            </aside>
          </section>

          <section id="social">
            <h2>
              <Link href="/community/groups/">Social</Link>
            </h2>
            <ul class="grid gap-8 grid-cols-2 md:grid-cols-3">
              {data.social.map((item, i) => (
                <GridItem title={item.title} href={item.href} imgSrc={item.imgSrc} key={i} />
              ))}
            </ul>
          </section>
        </article>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Ecosystem',
};

export const GridItem: FunctionComponent<GridItemProps> = (props) => {
  return (
    <li class="grid-item">
      <Link href={props.href}>
        <div class={{ thumbnail: props.thumbnailBg, cover: props.imgCover }}>
          <img src={props.imgSrc} alt={props.title} loading="lazy" />
        </div>
        <div class="text">{props.title}</div>
      </Link>
    </li>
  );
};

export const LibraryGridItem: FunctionComponent<LibraryGridItemProps> = (props) => {
  return (
    <li class="grid-item">
      <Link href={props.href}>
        <div class={{ thumbnail: props.thumbnailBg, cover: props.imgCover }}>
          <img src={props.imgSrc} alt={props.title} loading="lazy" />
        </div>
        <div class="text">{props.title}</div>
        <div class="description">{props.description}</div>
      </Link>
    </li>
  );
};

export const AddIntegrationItem: FunctionComponent<GridItemProps> = (props) => {
  return (
    <li class="grid-item add-integration">
      <Link href={props.href}>
        <div class="thumbnail">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 64 64">
            <path fill="currentColor" d="M38 26V2H26v24H2v12h24v24h12V38h24V26z" />
          </svg>
        </div>
        <div class="text">{props.title}</div>
      </Link>
    </li>
  );
};

interface GridItemProps {
  title: string;
  href: string;
  imgSrc?: string;
  imgCover?: boolean;
  thumbnailBg?: boolean;
}

interface LibraryGridItemProps {
  title: string;
  href: string;
  description: string;
  imgSrc?: string;
  imgCover?: boolean;
  thumbnailBg: boolean;
}
