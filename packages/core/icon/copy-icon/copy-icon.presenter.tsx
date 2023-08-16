import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { BiCopy } from 'react-icons/bi';

type CopyIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const CopyIcon = ({ ...props }: CopyIconProps): ReactNode => <BiCopy {...props} />;
