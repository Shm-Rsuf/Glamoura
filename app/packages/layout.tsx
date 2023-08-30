import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glamoura | packages',
  description: 'A mordern e-commerce website',
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
