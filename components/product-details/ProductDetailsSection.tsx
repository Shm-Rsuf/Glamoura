import { productItem } from '@/types/productItem';

interface ProductDetailsSectionProps {
  productItem: productItem;
}

const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({
  productItem,
}) => {
  return <div>{productItem.title}</div>;
};

export default ProductDetailsSection;
