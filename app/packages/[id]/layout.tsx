import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glamoura | package Details',
  description: 'A mordern e-commerce website',
};

export default function PackageDatailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
