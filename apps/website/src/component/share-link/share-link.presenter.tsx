import { CopyIcon } from '@usa/core/icon/copy-icon';
import { LinkIcon } from '@usa/core/icon/link-icon';
import { cn, tv } from '@usa/tailwind';
import { useState, type FC, useEffect, useRef } from 'react';

type Props = {
  url: string;
};

const CopiedVariant = tv({
  variants: {
    display: {
      true: 'block',
      false: 'hidden',
    },
  },
});

const ShareLink: FC<Props> = ({ url }) => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    timerRef.current = window.setTimeout(() => {
      setCopied(false);
    }, 1500);

    return () => {
      window.clearTimeout(timerRef.current);
    };
  }, [copied]);

  return (
    <div className="flex h-12">
      <div className="flex h-12 w-14 items-center justify-center rounded-l-xl bg-tomato-6">
        <LinkIcon className="h-6 w-6 -rotate-45 fill-slate-11" />
      </div>
      <p className="h-12 w-[40rem] truncate bg-slate-3 px-3 py-1 text-center text-xl font-bold leading-10 text-slate-11/80">{url}</p>
      <div className="relative flex h-12 w-14 items-center justify-center rounded-r-xl bg-slate-3">
        <p className={cn('absolute -top-8 rounded-md bg-pure px-2 py-1 text-slate-12 outline outline-slate-7', CopiedVariant({ display: copied }))}>
          Copied!
        </p>
        <button
          type="button"
          tabIndex={0}
          onClick={() => {
            navigator.clipboard.writeText(url);
            setCopied(false);
            window.clearTimeout(timerRef.current);
            window.setTimeout(() => {
              setCopied(true);
            }, 100);
          }}
        >
          <CopyIcon className="h-6 w-6 fill-slate-11" />
        </button>
      </div>
    </div>
  );
};

export { ShareLink };
