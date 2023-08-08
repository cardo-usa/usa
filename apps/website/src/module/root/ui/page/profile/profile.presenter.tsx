import BrandusaImage from '@usa/core/asset/brand/icon.webp';
// import ProfileActualPictureImage from '@usa/core/asset/profile/actual-picture.webp';
import { Image } from '@usa/core/component/image';
import { Link } from '@usa/core/component/link';
// import { DiscordIcon } from '@usa/core/icon/discord-icon';
// import { GithubIcon } from '@usa/core/icon/github-icon';
// import { InstagramIcon } from '@usa/core/icon/instagram-icon';
// import { MailIcon } from '@usa/core/icon/mail-icon';
// import { TwitterIcon } from '@usa/core/icon/twitter-icon';
import { breakpoints } from '@usa/design-token';
import { cn } from '@usa/tailwind';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type ProfileProps = ComponentPropsWithoutRef<'section'>;

export const Profile = ({ className, ...props }: ProfileProps): ReactNode => (
  <section className={cn('flex flex-col items-center gap-12 p-12 tablet:gap-28 tablet:px-20 laptop:px-28', className)} {...props}>
    <h1 className="text-4xl font-bold text-mauve-12 tablet:text-6xl laptop:text-7xl">
      Hi, I&apos;m <span className="text-purple-11">usa</span>!🧂
    </h1>
    <div className="flex flex-col items-end gap-6 tablet:gap-12">
      <div className="flex flex-col gap-6 tablet:flex-row tablet:gap-16">
        <div className="flex shrink-0 justify-center gap-4 laptop:justify-start">
          <Image
            src={BrandusaImage}
            alt="An image of brand icon for usa."
            sizes={`${breakpoints.laptop.mediaQuery} 200px, 180px`}
            className="h-[180px] w-[180px] laptop:h-[200px] laptop:w-[200px]"
          />
          {/* <Image
            src={ProfileActualPictureImage}
            alt="An image of actual picture for usa."
            sizes={`${breakpoints.laptop.mediaQuery} 200px, 180px`}
            className="hidden h-[180px] w-[180px] laptop:block laptop:h-[200px] laptop:w-[200px]"
          /> */}
        </div>
        <p className="text-lg text-mauve-11">
          Born on November 6, 2004.
          <br />
          Lives in Kasama City, Ibaraki Prefecture.
          <br />
          Engineer and designer who aims to provide the best web experience for any person in any environment.
        </p>
      </div>
      <ul className="flex items-center gap-3">
        <li>
          <Link aria-label="twitter link" aria-description="A link to Twitter account of usa." href="https://twitter.com/usa3616/" external>
            {/* <TwitterIcon className="h-6 w-6 fill-mauve-11 transition hover:opacity-70" /> */}
          </Link>
        </li>
        <li>
          <Link
            aria-label="instagram link"
            aria-description="A link to Instagram account of usa."
            href="https://www.instagram.com/usa_dino/"
            external
          >
            {/* <InstagramIcon className="h-6 w-6 fill-mauve-11 transition hover:opacity-70" /> */}
          </Link>
        </li>
        <li>
          <Link
            aria-label="discord link"
            aria-description="A link to Discord account of usa."
            href="https://discordapp.com/users/699659576349294633/"
            external
          >
            {/* <DiscordIcon className="h-6 w-6 fill-mauve-11 transition hover:opacity-70" /> */}
          </Link>
        </li>
        <li>
          <Link aria-label="github link" aria-description="A link to GitHub account of usa." href="https://github.com/cardo-usa/" external>
            {/* <GithubIcon className="h-6 w-6 fill-mauve-11 transition hover:opacity-70" /> */}
          </Link>
        </li>
        <li>
          <Link aria-label="mail link" aria-description="An E-mail address for usa." href="mailto:me@usa.studio" external>
            {/* <MailIcon className="h-6 w-6 fill-mauve-11 transition hover:opacity-70" /> */}
          </Link>
        </li>
      </ul>
    </div>
  </section>
);
