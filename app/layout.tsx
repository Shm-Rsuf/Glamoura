import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Bai_Jamjuree } from 'next/font/google';
import { cn } from '@/library/utils';
import './globals.css';

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Glamoura | Home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={cn(
            baiJamjuree.className,
            'bg-light text-dark antialiased'
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
