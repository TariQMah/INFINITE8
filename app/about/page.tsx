"use client";
import useModal from "@/store/modal";
import Link from "next/link";
import React from "react";
import xp from "@/app/assets/images/xp.png";
import points from "@/app/assets/images/points.png";
const Page = () => {
  const { toggleModal } = useModal((state) => state);
  return (
    <div>
      About Page Call the modals from this page using zustand
      <div className="flex gap-10 items-center">
        <Link
          onClick={(e) => {
            e.preventDefault();
            toggleModal("levelup", {
              title: "Corporal",
              xpCount: "34,500",
              totalXp: "50,000",
            });
          }}
          href={"#"}
        >
          Level Up Modal
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            toggleModal("congratulations", {
              rewards: [xp, points],
            });
          }}
          href={"#"}
        >
          Congralutation Modal
        </Link>
      </div>
    </div>
  );
};

export default Page;
