import * as React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';

import ButtonLink from '../Button/ButtonLink';

export default function Intro() {
  return (
    <section className='layout gap-y-12 py-20 pb-12 md:pt-28'>
      <div className='flex flex-col items-center justify-center text-center'>
        <div className='mb-11 max-w-3xl sm:max-w-5xl'>
              <span className='sm:text-8xl sm:font-bold sm: text-6xl font-bold'>
                Hello. My name is <span className='text-red-800'>Sebastian Keilby</span>.{' '}
                <span className='inline-block m-14'>I am a Frontend Developer.</span>
              </span> 

          <p className='text-sm sm:text-base'>
            I create{' '}
            <span className='font-bold text-black dark:text-white'>apps</span>{' '}
            and{' '}
            <span className='font-bold text-black dark:text-white'>
              websites
            </span>{' '}
            with passion and quality{' '}
            <BsFillHeartFill className='ml-1 inline-block	animate-bounce text-rose-500' />
          </p>
        </div>
        <ButtonLink
          className='flex items-center justify-center border-0 border-none bg-gray-700 px-12 text-center text-white hover:bg-gray-800 dark:hover:bg-gray-800 dark:hover:text-white'
          href='#contact'
          content="Get into contact with me."
          style={{ border: 'none' }}
        />
      </div>
    </section>
  );
}
