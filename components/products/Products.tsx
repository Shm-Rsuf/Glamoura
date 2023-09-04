import SectionTitle from '../shared/SectionTitle';

const Products = () => {
  return (
    <section className='wrapper section-padding' id='products'>
      <SectionTitle title='Products' subtitle='Explore our beauty products' />
      {/* Products */}
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        {/* Multiple products goes here */}
      </div>
    </section>
  );
};

export default Products;