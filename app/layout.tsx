import type { Metadata } from 'next';
import { Bai_Jamjuree } from 'next/font/google';
import { cn } from '@/library/utils';
import MasterProvider from '@/providers/MasterProvider';
import './globals.css';

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Glamoura | Home',
  description: 'A beautyful salon and spa website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(baiJamjuree.className, 'bg-light text-dark antialiased')}
      >
        <MasterProvider>{children}</MasterProvider>
      </body>
    </html>
  );
}
