import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/library/utils";
import Link from "next/link";
const playfair_Display = Playfair_Display({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="wrapper h-[calc(100vh-5rem)]">
      <div className="w-full h-full grid grid-rows-8 gap-5 items-center relatives">
        {/* FIRST ROW */}
        <div className="w-full h-[6rem] grid grid-cols-[30%_auto] gap-20">
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/17843272/pexels-photo-17843272/free-photo-of-a-woman-working-as-an-engineer.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="woman image"
              width={640}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-full flex-center">
            <h2 className="headline-1 uppercase font-semibold">Elevate Your</h2>
          </div>
        </div>

        <hr className="border-gray" />

        {/* SECOND ROW */}
        <div className="w-full h-[6rem] grid grid-cols-[25%_auto_30%] gap-20">
          <div className="w-full h-full flex-center">
            <h2
              className={cn(playfair_Display.className, "headline-1 lowercase")}
            >
              Beauty
            </h2>
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
            <h2 className="headline-1 uppercase font-semibold">with</h2>
          </div>
        </div>

        <hr className="border-gray" />

        {/* THIRD ROW */}
        <div className="w-full h-[6rem] grid grid-cols-[45%_auto] gap-20">
          <div className="w-full h-full flex-center">
            <h2 className="headline-1 uppercase font-semibold">
              Glamoura<span className="text-green">&apos;s</span>
            </h2>
          </div>
          <div className="w-full h-full overflow-hidden rounded-[0px_50px_0px_50px]">
            <Image
              src="https://images.pexels.com/photos/17843272/pexels-photo-17843272/free-photo-of-a-woman-working-as-an-engineer.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="woman image"
              width={1020}
              height={640}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <hr className="border-gray" />

        {/* FOURTH ROW */}
        <div className="w-full h-[6rem] grid grid-cols-[35%_auto] gap-20">
          <div className="w-full h-full overflow-hidden rounded-[50px_50px_50px_0px]">
            <Image
              src="https://images.pexels.com/photos/17843272/pexels-photo-17843272/free-photo-of-a-woman-working-as-an-engineer.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="woman image"
              width={1020}
              height={640}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full flex-center">
            <h2 className="text-7xl uppercase font-semibold">
              <span
                className={cn(
                  playfair_Display.className,
                  "lowercase font-normal headline-1"
                )}
              >
                Signature{" "}
              </span>
              <span className="text-orange">Touch.</span>
            </h2>
          </div>
        </div>

        <hr className="border-gray" />
        {/* packages button */}
        <Link
          href="/#packages"
          className="bg-blue/70 backdrop-blur-md text-light w-32 h-32 rounded-full overflow-hidden flex justify-center items-center uppercase text-lg absolute bottom-20 left-[45%] z-[1] group shadow-lg shadow-dark/50 eq group-hover:shadow-blue/50"
        >
          <p className="z-[3]">Packages</p>
          {/* filler 1*/}
          <span className="z-[2] absolute top-full right-0 bottom-0 left-0 w-full h-1/2 bg-violet/70 eq group-hover:top-1/2"></span>

          {/* filler 2*/}
          <span className="z-[2] absolute -top-full right-0 bottom-0 left-0 w-full h-1/2 bg-violet/70 eq group-hover:top-0"></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
