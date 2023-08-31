import PackageDetailsSection from '@/components/package-details/PackageDetailsSection';
import { data } from '@/data/packages';
import { packageItem } from '@/types/packageItem';

const PackageDetailsPage = ({ params }: { params: { id: string } }) => {
  const id = +params.id;
  const pacakgeItem = data.find((item: packageItem) => item.id === id);
  if (!pacakgeItem) {
    return null;
  }
  return (
    <main>
      <PackageDetailsSection pacakgeItem={pacakgeItem} />
    </main>
  );
};

export default PackageDetailsPage;
