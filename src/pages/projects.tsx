import * as React from 'react';

import projectsData from '@/data/projectsData.json';

import Layout from '@/components/Layout';
import Project from '@/components/Projects/Project';
import Seo from '@/components/Seo';

export default function ProjectsPage() {
  return (
    <Layout>
      <Seo templateTitle='Projects' />

      <main className='dark:bg-dark'>
        <section className='layout py-20'>
          <div className='text-black max-w-3xl dark:text-white'>
          <p className='text-8xl uppercase font-bold'>Projects</p>
            <p
              className='mb-5 ml-5 max-w-sm  border-l-2 border-slate-500 py-2 pl-5'
            >
              Checkout some of my successful projects.
            </p>
          </div>
          <div className='flex flex-col justify-center pt-20 pb-2'>
            {projectsData
              .sort((a: { id: number }, b: { id: number }) => {
                return b.id - a.id;
              })
              .map(
                (project: {
                  id: React.Key | null | undefined;
                  image: string;
                  title: string;
                  siteLink: string;
                  GithubLink: string;
                  content: string;
                }) => (
                  <Project
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    siteLink={project.siteLink}
                    GithubLink={project.GithubLink}
                    content={project.content}
                  />
                )
              )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
