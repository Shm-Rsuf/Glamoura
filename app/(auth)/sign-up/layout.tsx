import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Glamoura | sign-up',
};
const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default SignUpLayout;
