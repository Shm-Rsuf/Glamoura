import { productItem } from '@/types/productItem';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';
import { formateCurrency } from '@/utils/formateCurrency';

interface ProductItemProps {
  item: productItem;
}
const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  return (
    <div className='flex  h-full w-full flex-col gap-5 overflow-hidden rounded-lg border border-gray bg-light p-3'>
      <Link
        href={`/products/${item.id}`}
        className='group h-[15rem] w-full overflow-hidden rounded-md'
      >
        <Image
          src={item.images[0]}
          alt={item.title}
          width={640}
          height={360}
          priority
          className='eq h-full w-full object-cover group-hover:scale-125'
        />
      </Link>
      {/* content */}
      <div className='flex flex-col gap-2.5'>
        <span className='text-sm font-semibold uppercase tracking-wider text-orange'>
          {item.category}
        </span>
        <h3 className='truncate text-2xl'>{item.title}</h3>
        <hr className='border border-gray' />
        <p className='h-24 overflow-hidden'>
          {item.description.substring(0, 200)}...
        </p>
        <div className='mt-5 flex items-center justify-between'>
          <p className='text-xl'>{formateCurrency(item.price)}</p>
          <Link
            href={`/products/${item.id}`}
            className={buttonVariants({ variant: 'ocean' })}
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
