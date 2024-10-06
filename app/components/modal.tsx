"use client";
import React, { useEffect } from "react";
import bg from "@/app/assets/images/bg.jpeg";
import badge from "@/app/assets/images/badge.png";
import useModal from "@/store/modal";
import XP from "./xp";
import { Modal, ModalBody, ModalContent } from "@/components/ui/animated-modal";
import { motion, useAnimation } from "framer-motion";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import LevelUp from "../assets/svg/levelUp";
import { setTimeout } from "timers";
import { percentage } from "@/lib/utils";

const ModalComponent: React.FC = () => {
  const { isOpen, type, modalStates } = useModal((state) => state);
  const pertange = percentage(modalStates?.totalXp, modalStates?.xpCount);

  const controls = useAnimation();
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const sequence = async () => {
      if (isOpen && type === "levelup") {
        try {
          controls.start("visible");
          await delay(500);
          await controls.start("levelUpText");

          await controls.start("badge");
          await controls.start("rank");
          await controls.start("xpBar");
          await controls.start("actionButton");
          await controls.start("descriptionText");
        } catch (error) {
          console.error("Animation sequence failed:", error);
        }
      }
    };

    sequence();
  }, [isOpen, type, controls]);

  return (
    isOpen &&
    type === "levelup" && (
      <Modal>
        <ModalBody className=" text-white h-full min-h-full w-full min-w-full   p-0 m-0 border-none ">
          <div
            className="bg-no-repeat bg-top bg-fixed w-full  rounded-none"
            style={{
              backgroundImage: `url(${bg.src})`,
            }}
          >
            <ModalContent>
              <div className="container mx-auto text-center py-32">
                <motion.div
                  className="flex justify-center py-5"
                  variants={{
                    levelUpText: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                >
                  <LevelUp />
                </motion.div>
                <motion.div
                  className="flex justify-center"
                  variants={{
                    badge: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.5 },
                    },
                  }}
                  initial={{ opacity: 0, scale: 100 }}
                  animate={controls}
                >
                  <Image
                    src={badge}
                    className="object-contain w-48"
                    alt="Badge"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    rank: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                >
                  <div className="mx-auto text-center pt-12 flex justify-center">
                    <h3 className="text-[#291911] [text-shadow:_0px_3px_4px_#291911] text-[50px] font-bold p-0 m-0">
                      {modalStates?.title}
                    </h3>
                  </div>
                </motion.div>

                <motion.div
                  className="mx-auto max-w-2xl px-4"
                  variants={{
                    xpBar: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                >
                  <XP
                    xpCount={modalStates?.xpCount}
                    totalXp={modalStates?.totalXp}
                    progress={pertange}
                  />
                </motion.div>
                <motion.div
                  variants={{
                    actionButton: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  className="mx-auto my-2 pt-5 sm:w-3/6 px-4 w-full"
                >
                  <Button
                    style={{
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, #F7C891 8.5%, #F3AC59 12.75%, #EC6615 77%, #944617 100%)",
                    }}
                    className="border-[#35241C] border-2 text-[#35241C] font-extrabold p-5 text-xl"
                  >
                    Claim NFT Badge
                  </Button>
                </motion.div>
                <motion.div
                  variants={{
                    descriptionText: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  className="mx-auto my-3  w-full"
                >
                  <h4 className="text-2xl  text-[#35241C] font-bold">
                    You’ve leveled up and earned a new badge!{" "}
                  </h4>
                  <p className="text-xl text-[#DCC794]">
                    Claim your{" "}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="text-[#FFC850] font-bold"
                    >
                      NFT badge
                    </motion.span>{" "}
                    now, or retrieve it later from your Inventory.
                  </p>
                  <p className="sm:text-xl text-lg px-2 text-[#DCC794] text-balance mt-5">
                    To claim your new badge, you&apos;ll need to transfer your
                    previous badge from your wallet for it to be burned in
                    exchange for the new one. If there&apos;s insufficient gas
                    in your wallet, the transaction will be canceled. You can
                    always visit your Inventory and claim your badge at any
                    time.
                  </p>
                </motion.div>
              </div>
            </ModalContent>
          </div>
        </ModalBody>
      </Modal>
    )
  );
};

export default ModalComponent;
