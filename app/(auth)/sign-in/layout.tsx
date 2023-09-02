import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Glamoura | sign-in',
};
const SignInLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default SignInLayout;
