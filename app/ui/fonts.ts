import { Inter, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const helveticaLight = localFont({
  src: '../../public/font/HelveticaNeue-Light.otf',
  display: 'swap',
});

export const helveticaMedium = localFont({
  src: '../../public/font/HelveticaNeue-Medium.otf',
  display: 'swap',
});

export const recoleta = localFont({
  src: '../../public/font/Recoleta-RegularDEMO.otf',
  display: 'swap',
});

export const anonymiceMono = localFont({
  src: '../../public/font/AnonymiceProNerdFontMono-Regular.ttf',
  display: 'swap',
});