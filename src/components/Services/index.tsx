import * as React from 'react';
import { AiOutlineTool } from 'react-icons/ai';
import { BiCode } from 'react-icons/bi';
import { FaAws } from 'react-icons/fa';
import { RiRulerLine } from 'react-icons/ri';

import Card from './Card';
const cardData = [
  {
    id: 1,
    title: 'Placeholder',
    icon: <RiRulerLine />,
    content: 'Dont know what to put here?',
    titleColor: '#F43F5E',
  },
  {
    id: 2,
    title: 'Development',
    icon: <BiCode />,
    content: 'Developing scalable web apps and mobile apps',
    titleColor: '#EAB308',
  },
  {
    id: 3,
    title: 'Deployment',
    icon: <FaAws />,
    content: 'Setting up apps. Vast knowledge in cPanel, and great at DNS.',
    titleColor: '#3B82F6',
  },
  {
    id: 4,
    title: 'Maintainance',
    icon: <AiOutlineTool />,
    content: 'Continuous monitoring, maintenance and support',
    titleColor: '#22C55E',
  },
];
export default function Services() {
  return (
    <section className='layout py-20'>
      <div className='max-w-3xl'>
        <p className='text-8xl font-bold'>What I am offering</p>
        <p
          className='mb-5 ml-5  max-w-sm border-l-2 border-slate-500 py-2
        pl-5 opacity-50'
        >
          Below are my current skills. But I am always looking to add more to my arsenal and improving.
        </p>
      </div>
      <div className='grid grid-cols-1 justify-center gap-9 py-14 sm:px-14 lg:grid-cols-2'>
        {cardData.map((card) => (
          <Card
            key={card.id}
            icon={card.icon as never}
            title={card.title}
            content={card.content}
            titleColor={card.titleColor}
          />
        ))}
      </div>
    </section>
  );
}
