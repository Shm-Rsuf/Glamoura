import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';
import { cn } from '@/library/utils';
import { formateCurrency } from '@/utils/formateCurrency';

interface PackageItemProps {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  price: number;
  masterCategory: string;
}
const PackageItem: React.FC<PackageItemProps> = ({
  id,
  title,
  image,
  category,
  description,
  price,
  masterCategory,
}) => {
  return (
    <div className='flex w-full flex-col gap-5'>
      {/* image */}
      <Link
        href={`/packages/${id}`}
        className='group h-[15rem] w-full overflow-hidden rounded-xl border border-gray'
      >
        <Image
          src={image}
          width={640}
          height={640}
          alt={title}
          priority
          className='eq h-full w-full object-cover brightness-90 group-hover:scale-125 group-hover:brightness-100'
        />
      </Link>
      {/* description */}
      <div className='eq flex w-full flex-col gap-2.5 rounded-xl border border-gray bg-gray/25 p-2 hover:bg-gray/50'>
        <span
          className={cn(
            '!inline w-[5rem] py-[2px] text-center text-xs font-semibold tracking-wider',
            masterCategory === 'Wellness' && 'bg-orange/80',
            masterCategory === 'Beauty' && 'bg-blue/80',
            masterCategory === 'Events' && 'bg-red/80'
          )}
        >
          {category}
        </span>
        <h3 className='text-xl'>{title}</h3>
        <hr />
        <p className='h-12 overflow-hidden'>
          {description.substring(0, 54)}...
        </p>
        <div className='mt-3 flex items-center justify-between gap-2.5'>
          <p className='text-xl'>{formateCurrency(price)}</p>
          <Link href={`/packages/${id}`} className={buttonVariants()}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
