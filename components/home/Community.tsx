const Community = () => {
  return (
    <section className='wrapper section-padding h-screen'>
      <div className='flex h-full w-full items-center justify-center bg-dark'>
        {/* main box */}
        <div className='relative h-[300px] w-[300px] bg-red'>
          {/* left box */}
          <div className='absolute -left-[25%] -top-[25%] z-[2] h-[200px] w-[180px] bg-violet'></div>
          {/* mid box */}
          <div className='absolute left-[50%] top-[50%] z-[3] h-[250px] w-[200px] -translate-x-1/2 -translate-y-1/2 bg-orange'></div>
          {/* right box */}
          <div className='absolute -bottom-[25%] -right-[25%] z-[2] h-[200px] w-[180px] bg-violet'></div>
        </div>
      </div>
    </section>
  );
};

export default Community;
