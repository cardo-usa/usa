import NextImage from 'next/image';
import type { ComponentPropsWithRef, ElementRef } from 'react';
import { forwardRef } from 'react';

type ImageProps = ComponentPropsWithRef<typeof NextImage>;

export const Image = forwardRef<ElementRef<typeof NextImage>, Omit<ImageProps, 'ref'>>(({ priority, ...props }, ref) => (
  <NextImage ref={ref} placeholder={priority ? undefined : 'blur'} {...props} />
));

Image.displayName = 'Image';
