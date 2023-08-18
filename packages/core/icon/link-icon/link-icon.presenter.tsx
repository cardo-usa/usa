import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { IoMdLink } from 'react-icons/io';

type LinkIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const LinkIcon = ({ ...props }: LinkIconProps): ReactNode => <IoMdLink {...props} />;
