import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { RiCloseLine } from 'react-icons/ri';

type CloseIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const CloseIcon = ({ ...props }: CloseIconProps): ReactNode => <RiCloseLine {...props} />;
