import type { Metadata } from 'next';
import { Lexend_Deca, Lato, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lexend-deca',
});
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const ibmPlex = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400']
});

export const metadata: Metadata = {
  title: 'mc.zsł.pl',
  description: 'Nieoficjalny serwer Minecraft ZSŁ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl'>
      <body className={`${lato.className} ${lexendDeca.variable}`}>
        <Navbar />
        {children}
        <span className={`${ibmPlex.className} text-xs flex items-center py-8 text-center justify-center`}>© 2024 mc.zsł.pl //<a href="https://mcjk.cc/" target='_blank' className='ml-[1em] text-white hover:underline'> Designed by Maciejka</a></span>
        </body>
    </html>
  );
}
