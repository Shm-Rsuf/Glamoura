import Image from 'next/image';

const Community = () => {
  return (
    <section className='wrapper section-padding h-screen'>
      <div className='flex h-full w-full items-center justify-center'>
        {/* main box */}
        <div className='relative h-[300px] w-[300px] bg-gray'>
          {/* left box */}
          <div className='absolute -left-[25%] -top-[25%] z-[2] h-[200px] w-[180px] overflow-hidden rounded-tl-[50px]'>
            <Image
              src='https://images.pexels.com/photos/5069441/pexels-photo-5069441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='woman image'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* mid box */}
          <div className='absolute left-[50%] top-[50%] z-[3] h-[220px] w-[200px] -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
            <Image
              src='https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='woman image'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* right box */}
          <div className='absolute -bottom-[25%] -right-[25%] z-[2] h-[200px] w-[180px] overflow-hidden rounded-br-[50px]'>
            <Image
              src='https://images.pexels.com/photos/5069454/pexels-photo-5069454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='woman image'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* upper right text */}
          <h2 className='absolute -top-[25%] left-[40%] whitespace-nowrap text-6xl font-semibold uppercase'>
            Join glamoura
          </h2>
          {/* bottom left text */}
          <h2 className=' absolute -bottom-[25%] right-[40%] text-6xl font-semibold uppercase'>
            Community
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Community;
