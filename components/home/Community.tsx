import Image from 'next/image';
import Link from 'next/link';

const Community = () => {
  return (
    <section className='wrapper h-screen'>
      <div className='relative flex h-full w-full items-center justify-center'>
        {/* main box */}
        <div className='relative h-[400px] w-[400px] bg-gray'>
          {/* left box */}
          <div className='absolute -left-[25%] -top-[25%] z-[2] h-[300px] w-[250px] overflow-hidden rounded-tl-[50px]'>
            <Image
              src='https://images.pexels.com/photos/2764972/pexels-photo-2764972.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='woman image'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* mid box */}
          <div className='absolute left-[50%] top-[50%] z-[3] h-[300px] w-[280px] -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
            <Image
              src='https://images.pexels.com/photos/2383117/pexels-photo-2383117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='woman image'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* right box */}
          <div className='absolute -bottom-[25%] -right-[25%] z-[2] h-[300px] w-[250px] overflow-hidden rounded-br-[50px]'>
            <Image
              src='https://images.pexels.com/photos/2764972/pexels-photo-2764972.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='woman image'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* upper right text */}
          <h2 className='headline-2 absolute -top-[15%] left-[40%] z-[2] whitespace-nowrap font-semibold uppercase'>
            Join glamoura
          </h2>
          {/* bottom left text */}
          <h2 className='headline-2 absolute -bottom-[15%] right-[40%] z-[2] font-semibold uppercase'>
            Community
          </h2>
        </div>
        {/* join button */}
        <Link
          href='/'
          className='eq group absolute bottom-[15%] right-[10%] z-[1] flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-blue/70 text-lg uppercase text-light shadow-lg shadow-dark/50 backdrop-blur-md group-hover:shadow-blue/50'
        >
          <p className='z-[3]'>Join Now</p>
          {/* filler 1*/}
          <span className='eq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2 w-full bg-red/90 group-hover:top-1/2'></span>

          {/* filler 2*/}
          <span className='eq absolute -top-full bottom-0 left-0 right-0 z-[2] h-1/2 w-full bg-red/90 group-hover:top-0'></span>
        </Link>
      </div>
    </section>
  );
};

export default Community;
