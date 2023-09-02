import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import { cn } from '@/library/utils';
import Link from 'next/link';
const playfair_Display = Playfair_Display({ subsets: ['latin'] });

const Hero = () => {
  return (
    <section className='wrapper h-[calc(100vh-5rem)]'>
      <div className='grid-rows-8 relatives grid h-full w-full items-center gap-5'>
        {/* FIRST ROW */}
        <div className='grid h-[6rem] w-full grid-cols-[30%_auto] gap-20'>
          <div className='h-full w-full overflow-hidden rounded-[0px_50px_0px_50px]'>
            <Image
              src='https://images.pexels.com/photos/17843272/pexels-photo-17843272/free-photo-of-a-woman-working-as-an-engineer.jpeghttps://images.pexels.com/photos/2764972/pexels-photo-2764972.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='woman image'
              width={640}
              height={360}
              className='h-full w-full object-cover'
            />
          </div>

          <div className='flex-center h-full w-full'>
            <h2 className='headline-1 font-semibold uppercase'>Elevate Your</h2>
          </div>
        </div>

        <hr className='border-gray' />

        {/* SECOND ROW */}
        <div className='grid h-[6rem] w-full grid-cols-[25%_auto_30%] gap-20'>
          <div className='flex-center h-full w-full'>
            <h2
              className={cn(playfair_Display.className, 'headline-1 lowercase')}
            >
              Beauty
            </h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[50px_0px_50px_50px]'>
            <Image
              src='https://images.pexels.com/photos/3997982/pexels-photo-3997982.jpeg'
              alt='woman image'
              width={320}
              height={180}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex-center h-full w-full'>
            <h2 className='headline-1 font-semibold uppercase'>with</h2>
          </div>
        </div>

        <hr className='border-gray' />

        {/* THIRD ROW */}
        <div className='grid h-[6rem] w-full grid-cols-[45%_auto] gap-20'>
          <div className='flex-center h-full w-full'>
            <h2 className='headline-1 font-semibold uppercase'>
              Glamoura&apos;<span className='text-blue'>s</span>
            </h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[0px_50px_0px_50px]'>
            <Image
              src='https://images.pexels.com/photos/7219901/pexels-photo-7219901.jpeg'
              alt='woman image'
              width={1020}
              height={640}
              className='h-full w-full object-cover'
            />
          </div>
        </div>

        <hr className='border-gray' />

        {/* FOURTH ROW */}
        <div className='grid h-[6rem] w-full grid-cols-[35%_auto] gap-20'>
          <div className='h-full w-full overflow-hidden rounded-[50px_50px_50px_0px]'>
            <Image
              src='https://images.pexels.com/photos/6663456/pexels-photo-6663456.jpeg'
              alt='woman image'
              width={1020}
              height={640}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex-center h-full w-full'>
            <h2 className='text-7xl font-semibold uppercase'>
              <span
                className={cn(
                  playfair_Display.className,
                  'headline-1 font-normal lowercase'
                )}
              >
                Signature{' '}
              </span>
              <span className='text-orange'>Touch.</span>
            </h2>
          </div>
        </div>

        <hr className='border-gray' />
        {/* packages button */}
        <Link
          href='/#packages'
          className='eq group absolute bottom-20 left-[45%] z-[1] flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-blue/70 text-lg uppercase text-light shadow-lg shadow-dark/50 backdrop-blur-md group-hover:shadow-blue/50'
        >
          <p className='z-[3]'>Packages</p>
          {/* filler 1*/}
          <span className='eq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2 w-full bg-violet/70 group-hover:top-1/2'></span>

          {/* filler 2*/}
          <span className='eq absolute -top-full bottom-0 left-0 right-0 z-[2] h-1/2 w-full bg-violet/70 group-hover:top-0'></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
