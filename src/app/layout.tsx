import type { Metadata } from 'next';
import Link from 'next/link';
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
        <footer className={`${ibmPlex.className} text-xs flex items-center py-8 text-center justify-center`}><span>© 2024 mc.zsł.pl // <Link href="https://mcjk.cc/" target='_blank' className='text-white hover:underline'>Designed by Maciejka</Link></span></footer>
        </body>
    </html>
  );
}
