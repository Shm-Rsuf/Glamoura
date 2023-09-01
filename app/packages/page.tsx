import AllPackages from '@/components/packages/AllPackages';
import FooterMini from '@/components/shared/FooterMini';
import Navbar from '@/components/shared/Navbar';

const Packagespage = () => {
  return (
    <>
      <Navbar />
      <main>
        <AllPackages />
      </main>
      <FooterMini />
    </>
  );
};

export default Packagespage;
