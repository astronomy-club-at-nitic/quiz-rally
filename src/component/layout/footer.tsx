import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type FooterProps = Omit<ComponentPropsWithoutRef<'footer'>, 'children'>;

export const Footer = ({ className, ...props }: FooterProps): ReactNode => (
  <footer {...props}>
    <p>hoge</p>
  </footer>
);
