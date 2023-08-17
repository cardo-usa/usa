import { cn, tv } from '@usa/tailwind';
import type { ComponentPropsWithoutRef, FC } from 'react';

type Props = {
  color: 'red' | 'blue' | 'green' | 'yellow' | 'any';
} & ComponentPropsWithoutRef<'svg'>;

const variant = tv({
  variants: {
    color: {
      red: 'fill-tomato-9',
      blue: 'fill-indigo-9',
      green: 'fill-green-9',
      yellow: 'fill-amber-9',
      any: 'fill-slate-12',
    } satisfies Record<Props['color'], string>,
  },
});

const ReverseCard: FC<Props> = ({ color, ...props }) => (
  <svg width="230" height="343" viewBox="0 0 230 343" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="1" y="1" width="228" height="341" rx="15" fill="white" />
    <g clipPath="url(#clip0_181_14653)">
      <rect x="20" y="20" width="190" height="303" rx="8" className={cn(variant({ color }))} />
      <path
        d="M43.0769 32L45.8462 34.7692L34.7692 45.8462C32 48.6154 32 54.1538 34.7692 56.9231L40.3077 51.3846L51.3846 40.3077L54.1539 43.0769V32H43.0769Z"
        fill="white"
        fillOpacity="0.923"
      />
      <path
        d="M43.0769 68L40.3077 65.2308L51.3846 54.1538C54.1538 51.3846 54.1538 45.8462 51.3846 43.0769L45.8462 48.6154L34.7692 59.6923L32 56.9231V68H43.0769Z"
        fill="white"
        fillOpacity="0.923"
      />
      <path
        d="M186.923 275L189.692 277.769L178.615 288.846C175.846 291.615 175.846 297.154 178.615 299.923L184.154 294.385L195.231 283.308L198 286.077V275H186.923Z"
        fill="white"
        fillOpacity="0.923"
      />
      <path
        d="M186.923 311L184.154 308.231L195.231 297.154C198 294.385 198 288.846 195.231 286.077L189.692 291.615L178.615 302.692L175.846 299.923V311H186.923Z"
        fill="white"
        fillOpacity="0.923"
      />
      <ellipse cx="114.869" cy="171.585" rx="72" ry="120" transform="rotate(35.0608 114.869 171.585)" fill="white" fillOpacity="0.923" />
      <path d="M115 107L125 117L85 157C75 167 75 187 85 197L105 177L145 137L155 147V107H115Z" className={cn(variant({ color }))} />
      <path d="M115 237L105 227L145 187C155 177 155 157 145 147L125 167L85 207L75 197V237H115Z" className={cn(variant({ color }))} />
    </g>
    <rect x="1" y="1" width="228" height="341" rx="15" stroke="#D7DBDF" strokeWidth="2" />
    <defs>
      <clipPath id="clip0_181_14653">
        <rect x="20" y="20" width="190" height="303" rx="8" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export { ReverseCard };
