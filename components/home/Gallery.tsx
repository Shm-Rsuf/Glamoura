import SectionTitle from '../shared/SectionTitle';

const Gallery = () => {
  return (
    <section className='my-20 h-screen bg-dark text-light'>
      <div className='wrapper section-padding h-full w-full'>
        <SectionTitle
          title='Gallery'
          subtitle='Explore our gallery section'
          color='bg-orange'
        />
      </div>
    </section>
  );
};

export default Gallery;
