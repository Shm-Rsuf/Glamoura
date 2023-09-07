import { productItem } from '@/types/productItem';

interface ProductDetailsSectionProps {
  product: productItem;
}

const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({
  product,
}) => {
  return <div>{product.title}</div>;
};

export default ProductDetailsSection;
