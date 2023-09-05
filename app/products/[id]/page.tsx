import ProductDetailsSection from '@/components/product-details/ProductDetailsSection';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';
import { data } from '@/data/products';
import { productItem } from '@/types/productItem';

const ProductsDeatilsPage = ({ params }: { params: { id: string } }) => {
  const id = +params.id;
  const productItem = data.find((item: productItem) => item.id === id);
  if (!productItem) {
    return null;
  }
  return (
    <>
      <Navbar />
      <main>
        <ProductDetailsSection productItem={productItem} />
      </main>
      <FooterMini />
    </>
  );
};

export default ProductsDeatilsPage;
