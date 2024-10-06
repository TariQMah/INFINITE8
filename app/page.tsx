"use client";

import useModal from "@/store/modal";
import xp from "@/app/assets/images/xp.png";
import points from "@/app/assets/images/points.png";

export default function Home() {
  const { toggleModal } = useModal((state) => state);

  return (
    <div className="">
      <a
        onClick={(e) => {
          e.preventDefault();
          toggleModal("levelup", {
            title: "Corporal",
            xpCount: "34,500",
            totalXp: "50,000",
          });
        }}
      >
        Level Up Modal
      </a>
      <br />
      <a
        onClick={(e) => {
          e.preventDefault();
          toggleModal("congratulations", {
            rewards: [xp, points],
          });
        }}
      >
        Congratulations Modal
      </a>
    </div>
  );
}
