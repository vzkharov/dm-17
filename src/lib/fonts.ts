import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const variables = {
  inter: inter.variable,
};

const fontsClassName = [inter.className].join(' ');

export { fontsClassName, variables };
