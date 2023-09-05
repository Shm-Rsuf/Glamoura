import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glamoura | products details',
};

export default function ProductsDatailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
