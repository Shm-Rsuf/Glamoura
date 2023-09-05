import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glamoura | products',
  description: 'A mordern e-commerce website',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
