import Image from "next/image";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)]">
      <div className="w-full h-full grid grid-rows-8 gap-5items-center">
        {/* FIRST ROW */}
        <div className="w-full h-[6rem] grid grid-cols-[30%_auto] gap-20">
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/17843272/pexels-photo-17843272/free-photo-of-a-woman-working-as-an-engineer.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="woman image"
              width={320}
              height={180}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-full flex-center">
            <h2 className="text-6xl uppercase font-semibold">
              Lorem ipsum dolor
            </h2>
          </div>
        </div>

        <hr className="border-gray" />

        {/* SECOND ROW */}
        <div className="w-full h-[6rem] grid grid-cols-[25%_auto_50%] gap-20">
          <div className="w-full h-full flex-center">
            <h2 className="text-6xl uppercase font-semibold">Lorems</h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[50px_0px_50px_50px]">
            <Image
              src="https://images.pexels.com/photos/17843272/pexels-photo-17843272/free-photo-of-a-woman-working-as-an-engineer.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="woman image"
              width={320}
              height={180}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex-center">
            <h2 className="text-6xl uppercase font-semibold">
              Lorem ipsum dolor
            </h2>
          </div>
        </div>

        <hr className="border-gray" />

        {/* THIRD ROW */}
        <div className="w-full h-[6rem] grid grid-cols-[40%_auto] gap-20">
          <div className="w-full h-full flex-center">
            <h2 className="text-6xl uppercase font-semibold">Lorem ipsum</h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/17843272/pexels-photo-17843272/free-photo-of-a-woman-working-as-an-engineer.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="woman image"
              width={320}
              height={180}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <hr className="border-gray" />

        {/* FOURTH ROW */}
        <div className="w-full h-[6rem] grid grid-cols-[35%_auto] gap-20 bg-gray">
          <div className="w-full h-full overflow-hidden rounded-[50px_50px_50px_0px]">
            <Image
              src="https://images.pexels.com/photos/17843272/pexels-photo-17843272/free-photo-of-a-woman-working-as-an-engineer.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="woman image"
              width={320}
              height={180}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex-center">
            <h2 className="text-6xl uppercase font-semibold">
              Lorem ipsum dolor
            </h2>
          </div>
        </div>

        <hr className="border-gray" />
      </div>
    </section>
  );
};

export default Hero;
