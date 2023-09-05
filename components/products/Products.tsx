import { data } from '@/data/products';
import { productItem } from '@/types/productItem';
import SectionTitle from '../shared/SectionTitle';
import ProductItem from './ProductItem';
import Link from 'next/link';
import { buttonVariants } from '../ui/Button';
import { cn } from '@/library/utils';

interface ProductsProps {
  fromProductsPage?: boolean;
}

const Products: React.FC<ProductsProps> = ({ fromProductsPage }) => {
  return (
    <section className='wrapper section-padding' id='products'>
      <SectionTitle
        title='Products'
        subtitle='Explore our beauty products'
        color='bg-blue'
      />
      {/* Products */}
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        {/* Multiple products goes here */}
        {!fromProductsPage &&
          data
            .sort((a: productItem, b: productItem) => a.price - b.price)
            .slice(0, 6)
            .map((item: productItem) => (
              <ProductItem key={item.id} item={item} />
            ))}

        {fromProductsPage &&
          data
            .sort((a: productItem, b: productItem) => a.price - b.price)
            .map((item: productItem) => (
              <ProductItem key={item.id} item={item} />
            ))}
      </div>

      {!fromProductsPage && (
        <div className='flex justify-center'>
          <Link
            href='/products'
            className={cn(buttonVariants({ variant: 'outline' }), 'mt-20')}
          >
            View all products
          </Link>
        </div>
      )}
    </section>
  );
};

export default Products;
