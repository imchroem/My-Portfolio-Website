/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import ButtonDiv from '../Button/ButtonDiv';
import ButtonLink from '../Button/ButtonLink';
import { AiOutlineMail } from 'react-icons/ai';

export default function Contact() {
  return (
    <section className='bg-slate-100 dark:bg-primary' id='contact'>
      <div className='layout flex h-[30rem] w-full flex-col items-center justify-center px-1 py-20 text-center'>
        <div className='flex flex-col items-center justify-center text-center'>
        
       
              <span className='text-8xl'>
                Wanna get into contact with me?{' '}
              </span>
        </div>
        <div className='mt-24 flex h-14 w-full flex-col items-center justify-center gap-4 sm:mt-11 sm:flex-row'>
          <ButtonLink
            href='/contact'
            content={
              <>
                <AiOutlineMail />
                Send me an Email.
              </>
            }
            className='flex items-center justify-center gap-3 border text-center dark:border-white'
          />{' '}
          </div>
        </div>
    </section>
  );
}
