"use client";
import { Modal, ModalBody, ModalContent } from "@/components/ui/animated-modal";

import useModal from "@/store/modal";
import bg from "@/app/assets/images/modal2bg.jpeg";
import graphic from "@/app/assets/images/graphic1.png";
import graphic2 from "@/app/assets/images/graphic2.png";

import Image from "next/image";
import XPCard from "./xpCard";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const CongratulationsModal = () => {
  const { isOpen, type, modalStates } = useModal((state) => state);
  const controls = useAnimation();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const sequence = async () => {
      if (isOpen && type === "congratulations") {
        try {
          await controls.start("visible");
          await delay(1000);
          await controls.start("text");
          await controls.start("desciption");
          await controls.start("rewards");
          await controls.start("badge");
          await controls.start("rank");
        } catch (error) {
          console.error("Animation sequence failed:", error);
        }
      }
    };

    sequence();
  }, [isOpen, type, controls]);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          text: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.05 },
          },
        }}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    isOpen &&
    type === "congratulations" && (
      <Modal>
        <ModalBody className=" text-white md:w-[500px]  md:max-w-4xl rounded-3xl   p-0 m-0 border-none ">
          <ModalContent
            className={` md:p-0 m-0  text-white border-[#423520]  rounded-3xl border-2`}
          >
            <div
              style={{
                background: `url(${bg.src}) top`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className=" rounded-4xl"
            >
              <motion.div
                initial={{ opacity: 0.0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center h-full"
              >
                <div
                  className={
                    " p-4 text-center rounded-3xl h-full py-10 bg-gradient-to-b from-transparent via-transparent to-black/80"
                  }
                >
                  <motion.h1
                    className="text-[#F3BA2F] text-[44px] p-0 m-0 line-clamp-3 font-[900]"
                    initial="initial"
                    animate="animate"
                  >
                    {splitText("Congratulations!")}
                  </motion.h1>

                  <motion.p
                    className="text-[#F3BA2F] text-[30px] font-[500]"
                    variants={{
                      text: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          delay: 1,
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                      },
                    }}
                    initial={{ opacity: 0 }}
                    animate={controls}
                  >
                    Command completed Successfully!
                  </motion.p>

                  <motion.div
                    className="flex justify-center"
                    variants={{
                      desciption: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      },
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                  >
                    <motion.p
                      className="text-[#C8AA7A] text-balance my-10"
                      initial="initial"
                      animate="animate"
                    >
                      You have successfully completed a command! Here are your
                      well-earned rewards. Keep exploring the Command Center roe
                      even more exciting mission and bigger rewards!
                      <br />
                      You have gained:
                    </motion.p>
                  </motion.div>

                  <motion.div
                    variants={{
                      rewards: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      },
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    className="flex gap-2 items-center mb-10 justify-center"
                  >
                    <div>
                      <Image src={graphic} height={10} alt="" />
                    </div>
                    <div className="text-white text-xl top-1 relative">
                      Rewards
                    </div>
                    <div>
                      <Image src={graphic2} height={10} alt="" />
                    </div>
                  </motion.div>
                  <div className="flex gap-10 items-center justify-center">
                    {modalStates?.rewards?.map((item: any, index: number) => (
                      <motion.div
                        key={index}
                        animate={controls}
                        initial={{ scale: 10, opacity: 0 }}
                        variants={{
                          badge: {
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.5, delay: index * 0.5 },
                          },
                        }}
                      >
                        <XPCard image={item} title="20 XP" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    )
  );
};

export default CongratulationsModal;
