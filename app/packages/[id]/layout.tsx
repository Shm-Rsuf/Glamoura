import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glamoura | package Details',
};

export default function PackageDatailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
