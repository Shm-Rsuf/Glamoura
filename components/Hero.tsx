import Image from "next/image";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] grid grid-cols-5">
      <div className="w-full h-full">
        <Image
          src="https://images.pexels.com/photos/8467429/pexels-photo-8467429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image1"
          width={300}
          height={700}
          priority
          className="w-full h-4/6 object-cover"
        />
      </div>
      <div className="w-full h-full"></div>
      <div className="w-full h-full flex items-center">
        <Image
          src="https://images.pexels.com/photos/13582001/pexels-photo-13582001.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Pramod Tiwari"
          width={300}
          height={700}
          priority
          className="w-full h-4/6 object-cover"
        />
      </div>
      <div className="w-full h-full"></div>
      <div className="w-full h-full flex jus items-end">
        <Image
          src="https://images.pexels.com/photos/17591384/pexels-photo-17591384/free-photo-of-light-sea-dawn-landscape.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="image three"
          width={300}
          height={700}
          priority
          className="w-full h-4/6 object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
