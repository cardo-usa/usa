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

const SkipCard: FC<Props> = ({ color, ...props }) => (
  <svg width="230" height="343" viewBox="0 0 230 343" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="1" y="1" width="228" height="341" rx="15" fill="white" />
    <g clipPath="url(#clip0_181_14647)">
      <rect x="20" y="20" width="190" height="303" rx="8" className={cn(variant({ color }))} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.0391 32C45.433 31.994 40.8093 33.7397 37.2903 37.2495C30.2524 44.2691 30.2333 55.6717 37.2529 62.7097C44.2725 69.7476 55.6751 69.7667 62.713 62.7471C69.7509 55.7275 69.77 44.3249 62.7504 37.287C59.2406 33.768 54.6453 32.006 50.0391 32ZM50.0017 37.9995C52.1013 38.0019 54.2106 38.5515 56.0761 39.6493L39.6527 56.0728C36.9405 51.4678 37.5687 45.4352 41.5275 41.4866C43.8735 39.1468 46.9309 37.9955 50.0017 37.9995ZM60.3507 43.8864C63.0816 48.4949 62.4426 54.5537 58.4759 58.5101C54.513 62.4626 48.4894 63.0436 43.8898 60.3099L60.3507 43.8864Z"
        fill="white"
        fillOpacity="0.923"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M180.036 275C175.43 274.994 170.806 276.74 167.287 280.25C160.249 287.269 160.23 298.672 167.25 305.71C174.269 312.748 185.672 312.767 192.71 305.747C199.748 298.727 199.767 287.325 192.747 280.287C189.237 276.768 184.642 275.006 180.036 275ZM179.998 280.999C182.098 281.002 184.207 281.552 186.073 282.649L169.649 299.073C166.937 294.468 167.565 288.435 171.524 284.487C173.87 282.147 176.928 280.995 179.998 280.999ZM190.347 286.886C193.078 291.495 192.439 297.554 188.473 301.51C184.51 305.463 178.486 306.044 173.886 303.31L190.347 286.886Z"
        fill="white"
        fillOpacity="0.923"
      />
      <ellipse cx="114.869" cy="171.585" rx="72" ry="120" transform="rotate(35.0608 114.869 171.585)" fill="white" fillOpacity="0.923" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M115.136 112C99.7807 111.98 84.367 117.8 72.636 129.5C49.174 152.901 49.1104 190.913 72.5113 214.375C95.9122 237.837 133.924 237.901 157.386 214.5C180.848 191.099 180.912 153.087 157.511 129.625C145.811 117.894 130.491 112.02 115.136 112ZM115.011 132C122.011 132.008 129.042 133.84 135.261 137.5L80.5113 192.25C71.4699 176.899 73.564 156.788 86.7613 143.625C94.582 135.825 104.774 131.987 115.011 132ZM149.511 151.625C158.615 166.988 156.485 187.186 143.261 200.375C130.05 213.552 109.97 215.488 94.6363 206.375L149.511 151.625Z"
        className={cn(variant({ color }))}
      />
    </g>
    <rect x="1" y="1" width="228" height="341" rx="15" stroke="#D7DBDF" strokeWidth="2" />
    <defs>
      <clipPath id="clip0_181_14647">
        <rect x="20" y="20" width="190" height="303" rx="8" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export { SkipCard };
