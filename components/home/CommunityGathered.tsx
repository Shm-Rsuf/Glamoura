import Image from 'next/image';

const CommunityGathered = () => {
  return (
    <section className='section-padding-2 my-20 min-h-screen bg-dark'>
      <div className='wrapper flex h-full w-full items-center justify-center'>
        {/* Block */}
        <div className='relative grid h-[1000px] w-[1000px] grid-cols-10 bg-purple-500'>
          {Array.from({ length: 100 }).map((_, index) => (
            /* Outer block */
            <div key={index} className='group z-[3] h-full w-full'>
              {/* Inner block */}
              <div className='eq invisible h-full w-full bg-blue opacity-50 group-hover:visible group-hover:opacity-100'></div>
            </div>
          ))}

          {/* overlay */}
          <div className='absolute bottom-0 left-0 right-0 top-0 z-[2] h-full w-full bg-blue/20'></div>

          {/* Image */}
          <div className='absolute bottom-0 left-0 right-0 top-0 z-[1] h-full w-full overflow-hidden'>
            <Image
              src='https://images.pexels.com/photos/7089502/pexels-photo-7089502.jpeg'
              alt='Muhamad Lutfi'
              width={1000}
              height={1000}
              priority
              className='h-full w-full object-cover'
            />
          </div>

          {/* upper left text */}
          <div className='absolute -left-32 top-[10%] z-[3] w-[50%] text-3xl font-semibold uppercase text-light'>
            {`Join now to grab the`}{' '}
            <span className='text-orange'>{`"Glamoura Beauty Pass"`}</span>{' '}
            {`for all services at once!`}
          </div>
          {/* bottom right text */}
          <div className='absolute -right-32 bottom-[10%] z-[3] w-[50%] text-right text-3xl font-semibold uppercase text-light'>
            {`3-month subscription,`} <span className='text-orange'>$300</span>.{' '}
            {`Limited time – join us today!`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityGathered;
