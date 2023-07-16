"use client";
import { getTransition } from "@/utils/getTransition";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="wrapper section-padding h-[calc(100vh-5rem)] grid grid-cols-5">
      {/* FIRST COL */}
      <div className="w-full h-full">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition()}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/8467429/pexels-photo-8467429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image1"
              width={300}
              height={700}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* SECOND COL */}
      <div className="w-full h-full"></div>
      {/* THIRD COL */}
      <div className="w-full h-full flex items-center">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.2)}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/13582001/pexels-photo-13582001.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pramod Tiwari"
              width={300}
              height={700}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      {/* FOURTH COL */}
      <div className="w-full h-full"></div>
      {/* FIFTH COL */}
      <div className="w-full h-full flex jus items-end">
        <div className="w-full h-4/6 overflow-hidden">
          <motion.div
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={getTransition(0.4)}
            className="w-full h-full"
          >
            <Image
              src="https://images.pexels.com/photos/17591384/pexels-photo-17591384/free-photo-of-light-sea-dawn-landscape.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image three"
              width={300}
              height={700}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
