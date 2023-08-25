import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glamoura | Signin',
  description: 'A mordern e-commerce website',
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
