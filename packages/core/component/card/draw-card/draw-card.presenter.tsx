import { cn, tv } from '@usa/tailwind';
import type { ComponentPropsWithoutRef, FC } from 'react';

type Props = {
  color: 'red' | 'blue' | 'green' | 'yellow';
} & ComponentPropsWithoutRef<'svg'>;

const variant = tv({
  variants: {
    color: {
      red: 'fill-tomato-9',
      blue: 'fill-indigo-9',
      green: 'fill-green-9',
      yellow: 'fill-amber-9',
    } satisfies Record<Props['color'], string>,
  },
});

const DrawCard: FC<Props> = ({ color, ...props }) => (
  <svg width="230" height="343" viewBox="0 0 230 343" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="1" y="1" width="228" height="341" rx="15" fill="white" />
    <g clipPath="url(#clip0_181_14663)">
      <rect x="20" y="20" width="190" height="303" rx="8" className={cn(variant({ color }))} />
      <rect
        x="36.66"
        y="45.8314"
        width="36"
        height="7.55056"
        rx="3.77528"
        transform="rotate(12.3183 36.66 45.8314)"
        fill="white"
        fillOpacity="0.923"
      />
      <rect
        x="45.9631"
        y="70.2203"
        width="36"
        height="7.55056"
        rx="3.77528"
        transform="rotate(-77.6817 45.9631 70.2203)"
        fill="white"
        fillOpacity="0.923"
      />
      <rect
        x="159.808"
        y="281.98"
        width="36"
        height="7.55056"
        rx="3.77528"
        transform="rotate(12.3183 159.808 281.98)"
        fill="white"
        fillOpacity="0.923"
      />
      <rect
        x="169.112"
        y="306.369"
        width="36"
        height="7.55056"
        rx="3.77528"
        transform="rotate(-77.6817 169.112 306.369)"
        fill="white"
        fillOpacity="0.923"
      />
      <ellipse cx="114.869" cy="171.585" rx="72" ry="120" transform="rotate(35.0608 114.869 171.585)" fill="white" fillOpacity="0.923" />
      <rect
        x="54.4569"
        y="144.576"
        width="130"
        height="27.2659"
        rx="13.633"
        transform="rotate(12.3183 54.4569 144.576)"
        className={cn(variant({ color }))}
      />
      <rect
        x="88.0515"
        y="232.647"
        width="130"
        height="27.2659"
        rx="13.633"
        transform="rotate(-77.6817 88.0515 232.647)"
        className={cn(variant({ color }))}
      />
    </g>
    <rect x="1" y="1" width="228" height="341" rx="15" stroke="#D7DBDF" strokeWidth="2" />
    <defs>
      <clipPath id="clip0_181_14663">
        <rect x="20" y="20" width="190" height="303" rx="8" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export { DrawCard };
