import PackageDetailsSection from '@/components/package-details/PackageDetailsSection';
import FooterMini from '@/components/shared/FooterMini';
import Navbar from '@/components/shared/Navbar';
import { data } from '@/data/packages';
import { packageItem } from '@/types/packageItem';

const PackageDetailsPage = ({ params }: { params: { id: string } }) => {
  const id = +params.id;
  const pacakgeItem = data.find((item: packageItem) => item.id === id);
  if (!pacakgeItem) {
    return null;
  }
  return (
    <>
      <Navbar />
      <main>
        <PackageDetailsSection pacakgeItem={pacakgeItem} />
      </main>
      <FooterMini />
    </>
  );
};

export default PackageDetailsPage;
