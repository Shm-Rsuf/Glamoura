import { data } from '@/data/gallery';
import SectionTitle from '../shared/SectionTitle';
import { cn } from '@/library/utils';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
  return (
    <section className='my-20 min-h-screen bg-dark text-light'>
      <div className='wrapper section-padding h-full w-full'>
        <SectionTitle
          title='Gallery'
          subtitle='Explore our gallery section'
          color='bg-orange'
        />

        {/* grid parent */}
        <div className='gallery-grid_parent relative h-screen w-full gap-10'>
          {data.map((item: any) => (
            <div
              key={item.id}
              className={cn(
                item.class,
                'h-full w-full overflow-hidden border-8'
              )}
            >
              <div className='h-full w-full overflow-hidden bg-dark'>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={360}
                  height={360}
                  priority
                  className='h-full w-full object-cover'
                />
              </div>
            </div>
          ))}

          <div className='eq group absolute bottom-20 left-[50%] top-[50%] z-[1] flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-blue/70 text-lg uppercase text-light shadow-lg shadow-dark/50 backdrop-blur-md group-hover:shadow-blue/50'>
            <p className='z-[3]'>Gallery</p>
            {/* filler 1*/}
            <span className='eq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2 w-full bg-dark/70 group-hover:top-1/2'></span>

            {/* filler 2*/}
            <span className='eq absolute -top-full bottom-0 left-0 right-0 z-[2] h-1/2 w-full bg-dark/70 group-hover:top-0'></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
