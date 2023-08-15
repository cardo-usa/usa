import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { BiBookBookmark } from 'react-icons/bi';

type BookIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const BookIcon = ({ ...props }: BookIconProps): ReactNode => <BiBookBookmark {...props} />;
