import './globals.css';

import type { Metadata } from 'next';

import type { Layout } from '~/lib/types';
import { fontsClassName } from '~/lib/fonts';

import { Providers } from './providers';

const Root: Layout = ({ children }) => (
  <Providers>
    <html
      dir='ltr'
      lang='ru'
      suppressHydrationWarning
      suppressContentEditableWarning
    >
      <body className={fontsClassName}>
        <main>{children}</main>
      </body>
    </html>
  </Providers>
);

export const metadata: Metadata = {
  title: 'The best orders management system | DM-17',
  description: 'The best orders management system, created by DM-17',
};

export default Root;
