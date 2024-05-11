import type { Metadata } from 'next';
import { Lexend_Deca, Lato } from 'next/font/google';
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
        </body>
    </html>
  );
}
