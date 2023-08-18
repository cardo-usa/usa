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

const WildCard: FC<Props> = ({ color, ...props }) => (
  <svg width="230" height="343" viewBox="0 0 230 343" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="1" y="1" width="228" height="341" rx="15" fill="white" />
    <g clipPath="url(#clip0_181_14681)">
      <rect x="20" y="20" width="190" height="303" rx="8" className={cn(variant({ color }))} />
      <mask id="mask0_181_14681" maskUnits="userSpaceOnUse" x="36" y="36" width="25" height="28">
        <ellipse cx="48.4891" cy="50" rx="9.28465" ry="15.4744" transform="rotate(35.0608 48.4891 50)" fill="white" />
      </mask>
      <g mask="url(#mask0_181_14681)">
        <path d="M32.1762 50.0311L47.9755 50.0311L33.0213 68.9486L13.8003 53.7545L32.1762 50.0311Z" fill="#FFB224" />
        <path d="M37.4634 50.0759L47.9754 50.0759L69.8307 27.3577L42.2346 39.9951L37.4634 50.0759Z" fill="#E54D2E" />
        <path d="M47.9685 50.0535L70.4108 50.0535L52.2353 84.1651L33.0143 68.971L47.9685 50.0535Z" fill="#30A46C" />
        <path d="M47.9685 50.0965L70.4108 50.0965L84.8536 25.2944L69.8305 23.1022L47.9685 50.0965Z" fill="#3E63DD" />
      </g>
      <mask id="mask1_181_14681" maskUnits="userSpaceOnUse" x="169" y="279" width="25" height="28">
        <ellipse cx="181.511" cy="293" rx="9.28465" ry="15.4744" transform="rotate(35.0608 181.511 293)" fill="white" />
      </mask>
      <g mask="url(#mask1_181_14681)">
        <path d="M165.198 293.031L180.997 293.031L166.043 311.949L146.822 296.754L165.198 293.031Z" fill="#FFB224" />
        <path d="M170.485 293.076L180.997 293.076L202.852 270.358L175.256 282.995L170.485 293.076Z" fill="#E54D2E" />
        <path d="M180.99 293.053L203.433 293.053L185.257 327.165L166.036 311.971L180.99 293.053Z" fill="#30A46C" />
        <path d="M180.99 293.096L203.433 293.096L217.875 268.294L202.852 266.102L180.99 293.096Z" fill="#3E63DD" />
      </g>
      <path
        d="M172.985 212.371C154.036 239.372 130.34 259.168 107.392 269.373C84.4233 279.588 62.3835 280.132 46.5095 268.992C30.6355 257.852 23.6533 236.94 25.4493 211.866C27.2436 186.816 37.8028 157.801 56.752 130.8C75.7012 103.798 99.3971 84.0025 122.345 73.7973C145.314 63.5827 167.354 63.0384 183.228 74.1786C199.102 85.3188 206.084 106.231 204.288 131.304C202.493 156.355 191.934 185.37 172.985 212.371Z"
        fill="white"
      />
      <mask id="mask2_181_14681" maskUnits="userSpaceOnUse" x="24" y="64" width="182" height="215">
        <ellipse cx="114.869" cy="171.585" rx="72" ry="120" transform="rotate(35.0608 114.869 171.585)" fill="white" />
      </mask>
      <g mask="url(#mask2_181_14681)">
        <path d="M-11.634 171.826L110.885 171.826L-5.08027 318.526L-154.134 200.7L-11.634 171.826Z" fill="#FFB224" />
        <path d="M29.3669 172.174L110.885 172.174L280.367 -3.99999L66.3669 94L29.3669 172.174Z" fill="#E54D2E" />
        <path d="M110.831 172L284.866 172L143.919 436.526L-5.13433 318.7L110.831 172Z" fill="#30A46C" />
        <path d="M110.831 172.333L284.866 172.333L396.866 -20L280.366 -37L110.831 172.333Z" fill="#3E63DD" />
      </g>
    </g>
    <rect x="1" y="1" width="228" height="341" rx="15" stroke="#D7DBDF" strokeWidth="2" />
    <defs>
      <clipPath id="clip0_181_14681">
        <rect x="20" y="20" width="190" height="303" rx="8" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export { WildCard };
