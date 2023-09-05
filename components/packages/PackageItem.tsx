import { buttonVariants } from '../ui/Button';
import { formateCurrency } from '@/utils/formateCurrency';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/library/utils';
import { packageItem } from '@/types/packageItem';

interface PackageItemProps {
  packageItem: packageItem;
}
const PackageItem: React.FC<PackageItemProps> = ({ packageItem }) => {
  return (
    <div className='flex w-full flex-col gap-5'>
      {/* image */}
      <Link
        href={`/packages/${packageItem.id}`}
        className='group h-[15rem] w-full overflow-hidden rounded-xl border border-gray'
      >
        <Image
          src={packageItem.image}
          width={640}
          height={360}
          alt={packageItem.title}
          priority
          className='eq h-full w-full object-cover brightness-90 group-hover:scale-125 group-hover:brightness-100'
        />
      </Link>
      {/* description */}
      <div className='eq flex w-full flex-col gap-2.5 rounded-xl border border-gray bg-gray/25 p-2 hover:bg-gray/50'>
        <span
          className={cn(
            '!inline w-[5rem] py-[2px] text-center text-xs font-semibold tracking-wider',
            packageItem.masterCategory === 'Wellness' && 'bg-orange/80',
            packageItem.masterCategory === 'Beauty' && 'bg-blue/80',
            packageItem.masterCategory === 'Events' && 'bg-red/80'
          )}
        >
          {packageItem.category}
        </span>
        <h3 className='truncate text-2xl'>{packageItem.title}</h3>
        <hr className='border border-gray' />
        <p className='h-12 overflow-hidden'>
          {packageItem.description.substring(0, 54)}...
        </p>
        <div className='mt-3 flex items-center justify-between gap-2.5'>
          <p className='text-xl'>{formateCurrency(packageItem.price)}</p>
          <Link
            href={`/packages/${packageItem.id}`}
            className={buttonVariants({ variant: 'violet' })}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
