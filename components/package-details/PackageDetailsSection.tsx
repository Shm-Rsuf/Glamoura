import { packageItem } from '@/types/packageItem';

interface PackageDetailsSectionProps {
  pacakgeItem: packageItem;
}

const PackageDetailsSection: React.FC<PackageDetailsSectionProps> = ({
  pacakgeItem,
}) => {
  return (
    <section className='wrapper section-padding'>{pacakgeItem?.title}</section>
  );
};

export default PackageDetailsSection;
