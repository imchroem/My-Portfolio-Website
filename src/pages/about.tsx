import * as React from 'react';

import Layout from '@/components/Layout';
import Seo from '@/components/Seo';

export default function AboutPage() {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <main className='dark:bg-dark'>
        <section className='layout py-20'>
          <div className='text-black max-w-3xl dark:text-white'>
          <p className='text-8xl uppercase font-bold'>About me.</p>
            <p
              className='mb-5 ml-5 max-w-sm  border-l-2 border-slate-500 py-2 pl-5
        '
            >
              Learn more about me.
            </p>
          </div>
          <div className='flex flex-col py-8 sm:py-12 sm:px-14'>
            <div className='prose text-black dark:text-white lg:prose-xl'>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                I like to design and build beautiful and functional websites and
                web applications, taking special care to produce clear and
                understandable code.
              </p>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                My skills:
                <br />
                *** HTML/HTML5
                <br />
                *** CSS
                <br />
                *** JavaScript
                <br />
                *** TypeScript
                <br />
                *** Bootstrap
                <br />
                *** TailwindCSS
                <br />
                *** Reactjs
                <br />
                *** NextJS
                <br />
                *** StrapiHeadless CMS
                <br />
                *** Easy communication
              </p>
              <p>If that&apos;s what you need - please, contact me!</p>
              <p>
                Best regards,
                <br />
                Sebastian Keilby
              </p>
            </div>
            <div className='flex justify-center'>
              <a
                href='/Sebastiankeilby.pdf'
                className='mt-16 rounded-md border border-primary-focus bg-primary-focus px-10 py-4 text-slate-200 transition-colors hover:bg-primary hover:text-slate-100 dark:border-slate-300 dark:bg-primary-focus dark:hover:bg-slate-200 dark:hover:text-black'
                aria-label='my resume'
                target='_blank'
              >
                My Resume
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
