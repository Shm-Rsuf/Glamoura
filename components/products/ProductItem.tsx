import { productItem } from '@/types/productItem';
import Image from 'next/image';
import Link from 'next/link';

interface ProductItemProps {
  item: productItem;
}
const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  return (
    <div className='bg-red'>
      <div className=''>
        <Image
          src={item.images[0]}
          alt={item.title}
          width={640}
          height={360}
          priority
        />
      </div>
      {/* content */}
      <div className=''>
        <span>{item.category}</span>
        <h3>{item.title}</h3>
        <hr />
        <p>{item.description}</p>
        <div className=''>
          <p>{item.price}</p>
          <Link href={`/products/${item.id}`}>Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
