import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { CgClose } from 'react-icons/cg';

type CloseIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const CloseIcon = ({ ...props }: CloseIconProps): ReactNode => <CgClose {...props} />;
