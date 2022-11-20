import * as React from 'react';

import clsxm from '@/lib/clsxm';

type indexProps = {
  className?: string;
  width?: string | undefined;
  height?: string | undefined;
} & React.ComponentPropsWithoutRef<'svg'>;

export default function index({
  className,
  width,
  height,
  ...rest
}: indexProps) {
  return (
  <p className='text-2xl font-bold text-red-800'>Keilby.</p>
  );
}
