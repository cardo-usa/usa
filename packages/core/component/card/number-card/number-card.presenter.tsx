import { cn, tv } from '@usa/tailwind';
import type { FC } from 'react';

type Props = {
  number: number;
  color: 'red' | 'blue' | 'green' | 'yellow' | 'black';
};

const variant = tv({
  variants: {
    outerColor: {
      red: 'fill-tomato-9',
      blue: 'fill-indigo-9',
      green: 'fill-green-9',
      yellow: 'fill-amber-9',
      black: 'fill-slate-12',
    } satisfies Record<Props['color'], string>,
    innerColor: {
      red: 'fill-tomato-4',
      blue: 'fill-indigo-4',
      green: 'fill-green-4',
      yellow: 'fill-amber-4',
      black: 'fill-slate-4',
    } satisfies Record<Props['color'], string>,
  },
});

const NumberCard: FC<Props> = ({ number, color }) => {
  return (
    <svg width="230" height="343" viewBox="0 0 230 343" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="228" height="341" rx="15" className="fill-pure" />
      <g clipPath="url(#clip0_53_779)">
        <rect x="20" y="20" width="190" height="303" rx="8" className={cn(variant({ outerColor: color }))} />
        <text x="47" y="60" textAnchor="middle" className={cn('font-bold', variant({ innerColor: color }))} fontSize={40}>
          {number}
        </text>
        {number >= 0 && <path d="M32 67.6H60.8V69.4H32V67.6Z" fill="white" fillOpacity="0.923" />}
        {number < 0 && <path d="M25 67.6H67.8V69.4H25V67.6Z" fill="white" fillOpacity="0.923" />}
        <text
          x="47"
          y="60"
          textAnchor="middle"
          transform="rotate(180 115 171)"
          className={cn('font-bold', variant({ innerColor: color }))}
          fontSize={40}
        >
          {number}
        </text>
        {number >= 0 && <path d="M198 275.4H169.2V273.6H198V275.4Z" fill="white" fillOpacity="0.923" />}
        {number < 0 && <path d="M205 275.4H162.2V273.6H205V275.4Z" fill="white" fillOpacity="0.923" />}
        <ellipse cx="114.869" cy="171.585" rx="72" ry="120" transform="rotate(35.0608 114.869 171.585)" fill="white" fillOpacity="0.923" />
        <text x="115" y="225" textAnchor="middle" className={cn('font-bold', variant({ outerColor: color }))} fontSize={150}>
          {number}
        </text>
        {number >= 0 && <path d="M63.3125 234.8H165.713V241.2H63.3125V234.8Z" className={cn(variant({ outerColor: color }))} />}
        {number < 0 && <path d="M40 234.8H165.713V241.2H40V234.8Z" fill="#E54D2E" className={cn(variant({ outerColor: color }))} />}
      </g>
      <rect x="1" y="1" width="228" height="341" rx="15" stroke="#D7DBDF" strokeWidth="2" />
      <defs>
        <clipPath id="clip0_53_779">
          <rect x="20" y="20" width="190" height="303" rx="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { NumberCard };
