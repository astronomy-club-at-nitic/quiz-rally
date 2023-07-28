import { ComponentPropsWithoutRef, ReactNode } from 'react';
import JumbotronBackgroundImage from '@/asset/jumbotron/background.png';
import { Image } from '@/component/common/image';
import { BrandIcon } from '@/icon/brand-icon';
import { breakpoints } from '@/style/token';

type JumpotronProps = Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'className'>;

export const Jumbotron = ({ ...props }: JumpotronProps): ReactNode => (
  <div className="relative h-[400px] w-full overflow-y-hidden" {...props}>
    <Image
      src={JumbotronBackgroundImage}
      sizes={`${breakpoints.desktop.mediaQuery} 1280px, 100vw`}
      alt=""
      priority
      fill
      className="pointer-events-none absolute -z-10 bg-blue-6 object-cover"
    />
    <BrandIcon className="absolute left-1/2 top-1/2 h-[120%] max-w-[84%] -translate-x-1/2 -translate-y-1/2" />
  </div>
);
