import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { PiCopyBold } from 'react-icons/pi';

type CopyIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const CopyIcon = ({ ...props }: CopyIconProps): ReactNode => <PiCopyBold {...props} />;
