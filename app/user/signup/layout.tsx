import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glamoura | signup',
  description: 'A mordern e-commerce website',
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
